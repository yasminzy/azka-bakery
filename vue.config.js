const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  lintOnSave: true,
  plugins: [
    new PrerenderSpaPlugin(
      // Absolute path to compiled SPA
      path.join(__dirname, "dist"),
      // List of routes to prerender
      ["/", "/about", "/contact", "/order", "/sent"]
    )
  ]
};
