<script setup lang="ts">
import { useI18n } from "@/modules/i18n/useI18n";
import AboutSection from "@/modules/portfolio/components/AboutSection.vue";
import ContactSection from "@/modules/portfolio/components/ContactSection.vue";
import ExperienceSection from "@/modules/portfolio/components/ExperienceSection.vue";
import HeroSection from "@/modules/portfolio/components/HeroSection.vue";
import SiteHeader from "@/modules/portfolio/components/SiteHeader.vue";
import WorkSection from "@/modules/portfolio/components/WorkSection.vue";

const { t } = useI18n();
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="grain" aria-hidden="true" />
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <WorkSection />
    <ExperienceSection />
    <AboutSection />
    <ContactSection />
  </main>
  <footer class="site-footer">
    <p>{{ t.footer }}</p>
    <p>© {{ new Date().getFullYear() }}</p>
  </footer>
</template>
