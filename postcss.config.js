/**
 * References:
 * https://github.com/postcss/postcss-cli
 * https://github.com/postcss/postcss-import
 * https://github.com/postcss/autoprefixer
 * https://tailwindcss.com/docs/using-with-preprocessors
 */

module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    }
}
