<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import ArrowIcon from "@/shared/ArrowIcon.vue";
import SectionHeading from "@/shared/SectionHeading.vue";

const { t } = useI18n();
</script>

<template>
  <section id="experience" class="section experience">
    <SectionHeading
      :index="t.experience.index"
      :title="t.experience.title"
      :intro="t.experience.intro"
    />
    <div class="timeline">
      <article
        v-for="(item, index) in t.experience.items"
        :key="item.company"
        class="timeline-item"
      >
        <div class="timeline-item__meta">
          <span>0{{ index + 1 }}</span>
          <p>{{ item.period }}</p>
          <p>{{ item.location }}</p>
        </div>
        <div class="timeline-item__content">
          <p class="eyebrow">{{ item.role }}</p>
          <h3>
            <a :href="item.url" target="_blank" rel="noreferrer">
              {{ item.company }} <ArrowIcon />
            </a>
          </h3>
          <p class="timeline-item__summary">{{ item.summary }}</p>
          <ul>
            <li v-for="highlight in item.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>
