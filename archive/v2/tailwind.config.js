module.exports = {
    theme: {
        extend: {
            colors: {
                aqua: '#6dc9c7',
                purple: {
                    default: '#782f92',
                    lilac: '#d3beda',
                },
                dark: {
                    tar: '#080808',
                    street: '#212121',
                    coal: '#383838',
                    plume: '#5e5e5e',
                    silver: '#c7c7c7',
                    concrete: '#f2f2f2',
                    white: '#ffffff',
                },
            },

            fontSize: {
                // Order is important here for breakpoints.
                '0': '0px',
                '3/5': '60%',
                '9/10': '90%',
                'full': '100%',
                '3/2': '150%',
                '4/2': '200%',
                'r5xl': '3em',
            },

            height: {
                '2/5w': '40vw',
                'r4': '1em',
            },

            maxHeight: {
                'hero': '22rem',
            },

            maxWidth: {
                'page': '1150px',
            },

            minWidth: {
                'page': '350px',
            },

            screens: {
                'xs': '500px',
            },

            width: {
                '28': '7rem',
            },
        },
    },
    variants: {
        width: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        // Some useful comment
    ]
};
