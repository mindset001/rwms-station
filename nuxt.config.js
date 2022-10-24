export default {
  mode: 'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rwms-station',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDSuVnYCNrb23t7gtx9yclxZDxAGbwwm44',
          authDomain: 'weather-station-76aed.firebaseapp.com',
          projectId: 'weather-station-76aed',
          storageBucket: 'weather-station-76aed.appspot.com',
          // databaseURL: "https://weather-station-76aed-default-rtdb.firebaseio.com",
          messagingSenderId: '<messagingSenderId>',
          appId: '1:11912231167:web:6070787b0b8785fc1db4ca',
          measurementId: '11912231167'
        },

        // config: {
        //   apiKey: "AIzaSyCRUYj4qqjaF8wZ_lyjFV3YIC-TwjjeNsA",
        //   authDomain: "flexzone-f1411.firebaseapp.com",
        //   projectId: "flexzone-f1411",
        //   storageBucket: "flexzone-f1411.appspot.com",
        //   messagingSenderId: "182730165683",
        //   appId: "1:182730165683:web:75194740db2f79a7b38fc6"
        // },
        services: {
          auth: true, // Just as example. Can be any other service.
          database: true,
        }
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // database: {
  //   emulatorPort: 3000,
  //   emulatorHost: 'localhost',
  // }
}
