import sharp from 'sharp';
import { stat } from 'fs/promises';

const inputPath = 'public/og-image.png';
const outputPath = 'public/og-image.webp';

async function convert() {
  try {
    const inputStats = await stat(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const outputStats = await stat(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const savings = (
      ((inputStats.size - outputStats.size) / inputStats.size) *
      100
    ).toFixed(1);

    console.log(`[OK] og-image.png -> og-image.webp (${inputSizeKB} KB -> ${outputSizeKB} KB, ${savings}% saved)`);
  } catch (error) {
    console.error(`[ERROR] ${error.message}`);
    process.exit(1);
  }
}

convert();
