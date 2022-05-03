type BandColors =
  "black" |
  "brown" |
  "red" |
  "orange" |
  "yellow" |
  "green" |
  "blue" |
  "violet" |
  "grey" |
  "white";

const Bands: Record<BandColors, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedValue(colors: string[]): number {
  const [first, second] = colors;
  return Number([first, second].map(c => decodeBand(c)).join(''));
}

function decodeBand(bandColor: string): number {
  const uppercase = bandColor.toLowerCase();
  if (uppercase in Bands) {
    return Bands[uppercase as BandColors];
  }

  throw Error("Received unexpected band color!");
}
