const bandColors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(colors: string[]): number {
  const [first, second] = colors;
  return Number([first, second].map(decodeBand).join(""));
}

function decodeBand(bandColor: string): number {
  const lowercase = bandColor.toLowerCase();
  const position = bandColors.indexOf(lowercase)
  if (position < 0)  throw Error("Received unexpected band color!");

  return position
}
