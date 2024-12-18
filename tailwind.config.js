/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    plugins: [],
};
