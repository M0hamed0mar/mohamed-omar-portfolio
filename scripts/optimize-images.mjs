import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, basename, extname } from 'path';

const targetDirectories = [
  'public/images/logos/brand',
  'public/images/projects/food-safety-rag',
  'public/images/projects/adaptive-learning-agent',
  'public/images/projects/multi-agent-rag-assistant',
  'public/images/projects/hybrid-rag-engine',
  'public/images/projects/rossmann-sales-forecasting',
  'public/images/profile',
];

const MAX_WIDTH = 1600;
const WEBP_QUALITY = 85;

async function processDirectory(dir) {
  if (!existsSync(dir)) {
    console.log(`[SKIP] ${dir} does not exist`);
    return;
  }

  const files = await readdir(dir);
  const imageFiles = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

  console.log(`\n[PROCESSING] ${dir} (${imageFiles.length} images)`);

  for (const file of imageFiles) {
    const inputPath = join(dir, file);
    const ext = extname(file);
    const name = basename(file, ext);
    const outputPath = join(dir, `${name}.webp`);

    try {
      const inputStats = await stat(inputPath);
      const inputSizeKB = (inputStats.size / 1024).toFixed(2);

      const metadata = await sharp(inputPath).metadata();
      const shouldResize = metadata.width && metadata.width > MAX_WIDTH;

      let pipeline = sharp(inputPath);

      if (shouldResize) {
        pipeline = pipeline.resize({
          width: MAX_WIDTH,
          withoutEnlargement: true,
        });
      }

      await pipeline
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const savings = (
        ((inputStats.size - outputStats.size) / inputStats.size) *
        100
      ).toFixed(1);

      console.log(
        `  [OK] ${file} -> ${name}.webp (${inputSizeKB} KB -> ${outputSizeKB} KB, ${savings}% saved)`
      );
    } catch (error) {
      console.error(`  [ERROR] ${file}: ${error.message}`);
    }
  }
}

async function main() {
  console.log('============================================');
  console.log(' Image Optimization Script');
  console.log('============================================');

  for (const dir of targetDirectories) {
    await processDirectory(dir);
  }

  console.log('\n============================================');
  console.log(' Done.');
  console.log('============================================');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
