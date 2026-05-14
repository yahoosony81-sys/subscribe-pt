const sharp = require('sharp');
const fs = require('fs');

async function resizeImage(filePath, maxWidth) {
  try {
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();
    if (metadata.width > maxWidth) {
      console.log(`Resizing ${filePath} from ${metadata.width} to ${maxWidth}`);
      const resizedBuffer = await sharp(buffer).resize({ width: maxWidth }).png({ quality: 85, compressionLevel: 8 }).toBuffer();
      fs.writeFileSync(filePath, resizedBuffer);
      console.log(`Successfully resized ${filePath}`);
    } else {
      console.log(`Image ${filePath} is already small enough (${metadata.width}px)`);
    }
  } catch (err) {
    console.error(`Failed to resize ${filePath}:`, err);
  }
}

async function run() {
  await resizeImage('c:/Users/soonsim/subscribe_landig-payment/public/images/통증히어로 해상도높.png', 1500);
  await resizeImage('c:/Users/soonsim/subscribe_landig-payment/public/images/힉스필드수정본.png', 1500);
}
run();
