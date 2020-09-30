export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Invite yourself to DSC LASU on GitHub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        name: 'robots',
        content: 'noarchive, index, follow',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'GITHUB, GOOGLE, DSC, LASU',
      },
      {
        hid: 'itemprop:title',
        itemprop: 'name',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'itemprop:description',
        itemprop: 'description',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'itemprop:image',
        itemprop: 'image',
        content: '',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'DSC-LASU GITHUB ORGANIZATION INVITATION',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/global_components', '~/plugins/vue_resource'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
