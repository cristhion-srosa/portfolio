<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import ArrowIcon from "@/shared/ArrowIcon.vue";
import SectionHeading from "@/shared/SectionHeading.vue";

const { t } = useI18n();
</script>

<template>
  <section id="work" class="section work">
    <SectionHeading
      :index="t.work.index"
      :title="t.work.title"
      :intro="t.work.intro"
    />
    <div class="project-grid">
      <article
        v-for="(project, index) in t.work.projects"
        :key="project.name"
        class="project-card"
      >
        <div class="project-card__number">0{{ index + 1 }}</div>
        <div class="project-card__body">
          <p class="eyebrow">{{ project.eyebrow }}</p>
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <ul class="tag-list" aria-label="Technologies">
            <li v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
        </div>
        <a
          class="project-card__link"
          :href="project.url"
          target="_blank"
          rel="noreferrer"
        >
          {{ project.linkLabel }} <ArrowIcon />
        </a>
      </article>
    </div>
  </section>
</template>
