import sharp from 'sharp';
import { stat } from 'fs/promises';

const inputPath = 'public/og-image.webp';
const outputPath = 'public/og-image.png';

async function convert() {
  try {
    const inputStats = await stat(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);

    const outputStats = await stat(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);

    console.log(`[OK] og-image.webp -> og-image.png (${inputSizeKB} KB -> ${outputSizeKB} KB)`);
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
    process.exit(1);
  }
}

convert();
