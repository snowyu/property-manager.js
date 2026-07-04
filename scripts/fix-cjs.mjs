import { readdirSync, readFileSync, writeFileSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const libDir = join(__dirname, '..', 'lib');

function processDirectory(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith('.js')) {
      const cjsPath = fullPath.replace(/\.js$/, '.cjs');
      copyFileSync(fullPath, cjsPath);
      const content = readFileSync(cjsPath, 'utf-8');
      const fixed = content.replace(
        /(require\(["']\.\.?\/.*?)\.js(["']\))/g,
        '$1.cjs$2',
      );
      writeFileSync(cjsPath, fixed);
    }
  }
}

processDirectory(libDir);
