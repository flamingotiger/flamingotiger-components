export class Color {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  static random() {
    const code = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    const hex = new Array(6)
      .fill(null)
      .map(() => code[Math.floor(Math.random() * 16)])
      .join("");
    return `#${hex}`;
  }
}

export const Colors = {
  key: new Color("#e67839"),
  white: new Color("#ffffff"),
  black: new Color("#000000"),
};
