module.exports = {
  '*.js': (filenames) => {
    const commands = [
      'eslint --fix --max-warnings=0 --no-inline-config',
    ];
    const filesToCheck = filenames.join(' ');

    return commands.map((command) => `${command} ${filesToCheck}`);
  },
};
