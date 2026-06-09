<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import ArrowIcon from "@/shared/ArrowIcon.vue";

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <p class="contact__index" data-reveal>
      {{ t.contact.index }} / CONTACT
    </p>
    <h2 id="contact-title" data-reveal>{{ t.contact.title }}</h2>
    <p class="contact__body" data-reveal>{{ t.contact.body }}</p>
    <div class="contact__channels" data-reveal>
      <a class="contact__channel" href="mailto:cristhion@cristhion.dev">
        <span>{{ t.contact.email }}</span>
        <small>cristhion@cristhion.dev</small>
        <ArrowIcon />
      </a>
      <a
        class="contact__channel"
        href="https://wa.me/5551995019715"
        target="_blank"
        rel="noreferrer"
      >
        <span>{{ t.contact.whatsapp }}</span>
        <small>+55 51 99501-9715</small>
        <ArrowIcon />
      </a>
    </div>
    <div class="contact__socials" data-reveal>
      <span>{{ t.contact.socialLabel }}</span>
      <a
        href="https://github.com/cristhion-srosa"
        target="_blank"
        rel="noreferrer"
        >GitHub ↗</a
      >
      <a
        href="https://www.linkedin.com/in/cristhion-silva/"
        target="_blank"
        rel="noreferrer"
        >LinkedIn ↗</a
      >
    </div>
  </section>
</template>
