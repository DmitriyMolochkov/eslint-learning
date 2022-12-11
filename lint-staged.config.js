module.exports = {
  '*.js': (filenames) => ['eslint --fix --max-warnings=0'].map((command) => `${command} ${filenames.join(' ')}`),
};
