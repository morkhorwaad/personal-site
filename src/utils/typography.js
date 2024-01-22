const Typography = require("typography")

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.666,
  blockMarginBottom: 1,
  googleFonts: [
    {
      name: 'EB Garamond',
      styles: [
        '400',
        '400 Italic',
      ]
    },
    {
      name: 'Jost',
      styles: [
        '300',
        '300 Italic',
        '500', 
        '500 Italic',
        '700',
        '700 Italic'
      ]
    }
  ],
  bodyFontFamily: [
    "EB Garamond", 
    "Merriweather", 
    "Georgia", 
    "serif"
  ],
  headerFontFamily: [
    "Jost", 
    "Helvetica Neue",
    "Helvetica", 
    "Arial", 
    "sans-serif"
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'nav > a': {
      fontFamily: ["Jost", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"].join(','),
      fontWeight: 500,
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