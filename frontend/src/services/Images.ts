export const IMAGES = [
  "/images/package1.jpg",
  "/images/package2.jpg",
  "/images/package3.jpg",
  "/images/package4.jpg",
  "/images/package5.jpg",
  "/images/package6.jpg",
  "/images/package7.jpg",
  "/images/package8.jpg",
  "/images/package9.jpg",
  "/images/package10.jpg",
  "/images/package11.jpg",
  "/images/package12.jpg",
  "/images/package13.jpg",
  "/images/package14.jpg",
  "/images/package15.jpg",
  "/images/package16.jpg",
  "/images/package17.jpg",
  "/images/package18.jpg",
  "/images/package19.jpg",
  "/images/package20.jpg",
];

export const ADVENTUREIMAGES = [
  "/images/adventure1.jpg",
  "/images/adventure2.jpg",
  "/images/adventure3.jpg",
  "/images/adventure4.jpg",
  "/images/adventure5.jpg",
  "/images/adventure6.jpg",
  "/images/adventure7.jpg",
  "/images/adventure8.jpg",
  "/images/adventure9.jpg",
  "/images/adventure10.jpg",
];

const arr: number[] = [];
export const getRandomIndexedImage = (): string => {
  // get the images in random but not get the images which are already selected
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  if (arr.length > 0 && arr.includes(randomIndex)) {
    return getRandomIndexedImage();
  }
  arr.push(randomIndex);
  return IMAGES[randomIndex];
};

export const getRandomAdventureImage = (): string => {
  const randomIndex = Math.floor(Math.random() * ADVENTUREIMAGES.length);
  return ADVENTUREIMAGES[randomIndex];
};
