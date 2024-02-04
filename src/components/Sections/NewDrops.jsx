import Reveal from "../Reveal";
import ProductCard from "../ProductCard";
import PrimaryBtn from "../PrimaryBtn";
import newDrops from "../../../public/data/newDrops";
import Link from "next/link";

const NewDrops = () => {
  return (
    <div className="my-3">
      <Reveal>
        <h2 className="text-black text-2xl uppercase mb-8 font-GothamBlack">
          New Drops
        </h2>
      </Reveal>
      <div className="flex gap-x-4 overflow-x-auto no-scrollbar">
        {newDrops.map((product, i) => (
          <Reveal
            customClassName="min-w-[320px] w-1/3"
            key={product.title}
            delay={0.05 * (i + 1)}
          >
            <ProductCard
              title={product.title}
              price={product.price}
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

export default NewDrops;
