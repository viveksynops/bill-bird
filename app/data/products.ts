export type Product = {
  name: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Optical Lenses",
    description: "Finished single vision lenses with precise edge clarity and dependable daily comfort.",
    image: "/images/image1.jpeg",
  },
  {
    name: "Reading Glasses",
    description: "Lightweight readers designed for crisp close work, comfort, and refined everyday style.",
    image: "/images/image2.jpeg",
  },
  {
    name: "Prescription Glasses",
    description: "Prescription-ready eyewear options for professional fitting and reliable visual correction.",
    image: "/images/image3.jpeg",
  },
  {
    name: "Blue Cut Lenses",
    description: "Blue light filtering lens options for screen-heavy routines and reduced visual fatigue.",
    image: "/images/image4.jpeg",
  },
  {
    name: "Progressive Lenses",
    description: "Smooth multi-distance vision support with measured fitting guidance and clean finishing.",
    image: "/images/image1.jpeg",
  },
  {
    name: "Optical Frames",
    description: "Durable frame selections with balanced fit, premium finishes, and versatile styling.",
    image: "/images/image3.jpeg",
  },
];
