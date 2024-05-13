import products from "./products";
const newDrops = products.filter((prod) => prod.isNewDrop);

export default newDrops;
