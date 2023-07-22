export function hexToPaint(hex: string): SolidPaint {
  return {
    type: 'SOLID',
    color: hexToRGB(hex),
  }
}

export function hexToRGB(hex: string): RGB {
  const hexWithoutHash = hex.replace("#", "");
  const limit = 255;

  const r = parseInt(hexWithoutHash.substring(0, 2), 16) / limit;
  const g = parseInt(hexWithoutHash.substring(2, 4), 16) / limit;
  const b = parseInt(hexWithoutHash.substring(4, 6), 16) / limit;

  return { r, g, b }
}
