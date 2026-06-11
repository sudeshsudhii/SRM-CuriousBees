const fs = require('fs');
const path = require('path');

const DIRECTORY = path.resolve(__dirname, '..');

const IGNORE_DIRS = ['.git', 'node_modules', '.next', 'dist', 'build', '.turbo', 'coverage'];
const IGNORE_FILES = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'files_to_modify.txt'];
const BINARY_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.woff', '.woff2', '.ttf', '.eot', '.pdf', '.mp4', '.webm', '.zip', '.tar', '.gz'];

const REPLACEMENTS = [
    { from: /SRM_Curiousbees/g, to: 'SRM_Curiousbees' },
    { from: /@srm-curiousbees/g, to: '@srm-curiousbees' },
    { from: /srmCuriousbees/g, to: 'srmCuriousbees' },
    { from: /SRM Curiousbees/g, to: 'SRM Curiousbees' },
    { from: /srm-curiousbees/g, to: 'srm-curiousbees' }
];

function processDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            if (IGNORE_DIRS.includes(entry.name)) {
                continue;
            }
            processDirectory(fullPath);
        } else if (entry.isFile()) {
            if (IGNORE_FILES.includes(entry.name)) {
                continue;
            }
            const ext = path.extname(entry.name).toLowerCase();
            if (BINARY_EXTENSIONS.includes(ext)) {
                continue;
            }

            try {
                processFile(fullPath);
            } catch (err) {
                console.error(`Error processing file ${fullPath}:`, err.message);
            }
        }
    }
}

function processFile(filePath) {
    const originalContent = fs.readFileSync(filePath, 'utf-8');
    let newContent = originalContent;

    for (const { from, to } of REPLACEMENTS) {
        newContent = newContent.replace(from, to);
    }

    if (newContent !== originalContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated: ${filePath.replace(DIRECTORY, '')}`);
    }
}

console.log('Starting project rename...');
processDirectory(DIRECTORY);
console.log('Rename complete!');
