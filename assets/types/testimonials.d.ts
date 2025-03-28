import { StaticImageData } from "next/image";

export type Testimonial = {
  id:number;
  quote: string;
  name: string;
  designation: string;
  src: StaticImageData ; 
};