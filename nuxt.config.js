import pkg from "./package";

export default {
  mode: "universal",
  head: {
    title: "Azka Bakery",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Dancing+Script|Roboto:400,700"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.4.1.min.js",
        integrity: "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=",
        crossorigin: "anonymous",
        body: true
      },
      {
        src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
        id: "snipcart",
        "data-api-key":
          "YzQxZGI3NDAtNjFkMS00ZmUwLTkzNjgtNzc0YzgxOGE4YTI4NjM2MjMxNjMwMTA1OTMzMDk2",
        body: true
      }
    ]
  },
  loading: { color: "#ff9800" },
  css: ["aos/dist/aos.css", "~/assets/snipcart/custom-snipcart.css"],
  plugins: [
    "~/plugins/bootstrap",
    "~/plugins/vue-lazyload",
    "~/plugins/vue2-google-maps",
    { src: "~/plugins/aos", ssr: false }
  ],
  modules: ["@nuxtjs/dotenv"],
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  router: {
    scrollBehavior: function() {
      return { x: 0, y: 0 };
    }
  },
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  }
};
