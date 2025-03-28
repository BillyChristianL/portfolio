import { StaticImageData } from "next/image";

interface IconItem {
  img: StaticImageData;
  link: string;
}

export type Skill = {
  icon: IconItem[];
  title: string;
  description: string;

};