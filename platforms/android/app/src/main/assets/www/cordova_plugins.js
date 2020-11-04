cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-hot-code-push-plugin.chcp",
    "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
    "pluginId": "cordova-hot-code-push-plugin",
    "clobbers": [
      "chcp"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-shared.AppCenter",
    "file": "plugins/cordova-plugin-appcenter-shared/www/AppCenter.js",
    "pluginId": "cordova-plugin-appcenter-shared",
    "clobbers": [
      "AppCenter"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-analytics.Analytics",
    "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
    "pluginId": "cordova-plugin-appcenter-analytics",
    "clobbers": [
      "AppCenter.Analytics"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-crashes.Crashes",
    "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
    "pluginId": "cordova-plugin-appcenter-crashes",
    "clobbers": [
      "AppCenter.Crashes"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-push.Push",
    "file": "plugins/cordova-plugin-appcenter-push/www/Push.js",
    "pluginId": "cordova-plugin-appcenter-push",
    "clobbers": [
      "AppCenter.Push"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-hot-code-push-plugin": "1.5.3",
  "cordova-plugin-appcenter-shared": "0.5.1",
  "cordova-plugin-appcenter-analytics": "0.5.1",
  "cordova-plugin-appcenter-crashes": "0.5.1",
  "cordova-plugin-appcenter-push": "0.5.1"
};
// BOTTOM OF METADATA
});