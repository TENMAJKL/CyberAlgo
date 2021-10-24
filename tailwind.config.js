module.exports = {
    purge: [
        './public/**/*.html',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                DEFAULT: '0 0 30px rgb(49, 46, 129);',

            }

        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
