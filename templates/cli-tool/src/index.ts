#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .name('{{PROJECT_NAME}}')
  .description('A CLI tool built with TypeScript and Commander')
  .version('0.1.0')

program
  .command('greet')
  .description('Greet someone')
  .argument('<name>', 'name to greet')
  .option('-l, --loud', 'greet loudly')
  .action((name: string, options: { loud?: boolean }) => {
    const greeting = `Hello, ${name}!`
    console.log(options.loud ? greeting.toUpperCase() : greeting)
  })

program
  .command('count')
  .description('Count to a number')
  .argument('<number>', 'number to count to', parseInt)
  .action((num: number) => {
    if (isNaN(num)) {
      console.error('Error: Please provide a valid number')
      process.exit(1)
    }
    for (let i = 1; i <= num; i++) {
      console.log(i)
    }
  })

program.parse()
