#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .name('fresh')
  .description('Fresh Node.js projects in 10 seconds. No config, just code.')
  .version('1.0.0')
  .argument('<project-name>', 'name of the project to create')
  .option('-t, --template <template>', 'template to use (express-api, react-spa, ts-library, cli-tool)', 'express-api')
  .action((projectName, options) => {
    const template = options.template;
    const targetDir = path.resolve(process.cwd(), projectName);

    // Validate template
    const validTemplates = ['express-api', 'react-spa', 'ts-library', 'cli-tool'];
    if (!validTemplates.includes(template)) {
      console.error(`Error: Invalid template "${template}". Valid templates: ${validTemplates.join(', ')}`);
      process.exit(1);
    }

    // Check if directory exists
    if (fs.existsSync(targetDir)) {
      console.error(`Error: Directory "${projectName}" already exists.`);
      process.exit(1);
    }

    // Create project
    console.log(`Creating ${projectName} with template "${template}"...`);

    try {
      const templateDir = path.join(__dirname, 'templates', template);

      if (!fs.existsSync(templateDir)) {
        console.error(`Error: Template "${template}" not found.`);
        process.exit(1);
      }

      // Copy template
      copyDir(templateDir, targetDir, projectName);

      console.log(`\n✓ Project created successfully!\n`);
      console.log(`Next steps:`);
      console.log(`  cd ${projectName}`);
      console.log(`  npm install`);
      console.log(`  npm run dev\n`);
      console.log(`If you find this tool useful, consider donating:`);
      console.log(`  BTC: bc1q0rv04u4nv9704tzy8rzgp7pl68pduhlvpf2hs4`);
      console.log(`  ETH: 0xCc26a40630600ffD744E3F2BAd1B904Bb9f8Df37\n`);
    } catch (err) {
      console.error(`Error creating project: ${err.message}`);
      process.exit(1);
    }
  });

program.parse();

function copyDir(src, dest, projectName) {
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, projectName);
    } else {
      let content = fs.readFileSync(srcPath, 'utf8');
      // Simple variable substitution
      content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
      fs.writeFileSync(destPath, content);
    }
  }
}
