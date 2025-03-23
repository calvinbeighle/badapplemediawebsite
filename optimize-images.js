import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = 'public/lovable-uploads';
const targetDir = 'public/lovable-uploads-optimized';

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// List of images to optimize
const imagesToOptimize = [
  'web_optimized_v2_compressed_microphone.png',
  'web_optimized_v2_studio.png',
  'web_optimized_v2_compressed_sonyalpha.png',
  'web_optimized_v2_compressed_rhodecaster2.png',
  'web_optimized_v2_compressed_sonylong.png',
  'web_5be7c992-e59c-4300-b660-15ef39b6631e.png',
  'web_0f7668ed-d3fe-4545-9fc4-4ec53a6a6c05.png',
  'web_f7aacc24-737b-458d-be95-cf9fbbb00c07.png',
  'studio.png',
  'web_optimized_a8781a26-a759-4c3d-aa2f-099b67789fe3.png',
  'logo.svg'
];

async function optimizeImage(filename) {
  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(targetDir, filename);

  if (!fs.existsSync(sourcePath)) {
    console.log(`Source file not found: ${filename}`);
    return;
  }

  try {
    if (filename.endsWith('.svg')) {
      // For SVG files, just copy them
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied SVG: ${filename}`);
    } else {
      // For PNG files, optimize them
      await sharp(sourcePath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(targetPath);
      console.log(`Optimized: ${filename}`);
    }
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function optimizeAllImages() {
  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }
  console.log('All images processed!');
}

optimizeAllImages(); 