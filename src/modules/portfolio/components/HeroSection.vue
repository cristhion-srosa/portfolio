<script setup lang="ts">
import portrait from "@/assets/portrait.jpeg";
import { useI18n } from "@/modules/i18n/useI18n";
import ArrowIcon from "@/shared/ArrowIcon.vue";

const { t } = useI18n();
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__copy">
      <p class="status"><span />{{ t.hero.status }}</p>
      <p class="hero__role">{{ t.hero.role }}</p>
      <h1 id="hero-title">Cristhion<br /><em>Rosa</em></h1>
      <p class="hero__intro">{{ t.hero.intro }}</p>
      <div class="hero__actions">
        <a class="button button--primary" href="#work">
          {{ t.hero.cta }} <ArrowIcon />
        </a>
        <a class="text-link" :href="t.hero.resumeUrl" download>
          {{ t.hero.secondaryCta }}
        </a>
      </div>
    </div>

    <div class="hero__visual">
      <div class="portrait-frame">
        <img :src="portrait" :alt="t.hero.photoAlt" />
        <span class="portrait-frame__tag">FULL-STACK / 2026</span>
      </div>
      <p class="hero__location">{{ t.hero.location }}</p>
    </div>

    <div class="metrics" aria-label="Career highlights">
      <article v-for="metric in t.metrics" :key="metric.value">
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
      </article>
    </div>
  </section>
</template>
