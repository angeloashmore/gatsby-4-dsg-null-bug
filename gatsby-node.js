const path = require("path");

exports.createPages = ({ actions: { createPage } }) => {
  ["foo", "bar"].forEach((pagePath) => {
    createPage({
      path: pagePath,
      component: path.resolve(__dirname, "./src/templates/page.tsx"),
      context: { pagePath },
      defer: true,
    });
  });
};
