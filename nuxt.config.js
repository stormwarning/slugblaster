const SITE_TITLE = 'Slugblaster'
const SITE_DESCRIPTION =
    'Kick-flip over a quantum centipede. A table-top role-playing game by Mikey Hamm.'

export default {
    mode: 'universal',

    /**
      Headers of the page
     */
    head: {
        title: SITE_TITLE,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: SITE_DESCRIPTION,
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    /**
      Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /**
      Global CSS
     */
    css: [],

    /**
      Plugins to load before mounting the App
     */
    plugins: [],

    /**
      Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    /**
      Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa'],

    /**
      Build configuration
     */
    build: {
        // Extend webpack config here
        extend(config, ctx) {},
    },
}
