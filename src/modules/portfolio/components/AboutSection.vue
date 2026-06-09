<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import { stackLinks } from "@/modules/portfolio/stackLinks";
import SectionHeading from "@/shared/SectionHeading.vue";

const { t } = useI18n();
</script>

<template>
  <section id="about" class="section about">
    <SectionHeading :index="t.about.index" :title="t.about.title" />
    <div class="stack-showcase">
      <header class="stack-showcase__header">
        <p class="eyebrow">{{ t.about.stackLabel }}</p>
        <p>{{ t.about.stackIntro }}</p>
      </header>
      <div class="stack-groups">
        <article
          v-for="(group, index) in t.about.stack"
          :key="group.label"
          class="stack-group"
        >
          <header>
            <span>0{{ index + 1 }}</span>
            <h3>{{ group.label }}</h3>
          </header>
          <ul>
            <li v-for="item in group.items" :key="item">
              <a
                v-if="stackLinks[item]"
                :href="stackLinks[item]"
                target="_blank"
                rel="noreferrer"
              >
                {{ item }} <span aria-hidden="true">↗</span>
              </a>
              <span v-else>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
    <div class="about__grid">
      <div class="about__copy">
        <p v-for="paragraph in t.about.body" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="about__details">
        <div>
          <p class="eyebrow">{{ t.about.educationLabel }}</p>
          <p>{{ t.about.education }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
