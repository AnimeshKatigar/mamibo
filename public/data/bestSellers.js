import RoyalScarlet from "../assets/images/RoyalScarlet.jpg";
import CrimsonSkater from "../assets/images/CrimsonSkater.jpg";
import RadiantSnowfall from "../assets/images/RadiantSnowfall.jpg";

const products = [
  {
    _id: "p1",
    title: "Royal Scarlet Corset Set",
    description:
      "The maroon velvet corset serves as the centerpiece, embracing the silhouette with opulent elegance. The rich, velvety texture adds a touch of regality, creating a sumptuous and tactile allure.",
    extraInformation:
      "This ensemble is a celebration of contrasts, where the softness of velvet meets the crispness of white, resulting in a harmonious blend of glamour and modernity. The combination of deep maroon and pure white creates a captivating visual harmony.",
    price: "7,499",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: RoyalScarlet,
  },
  {
    _id: "p2",
    title: "Crimson Skater Mini Dress",
    price: "6499",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      " The off-shoulder design of the dress showcases a hint of sophistication while embracing a touch of flirtatious charm.",
    extraInformation:
      "In a vibrant shade of red, the dress commands attention, making it an ideal choice for those who love to stand out. The short white skirt adds a youthful and breezy element, creating a delightful contrast that exudes both vibrancy and freshness",
    img: CrimsonSkater,
  },
  {
    _id: "p3",
    title: "Radiant snowfall co-rd set",
    price: "3999",
    description:
      "Opt for a crisp and modern aesthetic with a white puff sleeves crop top, adding a touch of feminity. Teaming it up with bold red short pants injects a burst of energy ans shoecases a lively, confident style that's perfect for casual outings for social gatherings.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: RadiantSnowfall,
  },
];

export default products;
