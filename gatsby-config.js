module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby 4 DSG Test",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "gatsby-4-prismic-demo",
        accessToken:
          "MC5ZVVBkb2hJQUFDSUFneU1U.77-9c--_vUFE77-977-977-9Iu-_ve-_ve-_vUIBeF5yGu-_ve-_vRV8G--_vQbvv73vv73vv71-N--_ve-_vQ",
        schemas: {
          page: {
            Body: {
              body: {
                type: "Slices",
                fieldset: "Slice zone",
                config: {
                  // labels: null,
                  choices: {
                    hero_feature: {
                      type: "Slice",
                      fieldset: "Hero Feature",
                      description: "Intro to a feature page",
                      icon: "burst_mode",
                      display: "list",
                      "non-repeat": {
                        text: {
                          type: "StructuredText",
                          config: {
                            multi:
                              "paragraph,heading1,heading2,strong,em,hyperlink",
                            allowTargetBlank: true,
                            label: "Text",
                          },
                        },
                        button_link: {
                          type: "Link",
                          config: {
                            label: "Button Link",
                            // select: null,
                          },
                        },
                        button_text: {
                          type: "StructuredText",
                          config: {
                            single: "paragraph",
                            label: "Button Text",
                          },
                        },
                        image: {
                          type: "Image",
                          config: {
                            constraint: {},
                            thumbnails: [],
                            label: "Image",
                          },
                        },
                      },
                      repeat: {},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  ],
};
