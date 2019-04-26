module.exports={
  "env": "drupal",
  "buildDir": "./builds/en/",
  "publicPath": "bolt/public/en/",
  "verbosity": 1,
  "components": {
    "global": ["@bolt/global", "@bolt/components-teaser", "@bolt/components-share", "@bolt/components-dropdown", "@bolt/components-background", "@bolt/components-background-shapes", "@bolt/components-page-header", "@bolt/components-button-group", "@bolt/components-table", "@bolt/components-button", "@bolt/components-breadcrumb", "@bolt/components-action-blocks", "@bolt/components-chip-list", "@bolt/components-band", "@bolt/components-blockquote", "@bolt/components-sticky", "@bolt/components-block-list", "@bolt/components-navbar", "@bolt/components-figure", "@bolt/components-nav-priority", "@bolt/components-ul", "@bolt/components-image", "@bolt/components-li", "@bolt/components-logo", "@bolt/components-video", "@bolt/components-navlink", "@bolt/components-nav-indicator", "@bolt/components-device-viewer", "@bolt/components-ol", "@bolt/components-placeholder", "@bolt/components-headline", "@bolt/components-list", "@bolt/components-copy-to-clipboard", "@bolt/components-icon", "@bolt/components-tooltip", "@bolt/components-form", "@bolt/components-pagination", "@bolt/components-code-snippet", "@bolt/components-card", "@bolt/components-chip", "@bolt/components-link", "@bolt/components-grid", "@bolt/components-ratio"],
    "individual": ["@bolt/components-critical-fonts", "@bolt/components-critical-css", "@bolt/components-critical-css-vars"]
  },
  "globalData": {
    "scss": ["./_lang.en.scss"]
  }
}