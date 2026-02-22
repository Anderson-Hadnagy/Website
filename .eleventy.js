const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // 1. Add the Base Plugin
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Your existing filters...
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit));
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-us', {
      year: "numeric", month: "short", day: "numeric"
    });
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      output: "public"
    },
    // 2. Add the pathPrefix so the plugin knows your repo name
    pathPrefix: "/Website/" 
  };
};
