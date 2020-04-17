<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  metaInfo: {
    title: "Remy Chantenay",
    titleTemplate: "%s | Porfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "X-UA-Compatible", content: "IE=edge" },
      {
        name: "keywords",
        content:
          "portfolio,freelance,android,backend,kotlin,golang,swift,aws,gcp",
        vmid: "keywords"
      },
      {
        name: "description",
        content:
          "My portfolio",
        vmid: "description"
      },
      {
        property: "og:title",
        content: "Remy Chantenay",
        template: chunk => `${chunk} | Portfolio`,
        vmid: "og:title"
      },
      {
        property: "og:description",
        content:
          "Remy Chantenay's portfolio",
        template: chunk => `${chunk}`,
        vmid: "og:description"
      },
      { name: "msapplication-TileColor", content: "#177BB3" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "apple-mobile-web-app-title", content: "Remy Chantenay's portfolio" },
      { name: "application-name", content: "Remy Chantenay's portfolio" },
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "theme-color", content: "#177BB3" }
    ],
    link: [
      { rel: "stylesheet", href: "/css/raster2.css" },
      { rel: "favicon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "shortcut icon", href: "/favicon.ico" }
    ]
  }
};
</script>

<style lang="scss">
@import "@/global-styles/variables.scss";
@import "@/global-styles/main.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/colours.scss";
@import "@/global-styles/spacing.scss";
@import "@/global-styles/layout.scss";
@import "@/global-styles/styles.scss";
@import "@/global-styles/buttons.scss";
@import "@/global-styles/forms.scss";
</style>
