import Reveal from "../Reveal";
import ProductCard from "../ProductCard";
import PrimaryBtn from "../PrimaryBtn";
import bestSellerProducts from "../../../public/data/bestSellers.js";
import Link from "next/link"; 

const BestSellers = () => {
  return (
    <div>
      <Reveal>
        <h2 className="text-black text-2xl uppercase mb-8 font-GothamBlack">
          BestSellers
        </h2>
      </Reveal>
      <div className="flex gap-x-4 items-start overflow-x-auto no-scrollbar">
        {bestSellerProducts.map((product, i) => (
          <Reveal customClassName="min-w-[320px] w-1/3" key={product.title} delay={0.05 * (i + 1)}>
            <ProductCard
              details={product}
              singlePhoto={product?.variants ? false : true}
            />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Link href="/shop">
        <PrimaryBtn customClasses="w-fit mx-auto my-4 text-center" />
        </Link>
      </Reveal>
    </div>
  );
};

export default BestSellers;
