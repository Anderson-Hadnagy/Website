module.exports = function(eleventyConfig) {
  
  // 1. Év szűrő
  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  // 2. Limit szűrő (a kezdőlaphoz)
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // 3. Dátum szűrő
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('hu-HU', {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  });

  // FÁJLOK MÁSOLÁSA (Hogy a képek és a stílus is átmenjen)
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/style.css"); // Biztonság kedvéért

  return {
    dir: {
      input: "src",
      output: "_site" // Ez kell a GitHub Pages-hez!
    }
  };
};
