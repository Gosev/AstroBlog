import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: "https://tailwind-astro.vercel.app",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap({}), astroI18next({
    baseLanguage: "en",
    i18next: {
      debug: false,
      // convenient during development to check for missing keys
      supportedLngs: ["en", "fr"]
    }
  }), mdx(), image()]
});