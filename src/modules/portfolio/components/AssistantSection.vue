<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import {
  type AssistantMessage,
  askPortfolioAssistant,
  createMessage,
} from "@/modules/assistant/portfolioAssistant";
import { useTurnstile } from "@/modules/assistant/useTurnstile";
import { useI18n } from "@/modules/i18n/useI18n";

const { locale, t } = useI18n();
const {
  container: turnstileContainer,
  isEnabled: isTurnstileEnabled,
  isReady: isTurnstileReady,
  reset: resetTurnstile,
  token: turnstileToken,
} = useTurnstile();

const messages = ref<AssistantMessage[]>([
  createMessage("assistant", t.value.assistant.empty, "local", [
    "profile.summary",
  ]),
]);
const question = ref("");
const isLoading = ref(false);
const liveRegion = ref("");
const messageList = ref<HTMLElement | null>(null);
const conversationContext = ref<string[]>([]);
const sessionId = ref<string | undefined>();

const lastTools = computed(
  () =>
    messages.value
      .slice()
      .reverse()
      .find((message) => message.role === "assistant")?.tools ?? [],
);

async function scrollToLatest() {
  await nextTick();
  messageList.value?.scrollTo({
    top: messageList.value.scrollHeight,
    behavior: "smooth",
  });
}

async function ask(nextQuestion = question.value) {
  const trimmed = nextQuestion.trim();
  if (!canAsk(trimmed)) return;

  messages.value.push(createMessage("user", trimmed));
  question.value = "";
  isLoading.value = true;
  liveRegion.value = t.value.assistant.status;
  await scrollToLatest();

  const reply = await askPortfolioAssistant(trimmed, locale.value, {
    context: conversationContext.value,
    sessionId: sessionId.value,
    turnstileToken: turnstileToken.value,
  });
  resetTurnstile();
  conversationContext.value = reply.context;
  sessionId.value = reply.sessionId;
  appendAssistantReply(reply);
  isLoading.value = false;
  liveRegion.value =
    reply.source === "remote"
      ? t.value.assistant.status
      : t.value.assistant.error;
  await scrollToLatest();
}

function canAsk(trimmed: string) {
  return Boolean(trimmed) && !isLoading.value && isTurnstileReady.value;
}

function appendAssistantReply(
  reply: Awaited<ReturnType<typeof askPortfolioAssistant>>,
) {
  messages.value.push(
    createMessage("assistant", reply.text, reply.source, reply.tools),
  );
}

function reset() {
  messages.value = [
    createMessage("assistant", t.value.assistant.empty, "local", [
      "profile.summary",
    ]),
  ];
  conversationContext.value = [];
  sessionId.value = undefined;
  liveRegion.value = t.value.assistant.empty;
}
</script>

<template>
  <section id="assistant" class="assistant section" aria-labelledby="assistant-title">
    <div class="assistant__intro" data-reveal>
      <span class="section-heading__index">{{ t.assistant.index }}</span>
      <div>
        <p class="eyebrow">{{ t.assistant.status }}</p>
        <h2 id="assistant-title">{{ t.assistant.title }}</h2>
        <p class="assistant__summary">{{ t.assistant.intro }}</p>
        <ul class="assistant__notes" aria-label="Chat behavior">
          <li>{{ t.assistant.contextNote }}</li>
          <li>{{ t.assistant.fallbackNote }}</li>
        </ul>
      </div>
    </div>

    <div class="assistant__shell" data-reveal>
      <div ref="messageList" class="assistant__messages" aria-live="polite">
        <article
          v-for="message in messages"
          :key="message.id"
          class="assistant-message"
          :class="`assistant-message--${message.role}`"
        >
          <span>
            {{
              message.role === "user"
                ? t.assistant.userLabel
                : t.assistant.assistantLabel
            }}
          </span>
          <p>{{ message.text }}</p>
        </article>
        <article v-if="isLoading" class="assistant-message assistant-message--assistant">
          <span>{{ t.assistant.assistantLabel }}</span>
          <p class="assistant__typing" aria-hidden="true">
            <i></i><i></i><i></i>
          </p>
        </article>
      </div>

      <form class="assistant__form" @submit.prevent="ask()">
        <label class="sr-only" for="assistant-question">
          {{ t.assistant.placeholder }}
        </label>
        <input
          id="assistant-question"
          v-model="question"
          type="text"
          autocomplete="off"
          :placeholder="t.assistant.placeholder"
          :disabled="isLoading"
        />
        <button
          type="submit"
          :disabled="isLoading || !question.trim() || !isTurnstileReady"
        >
          {{ t.assistant.send }}
        </button>
        <button type="button" class="assistant__reset" @click="reset">
          {{ t.assistant.reset }}
        </button>
      </form>

      <div
        v-if="isTurnstileEnabled"
        ref="turnstileContainer"
        class="assistant__turnstile"
        data-action="turnstile-spin-v1"
      ></div>

      <div class="assistant__suggestions" aria-label="Suggested questions">
        <button
          v-for="suggestion in t.assistant.suggestions"
          :key="suggestion"
          type="button"
          :disabled="isLoading || !isTurnstileReady"
          @click="ask(suggestion)"
        >
          {{ suggestion }}
        </button>
      </div>
    </div>

    <aside class="assistant__tools" data-reveal>
      <p>{{ t.assistant.toolLabel }}</p>
      <ul>
        <li v-for="tool in lastTools" :key="tool">{{ tool }}</li>
      </ul>
    </aside>

    <p class="sr-only" aria-live="polite">{{ liveRegion }}</p>
  </section>
</template>
