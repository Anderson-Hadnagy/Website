module.exports = function(eleventyConfig) {
  
  // 1. The Year Filter (Use {{ "" | year }} in your HTML)
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  // 2. The Limit Filter
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // 3. The Date Filter (for blog posts)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-us', {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

return {
    dir: {
      input: "src",
      output: "_site" // "public" helyett "_site" kell, hogy egyezzen a GitHub-al
    }
  };
};
