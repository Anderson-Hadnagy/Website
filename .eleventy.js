module.exports = function(eleventyConfig) {
  
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

  // Assets másolása
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    // CSERÉLD KI a 'repo-neved' részt a GitHub repozitóriód nevére!
    pathPrefix: "/Website/", 
    dir: {
      input: "src",
      output: "_site" 
    }
  };
};
