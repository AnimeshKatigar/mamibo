import CrystalRing from "../assets/images/CrystalRing.png";
import GreenEyeRing from "../assets/images/GreenEyeRing.png";
import OwlRing from "../assets/images/OwlRing.png";
import OrangeOwlRing from "../assets/images/OrangeOwlRing.png";
import PurpleOwlRing from "../assets/images/PurpleOwlRing.png";
import YellowOwlRing from "../assets/images/YellowOwlRing.png";
import BigOwlRing from "../assets/images/BigOwlRing.png";
import ClawRing from "../assets/images/ClawRing.png";
import FlyingBirdRing from "../assets/images/FlyingBirdRing.png";
import FalconRing from "../assets/images/FalconRing.png";
import duoRings from "../assets/images/2Rings.png";
import MatteBlackSnakeRedRing from "../assets/images/MatteBlackSnakeRedRing.png";
import MatteBlackSnakeGreenRing from "../assets/images/MatteBlackSnakeGreenRing.png";
import NailRing from "../assets/images/NailRing.png";
import EyeBallRing from "../assets/images/EyeBallRing.png";
import IcyRing from "../assets/images/IcyRing.png";

const products = [
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
  {
    _id:"p4",
    title: "Hoot Ring - Whimsical Elegance in Every Note",
    description:
      "Capture the charm of the night with our Hoot Ring, a whimsical accessory that echoes the enchanting melody of an owl's hoot. This delightful ring features a carefully crafted owl perched at its center, exuding a sense of playfulness and timeless elegance.",
    extraInformation:
      "Let your style sing with the enchanting notes of the Hoot Ring. Embrace the whimsy and elegance found in the owl's hoot. Order your Hoot Ring now and add a touch of magic to your jewelry collection",
    price: "249",
    img: BigOwlRing,
  },
  {
    _id:"p5",
    title: "Claw Ring - Embrace the Fierce Elegance of Nature",
    price: "249",
    img: ClawRing,
    description:
      "Unleash your inner wild with our Claw Ring, a bold and captivating accessory that channels the untamed spirit of nature. Inspired by the formidable claws of powerful creatures, this ring is a statement piece that merges strength with a touch of refined elegance.",
    extraInformation:
      "Make a statement that echoes the power of the wild with the Claw Ring. Transform your style with this fierce and elegant piece that captures the essence of untamed nature. Order your Claw Ring today and embrace the bold allure it brings to your personal style.",
  },
  {
    _id:"p6",
    title: "Eyeball Ring - Unleash the Gaze of Mystique",
    price: "299",
    img: EyeBallRing,
    sizes: ["20", "21"],
    description:
      "Dare to be different with our Eyeball Ring, a captivating and unconventional accessory that adds a touch of mystique to your style. This unique ring features a meticulously crafted eyeball at its center, casting an enigmatic gaze that captivates attention and sparks intrigue.",
    extraInformation:
      "Embrace the allure of mystique with the Eyeball Ring. Make a bold statement and let your style speak volumes. Order your Eyeball Ring now and step into a realm where the unconventional meets the extraordinary.",
  },
  {
    _id:"p7",
    title: "Phoenix Bird Ring - Symbol of Rebirth and Timeless Beauty",
    price: "249",
    img: FlyingBirdRing,
    description:
      "Ignite your style with the Phoenix Bird Ring, a mesmerizing accessory that encapsulates the mythical essence of rebirth and eternal beauty. Crafted with meticulous detail, this ring pays homage to the legendary phoenix, a symbol of transformation and resilience",
    extraInformation:
      "Embrace the mythical aura and let the Phoenix Bird Ring be a testament to your strength and renewal. Elevate your style with this symbolic piece that transcends trends and tells a story. Order your Phoenix Bird Ring now and embody the timeless allure of the legendary phoenix.",
  },
  {
    _id:"p8",
    title: "Icy Ring - Frost-Kissed Elegance for the Modern Explorer",
    price: "349",
    sizes: ["20", "21"],
    img: IcyRing,
    description:
      "Embrace the allure of frost-kissed elegance with our Icy Ring, a mesmerizing accessory that captures the essence of winter's enchantment. This unique ring features a crystalline centerpiece that radiates a cool, icy brilliance, adding a touch of sophistication to your style.",
    extraInformation:
      "Elevate your style with the cool sophistication of the Icy Ring. Embrace the beauty of winter with this chic and timeless piece that adds a touch of frosty enchantment to your jewelry collection. Order your Icy Ring now and let your style sparkle with the magic of icy landscapes.",
  },
  {
    _id:"p9",
    title: "Owl & Eagle Duo Ring - Wisdom Meets Soaring Strength",
    price: "449",
    sizes: ["20"],
    img: duoRings,
    description:
      "Unite the wisdom of the owl with the soaring strength of the eagle in our captivating Owl & Eagle Duo Ring. This unique accessory beautifully combines two majestic creatures, each symbolizing distinct qualities, to create a ring that resonates with both intellect and might.",
    extraInformation:
      "Embrace the duality of wisdom and strength with the Owl & Eagle Duo Ring. Elevate your style with this symbolic piece that pays homage to the magnificent qualities of two iconic birds. Order your Owl & Eagle Duo Ring now and carry the essence of both creatures with you wherever you go",
  },
  {
    _id:"p10",
    title: "Falcon Face Ring - Majestic Precision in Every Detail",
    price: "249",
    sizes: ["20"],
    img: FalconRing,
    description:
      "Embark on a journey of strength and grace with our Falcon Face Ring, an exquisite piece of jewelry that captures the essence of one of nature's most magnificent birds. The falcon, revered for its speed and precision, comes to life in this meticulously crafted ring, making a bold statement of elegance and power.",

    extraInformation:
      "Elevate your style with the Falcon Face Ring, a testament to the precision and majesty of the falcon. Make a bold statement with this powerful piece that resonates with the spirit of the wild. Order your Falcon Face Ring today and embrace the untamed beauty it brings to your personal style.",
  },
  {
    _id:"p11",
    title:
      "Crystal Eye Matte Snake Ring - Serpentine Elegance with Mystic Allure",
    price: "249",
    sizes: ["20"],
    img: MatteBlackSnakeRedRing,
    description:
      "Introducing the Crystal Eye Matte Snake Ring, a captivating fusion of serpentine elegance and mystic allure. This unique piece of jewelry is a symphony of bold design and refined aesthetics, perfect for those who seek to make a statement with their style.",

    extraInformation:
      "Embrace the mystique of the Crystal Eye Matte Snake Ring and let your style slither into the realms of bold sophistication. Elevate your look with this unique piece that captures the essence of serpentine allure. Order your Crystal Eye Matte Snake Ring now and bring a touch of mystery to your personal collection.",
    variants: [
      {
        img: MatteBlackSnakeRedRing,
        variant: "Red Eye",
      },
      {
        img: MatteBlackSnakeGreenRing,
        variant: "Green Eye",
      },
    ],
  },
  {
    _id:"p12",
    title: "Matte Black Nail Ring - Edgy Elegance for the Modern Trendsetter",
    price: "249",
    // sizes: ["20"],
    img: NailRing,
    description:
      "Introducing the Matte Black Nail Ring, a sleek and edgy accessory that transcends traditional jewelry norms. This unique piece seamlessly blends bold design with a touch of sophistication, making it the perfect choice for those who dare to stand out.",
    extraInformation:
      "Embrace the avant-garde with the Matte Black Nail Ring – a symbol of individuality and a testament to your fashion-forward sensibilities. Elevate your look and make a statement that defies convention. Order yours now and let your style shine with this distinctive piece.",
  },
];

export default products;
