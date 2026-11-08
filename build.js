// Inlines the compiled Tailwind CSS into index.html (the file GitHub Pages serves).
const fs = require('fs');
const css = fs.readFileSync('.tw.css', 'utf8');
const src = fs.readFileSync('index.src.html', 'utf8');
if (!src.includes('<!-- TAILWIND_CSS -->')) throw new Error('Placeholder missing in index.src.html');
fs.writeFileSync('index.html', src.replace('<!-- TAILWIND_CSS -->', () => '<style>\n' + css + '</style>'));
console.log('index.html built');
