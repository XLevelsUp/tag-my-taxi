const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      // Replace text-xs and text-sm with text-base
      content = content.replace(/\btext-xs\b/g, 'text-base');
      content = content.replace(/\btext-sm\b/g, 'text-base');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

replaceInFiles('./src/app');
replaceInFiles('./src/components');
