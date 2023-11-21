const IMAGE_URL = "src/images/banner.svg";
const ALT_TEXT = "imágenes de guitarras Yamaha";

export const Hero = () => (
  <img className="home__hero" src={IMAGE_URL} alt={ALT_TEXT} />
);