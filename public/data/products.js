import RoyalScarlet from "../assets/images/RoyalScarlet.jpg";
import CrimsonSkater from "../assets/images/CrimsonSkater.jpg";
import RadiantSnowfall from "../assets/images/RadiantSnowfall.jpg";
import RoseateRadiance from "../assets/images/RoseateRadiance.jpg";
import RubyWhimsy from "../assets/images/RubyWhimsy.jpg";
import ScarletElegance from "../assets/images/ScarletElegance.jpg";
import WhimsicalCoord from "../assets/images/WhimsicalCoord.jpg";
import BlazeCoord from "../assets/images/BlazeCoord.jpg";
import RegalBlush from "../assets/images/RegalBlush.jpg";
import OnePieceChic from "../assets/images/OnePieceChic.jpg";

const products = [
  {
    _id: "p1",
    title: "Royal Scarlet Corset Set",
    description:
      "The maroon velvet corset serves as the centerpiece, embracing the silhouette with opulent elegance. The rich, velvety texture adds a touch of regality, creating a sumptuous and tactile allure.",
    extraInformation:
      "This ensemble is a celebration of contrasts, where the softness of velvet meets the crispness of white, resulting in a harmonious blend of glamour and modernity. The combination of deep maroon and pure white creates a captivating visual harmony.",
    price: 7499,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: RoyalScarlet,
    sizeNote: `Model is wearing a size 'XS' and is 5'7"`,
    isBestSeller: true,
    isNewDrop: false,
    href: "royal-scarlet-corset-set",
  },
  {
    _id: "p2",
    title: "Crimson Skater Mini Dress",
    price: 6499,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      " The off-shoulder design of the dress showcases a hint of sophistication while embracing a touch of flirtatious charm.",
    extraInformation:
      "In a vibrant shade of red, the dress commands attention, making it an ideal choice for those who love to stand out. The short white skirt adds a youthful and breezy element, creating a delightful contrast that exudes both vibrancy and freshness",
    img: CrimsonSkater,
    isBestSeller: true,
    isNewDrop: false,
    href: "crimson-skater-mini-dress",
  },
  {
    _id: "p3",
    title: "Radiant snowfall co-rd set",
    price: 3999,
    description:
      "Opt for a crisp and modern aesthetic with a white puff sleeves crop top, adding a touch of feminity. Teaming it up with bold red short pants injects a burst of energy ans shoecases a lively, confident style that's perfect for casual outings for social gatherings.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: RadiantSnowfall,
    isBestSeller: true,
    isNewDrop: false,
    href: "radiant-snowfall-co-rd-set",
  },
  {
    _id: "p4",
    title: "Roseate Radiance Co-ord set",
    description:
      "The white bralette sets a foundation of allure, accentuating the neckline with a touch of modern sensuality. The jacket, with its deep, rich hue, adds a layer of sophistication and warmth",
    extraInformation:
      "The floor-length yoke pants in matching maroon brings a graceful flow to the silhouette, creating a harmonious balance between contemporary flair and classic grace.",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    price: 5499,
    img: RoseateRadiance,
    isBestSeller: false,
    isNewDrop: true,
    href: "roseate-radiance-co-ord-set",
  },
  {
    _id: "p5",
    title: "Ruby Whimsy Fusion Set",
    price: 4499,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    img: RubyWhimsy,
    description:
      "The maroon velvet corset serves as the centerpiece, embracing the silhouette with opulent elegance. The rich, velvety texture adds a touch of regality, creating a sumptuous and tactile allure.",
    extraInformation:
      "This ensemble is a celebration of contrasts, where the softness of velvet meets the crispness of white, resulting in a harmonious blend of glamour and modernity. The combination of deep maroon and pure white creates a captivating visual harmony.",
    isBestSeller: false,
    isNewDrop: true,
    href: "ruby-whimsy-fusion-set",
  },
  {
    _id: "p6",
    title: "Scarlet Elegance Set",
    price: 6499,
    img: ScarletElegance,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Dare to be different with our Eyeball Ring, a captivating and unconventional accessory that adds a touch of mystique to your style. This unique ring features a meticulously crafted eyeball at its center, casting an enigmatic gaze that captivates attention and sparks intrigue.",
    extraInformation:
      "Embrace the allure of mystique with the Eyeball Ring. Make a bold statement and let your style speak volumes. Order your Eyeball Ring now and step into a realm where the unconventional meets the extraordinary.",
    isBestSeller: false,
    isNewDrop: true,
    href: "scarlet-elegance-set",
  },
  {
    _id: "p7",
    title: "Whimsical Co-ord Set",
    price: 4999,
    img: WhimsicalCoord,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "The crop top's playful puff adds a hint of modern flair, creating a delightful contrast with the structured formality of the formal pants. This duo strikes the perfect balance between chic and polished, making it suitable for a range of occasions, from daytime events to sophisticated evenings",
    extraInformation:
      "Ideal for those who appreciated a versatile yet stylish ensemble comfort and grace.",
    isBestSeller: false,
    isNewDrop: false,
    href: "whimsical-co-ord-set",
  },
  {
    _id: "p8",
    title: "One-piece Chic Couture",
    price: 4499,
    img: OnePieceChic,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "This short dress blends modern sophistication with timeless allure, offering a perfect balance of sensuality and refinement. The luxurious fabric, intricate detailing, and flattering silhouette make it a slow-stopping choice for any occasion.Its a celebration of feminity, a manifestation of style that captivates with every step.",
    extraInformation:
      "The deep hues of the fabric enhances the overall allure, making a bold statement that transcends trends.",
    isBestSeller: false,
    isNewDrop: false,
    href: "one-piece-chic-couture",
  },
  {
    _id: "p9",
    title: "Regal Blush Co-ord Set",
    price: 5499,
    img: RegalBlush,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "Embrace regal sophistication with this ensemble featuring a leg-of-mutton crop top in a striking reddish-pink hue seamlessly paired with floor-length yoke pants in a rich maroon shade. The resplendent combination exudes an air of elegance, as the voluminous sleeves of the crop top effortlessly balance the sleek silhouette of the yoke pants.",
    extraInformation:
      "This ensemble is a harmonious fusion of bold colors and graceful design.",
    isBestSeller: false,
    isNewDrop: false,
    href: "regal-blush-co-ord-set",
  },
  {
    _id: "p10",
    title: "Blaze Co-ord Set",
    price: 3999,
    img: BlazeCoord,
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    description:
      "The white bralette sets the foundation with a touch of allure, while the crop red jacket elevates the ensemble with its vibrant and eye-catching hue. Paired effortlessly with a chic pair of short pants, this ensemble strikes the perfect balance between edgy and stylish.",
    extraInformation:
      "The short pants add a playful and modern touch, ensuring comfort without compromising on sophistication.",
    isBestSeller: false,
    isNewDrop: false,
    href: "blaze-co-ord-set",
  },
];

export default products;
