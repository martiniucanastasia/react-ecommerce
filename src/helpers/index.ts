export const getPriceSingleNumbers = (string: string): number[] => {
  let splitted = string.split("-");
  const [price] = splitted;
  let newPrice = price.slice(0, string.length - 4);
  let number: any = newPrice.match(/\d/g);
  number = number?.join("");
  return [number];
};

export const getPriceRangeNumbers = (string: string): number[] => {
  let splitted = string.split("-");
  let numbers: any[] = [];
  const updatedString = splitted.map((string) => {
    return string.trim().slice(0, string.length - 3);
  });
  updatedString.forEach((fragment) => {
    let number: any = fragment.match(/\d/g);
    number = number?.join("");
    numbers.push(number);
  });
  return numbers;
};

export const getDiscountNumbers = (string: string): number[] => {
  let splitted = string.split("-");
  let numbers: any[] = [];
  splitted.forEach((fragment) => {
    let number: any = fragment.match(/\d/g);
    number = number?.join("");
    numbers.push(number);
  });
  return numbers;
};
