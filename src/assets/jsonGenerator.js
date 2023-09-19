const fs = require('fs');
const path = require('path');

const imageRootDir = '../public/images/TeamPhotos';

const folders = [];

function scanFolder(folderPath) {
  const folderName = path.basename(folderPath);
  const images = [];

  fs.readdirSync(folderPath).forEach((file) => {
    const imageUrl = path.join(folderPath, file);
    images.push({ name: file, url: imageUrl });
  });

  folders.push({ folderName, images });
}

// Scan each folder in the root directory
fs.readdirSync(imageRootDir).forEach((folder) => {
  const folderPath = path.join(imageRootDir, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    scanFolder(folderPath);
  }
});

const jsonData = JSON.stringify(folders, null, 2);

fs.writeFileSync('team_images.json', jsonData, 'utf8');

console.log('JSON file generated successfully.');
