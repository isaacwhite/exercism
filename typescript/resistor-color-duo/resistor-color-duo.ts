enum bandColors {
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
}

type bandColorsMember = keyof typeof bandColors;

export function decodedValue(colors: string[]): number {
  const [first, second] = colors;
  return Number([first, second].map(decodeBand).join(""));
}

function decodeBand(bandColor: string): number {
  const lowercase = bandColor.toLowerCase();
  if (!(lowercase in bandColors)) {
    throw Error("Received unexpected band color!");
  }
  
  return bandColors[lowercase as bandColorsMember];
}
