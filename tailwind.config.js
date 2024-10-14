import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'biru-1': '#00A8FF',
                'biru-2': '#0085FF',
                'abu-1': '#5D5F60',
                'abu-2': '#2F3132',
                'abu-3': '#292A2B',
              },
            backgroundImage: {
                'biru-grad':'linear-gradient(to right, #00A8FF, #0085FF)'
            }
        },
    },

    plugins: [forms],
};
