module.exports = {
  extends: 'next',
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
