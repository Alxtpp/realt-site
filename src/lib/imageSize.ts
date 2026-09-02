import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * Reads the intrinsic size of a JPEG in `public/` at build time, so galleries
 * can lay images out with their own aspect ratio instead of a fixed crop.
 * Returns null for anything it cannot read (missing file, non-JPEG).
 */
export function getImageSize(publicPath: string): ImageSize | null {
  let buffer: Buffer;
  try {
    buffer = readFileSync(join(process.cwd(), "public", publicPath));
  } catch {
    return null;
  }

  // JPEG: walk the marker segments until a start-of-frame carries the size.
  if (buffer.readUInt16BE(0) !== 0xffd8) return null;

  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) return null;
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    // SOF0-SOF15, excluding the DHT/JPG/DAC markers that share the range.
    const isStartOfFrame =
      marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  return null;
}
