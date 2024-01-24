const Typography = require("typography")

const SERIF_FONTS = [
  "EB Garamond", 
  "Merriweather", 
  "Georgia", 
  "serif"
];

const SANS_SERIF_FONTS = [
  "Jost", 
  "Helvetica Neue",
  "Helvetica", 
  "Arial", 
  "sans-serif"
];

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
  bodyFontFamily: SERIF_FONTS,
  headerFontFamily: SANS_SERIF_FONTS,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'nav > a': {
      fontFamily: SANS_SERIF_FONTS.join(','),
      fontWeight: 500
    },
    'button': {
      fontFamily: SANS_SERIF_FONTS.join(',')
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