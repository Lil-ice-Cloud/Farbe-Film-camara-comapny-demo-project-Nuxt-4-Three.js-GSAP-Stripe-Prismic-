import { Client } from "@prismicio/client";
import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "apple-mobile-web-app-title", content: "Farbe-traning"},
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "apple-touch-icon.png",sizes: "180x180" },
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    }
  },
  modules: ["@nuxt/eslint", "@nuxtjs/prismic"],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig:{
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        }
      ],
    }
  },
});