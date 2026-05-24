import fs from 'fs';
const files = [
  'src/pages/Repairs.tsx',
  'src/pages/Shop.tsx',
  'src/pages/BookRepair.tsx',
  'src/pages/GetQuote.tsx',
  'src/pages/Cart.tsx',
  'src/pages/Admin.tsx',
  'src/components/Footer.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/blue-/g, 'teal-');
  content = content.replace(/gray-/g, 'slate-');
  fs.writeFileSync(file, content);
}
