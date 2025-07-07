module.exports = function(eleventyConfig) {

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
