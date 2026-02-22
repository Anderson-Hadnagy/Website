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
    return new Date(dateObj).toLocaleDateString('hu-HU', { 
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });

  // REMOVED  FROM THESE LINES:
  eleventyConfig.addPassthroughCopy("src/assets"); 
  eleventyConfig.addPassthroughCopy("src/admin"); 

  return {
    dir: {
      input: "src",
      output: "public"
    },
    // 2. Set the pathPrefix to your GitHub Repository name 
    pathPrefix: "/Website/" 
  };
};
