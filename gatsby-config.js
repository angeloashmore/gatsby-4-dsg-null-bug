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
          page: require("./custom_types/page.json"),
        },
      },
    },
  ],
};
