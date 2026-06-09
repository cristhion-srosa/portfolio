<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import ArrowIcon from "@/shared/ArrowIcon.vue";

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <p class="contact__index">{{ t.contact.index }} / CONTACT</p>
    <h2 id="contact-title">{{ t.contact.title }}</h2>
    <p class="contact__body">{{ t.contact.body }}</p>
    <div class="contact__channels">
      <a class="contact__channel" href="mailto:silvacristhion@gmail.com">
        <span>{{ t.contact.email }}</span>
        <small>silvacristhion@gmail.com</small>
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
    <div class="contact__socials">
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
