module.exports = function(eleventyConfig) {
  // 1. Szűrők (év, limit, dátum)
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit));
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('hu-HU', {
      year: "numeric", month: "short", day: "numeric"
    });
  });

  // 2. CSS és Képek másolása (A mappaszerkezeted alapján)
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

return {
  dir: {
    input: "src",
    output: "public"
  },
  // ADD THIS LINE (Match your repo name exactly):
  pathPrefix: "/Website/" 
};
};
