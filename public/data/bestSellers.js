import CrystalRing from "../assets/images/CrystalRing.png";
import GreenEyeRing from "../assets/images/GreenEyeRing.png";
import OwlRing from "../assets/images/OwlRing.png";
import OrangeOwlRing from "../assets/images/OrangeOwlRing.png";
import PurpleOwlRing from "../assets/images/PurpleOwlRing.png";
import YellowOwlRing from "../assets/images/YellowOwlRing.png";

const bestSellers = [
  {
    _id:"p1",
    title: "Crystal Band - Timeless Sparkle and Elegance",
    description:
      "Step into a world of timeless sparkle and elegance with our Crystal Band, a versatile and sophisticated accessory that effortlessly complements any style. This classic yet enchanting ring features a continuous band adorned with brilliant crystals, creating a captivating play of light and a touch of refined glamour.",
    extraInformation:
      "Elevate your style with the timeless allure of the Crystal Band. Add a touch of refined glamour to your jewelry collection with this classic accessory that stands the test of time. Order your Crystal Band now and let your elegance sparkle with every gesture.",
    price: "349",
    sizes: ["20", "21"],
    img: CrystalRing,
  },
  {
    _id:"p2",
    title: "Viper's One-Eyed Ring - A Unique and Mysterious Accessory",
    price: "350",
    description:
      "Behold the enigmatic allure of the Viper's One-Eyed Ring, a one-of-a-kind accessory that captivates with its intriguing design and mystical presence. Crafted with precision and imbued with an aura of mystery, this ring is more than just a piece of jewelry - it's a statement.",
    extraInformation:
      "Indulge in the allure of the unknown and make a bold statement with the Viper's One-Eyed Ring. Act now and add this exceptional piece to your collection!",
    img: GreenEyeRing,
  },
  {
    _id:"p3",
    title: "Owl Ring - Symbolic Elegance and Wise Beauty",
    price: "250",
    description:
      "Embrace the enchanting spirit of the night with our Owl Ring, a captivating accessory that beautifully combines symbolic significance with timeless elegance. This meticulously crafted ring is more than jewelry; it's a graceful homage to the wisdom and mystery embodied by these majestic creatures",
    extraInformation:
      "Let the Owl Ring be a constant companion, a reminder of the beauty found in wisdom and the elegance of nature. Elevate your style with this meaningful and aesthetically pleasing piece. Order your Owl Ring today and add a touch of symbolic elegance to your jewelry collection.",
    img: OwlRing,
    variants: [
      {
        img: OwlRing,
        variant: "Blue",
      },
      {
        img: PurpleOwlRing,
        variant: "Purple",
      },
      {
        img: OrangeOwlRing,
        variant: "Orange",
      },
      {
        img: YellowOwlRing,
        variant: "Yellow",
      },
    ],
  },
];

export default bestSellers;
