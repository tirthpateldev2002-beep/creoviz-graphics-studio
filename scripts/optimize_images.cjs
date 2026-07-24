const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Disable sharp cache to free up file handles
sharp.cache(false);

const dirPath = path.join(__dirname, '../public/brand-images');

async function optimizeImages() {
  console.log('Starting image optimization...');
  if (!fs.existsSync(dirPath)) {
    console.error('Directory does not exist:', dirPath);
    return;
  }

  const files = fs.readdirSync(dirPath);
  console.log(`Found ${files.length} items in brand-images directory.`);

  for (const file of files) {
    // Skip if it's already a resized file
    if (file.match(/-(400|800|1200)\.webp$/)) {
      continue;
    }
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.webp' && ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      continue;
    }

    const filePath = path.join(dirPath, file);
    const basename = path.basename(file, ext);
    const stat = fs.statSync(filePath);

    console.log(`Processing: ${file} (${(stat.size / 1024).toFixed(1)} KB)`);

    try {
      // Read file into a buffer to prevent EBUSY/file-locking errors in Windows
      const fileBuffer = fs.readFileSync(filePath);

      const image = sharp(fileBuffer);
      const metadata = await image.metadata();

      // 1. Generate 400px small version
      const smallPath = path.join(dirPath, `${basename}-400.webp`);
      if (metadata.width > 400) {
        await sharp(fileBuffer)
          .resize(400)
          .webp({ quality: 75 })
          .toFile(smallPath);
      } else {
        await sharp(fileBuffer)
          .webp({ quality: 75 })
          .toFile(smallPath);
      }

      // 2. Generate 800px medium version
      const mediumPath = path.join(dirPath, `${basename}-800.webp`);
      if (metadata.width > 800) {
        await sharp(fileBuffer)
          .resize(800)
          .webp({ quality: 80 })
          .toFile(mediumPath);
      } else {
        await sharp(fileBuffer)
          .webp({ quality: 80 })
          .toFile(mediumPath);
      }

      // 3. Generate 1200px large version
      const largePath = path.join(dirPath, `${basename}-1200.webp`);
      if (metadata.width > 1200) {
        await sharp(fileBuffer)
          .resize(1200)
          .webp({ quality: 80 })
          .toFile(largePath);
      } else {
        await sharp(fileBuffer)
          .webp({ quality: 80 })
          .toFile(largePath);
      }

      // 4. In-place optimize the original if it is large (>150 KB)
      if (stat.size > 150 * 1024) {
        const tempPath = path.join(dirPath, `${basename}-temp.webp`);
        let op = sharp(fileBuffer);
        if (metadata.width > 1600) {
          op = op.resize(1600);
        }
        await op.webp({ quality: 82 }).toFile(tempPath);
        
        // Safely replace the original file
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStat = fs.statSync(filePath);
        console.log(`  Optimized original in-place: ${(stat.size / 1024).toFixed(1)} KB -> ${(newStat.size / 1024).toFixed(1)} KB`);
      }
    } catch (err) {
      console.error(`Error processing file ${file}:`, err);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages();
