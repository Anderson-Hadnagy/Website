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
    // FONTOS: Ide a GitHub repód nevét írd be két per jel közé!
    pathPrefix: "/Website/", 
    dir: {
      input: "src",
      output: "_site" // Maradjunk a _site-nál, mert a GitHub Action ezt keresi
    }
  };
};
