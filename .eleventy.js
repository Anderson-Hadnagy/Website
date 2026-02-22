const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  // 1. Add the Plugin that fixes all your links automatically 
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Existing Filters 
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('hu-HU', { // Switched to Hungarian locale
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });

  eleventyConfig.addPassthroughCopy("src/assets"); [cite: 2]
  eleventyConfig.addPassthroughCopy("src/admin"); [cite: 2]

  return {
    dir: {
      input: "src",
      output: "public"
    },
    // 2. Set the pathPrefix to your GitHub Repository name 
    pathPrefix: "/Website/" 
  };
};
