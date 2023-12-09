const IMAGE_URL = "https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464015606-banner.svg";
const ALT_TEXT = "imágenes de guitarras Yamaha";

export const Hero = () => (
  <img className="home__hero" src={IMAGE_URL} alt={ALT_TEXT} />
);