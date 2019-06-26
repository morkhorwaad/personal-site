const Typography = require("typography")

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.666,
  blockMarginBottom: 1,
  headerFontFamily: [
    "Raleway",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Merriweather", "Georgia", "serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'a.logo': {
      fontFamily: ['Raleway', 'sans-serif'].join(','),
    },
    'p.blog-post-item__description': {
      ...adjustFontSizeTo('18px'),
      fontStyle: 'italic',
      lineHeight: '1'
    },
  })
})

// Export helper functions
module.exports = typography