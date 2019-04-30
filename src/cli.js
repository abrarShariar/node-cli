import arg from 'arg';

// This is where the cool shit happens
export function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  console.log(options);
}

function parseArgumentsIntoOptions (rawArgs) {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install'
    },
    {
      argv: rawArgs.slice(2)
    }
  );

  console.log("args from parseArgumentsIntoOptions: ");
  console.log(args);

  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    template: args._[0],
    runInstall: args['--install'] || false
  }
}
