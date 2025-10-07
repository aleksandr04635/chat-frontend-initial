module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-active-bg': '#151e37',
        'active-bg': '#f2faff',
        'dark-main-bg': '#10172a',
        'dark-additional-bg': '#1f2937',
        'secondary-border': '#6366F1',
        'light-additional-bg': '#ffffff',
        'main-border': '#078493',
        'layout-border': '#0a5b6b',
        'additional-text': '#374151',
        'dark-additional-text': '#E5E7EB',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
