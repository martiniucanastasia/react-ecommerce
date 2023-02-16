import ChairPink from "../../../../assets/images/slider1.png";
import ChairBlue from "../../../../assets/images/slider2.png";
import ChairBrown from "../../../../assets/images/slider3.png";

export type PictureType = {
  id: number;
  title: string;
  thumbnail: any;
};

export const images = [
  {
    id: 1,
    title: "chair-pink",
    thumbnail: ChairPink,
  },
  {
    id: 2,
    title: "chair-blue",
    thumbnail: ChairBlue,
  },
  {
    id: 3,
    title: "chair-brown",
    thumbnail: ChairBrown,
  },
];
