module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    'postcss-nested',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./src/**/*.{js,jsx,ts,tsx}'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
  ].filter(Boolean),
};
