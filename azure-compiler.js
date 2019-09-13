const AzureCompiler = require('@nestjs/azure-serverless').AzureCompiler;
const join = require('path').join;

new AzureCompiler().run({
  sourceDir: join(process.cwd(), 'src'),
  entryFile: 'app.module.ts',
  tsConfigFilePath: 'tsconfig.build.json',
});
