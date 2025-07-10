const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "./",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    passthroughFileCopy: true
  }
}
