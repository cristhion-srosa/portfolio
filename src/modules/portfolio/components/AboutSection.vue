<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import SectionHeading from "@/shared/SectionHeading.vue";

const { t } = useI18n();
</script>

<template>
  <section id="about" class="section about">
    <SectionHeading :index="t.about.index" :title="t.about.title" />
    <div class="about__grid">
      <div class="about__copy">
        <p v-for="paragraph in t.about.body" :key="paragraph">{{ paragraph }}</p>
      </div>
      <div class="about__details">
        <div>
          <p class="eyebrow">{{ t.about.stackLabel }}</p>
          <ul class="stack-list">
            <li v-for="item in t.about.stack" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <p class="eyebrow">{{ t.about.educationLabel }}</p>
          <p>{{ t.about.education }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
