
// Small plugin to disable the Authorize button without having to edit the original openapi.yaml file
const DisableAuthorizePlugin = function() {
  return {
    wrapComponents: {
      authorizeBtn: () => () => null
    }
  }
}

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://zenitel-as.github.io/Zenitel-Link/openapi/openapi.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    supportedSubmitMethods: [],
    tryItOutEnabled: false,
    presets: [
      SwaggerUIBundle.presets.apis,
      // SwaggerUIStandalonePreset
    ],
    plugins: [
      DisableAuthorizePlugin
      //  SwaggerUIBundle.plugins.DownloadUrl
    ],
    // layout: "StandaloneLayout"
  });

  //</editor-fold>
};
