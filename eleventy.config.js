const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "./",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    passthroughFileCopy: true
  }
}
