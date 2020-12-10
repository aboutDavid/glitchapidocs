export default {
  "title": "Glitch API Docs",
  "tagline": "Unofficial API docs for Glitch.",
  "url": "https://glitchapi.baby-yoda.xyz",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "aboutdavid",
  "projectName": "glitchapidocs",
  "themeConfig": {
    "navbar": {
      "title": "Glitch API",
      "logo": {
        "alt": "My Site Logo",
        "src": "https://file.coffee/u/x5O8u1FG70.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://glitch.com",
          "label": "Glitch",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Glitch",
              "href": "https://glitch.com"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/glitch"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Glitch Support",
              "href": "https://support.glitch.com"
            }
          ]
        }
      ],
      "copyright": "This is not made nor endorsed by Gltch."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/runner/glitchapidocs/sidebars.js",
          "editUrl": "https://github.com/aboutDavid/glitchapidocs/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/aboutDavid/glitchapidocs/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/runner/glitchapidocs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};