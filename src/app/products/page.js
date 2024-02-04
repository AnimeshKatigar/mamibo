"use client";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import PrimaryBtn from "@/components/PrimaryBtn";
import products from "../../../public/data/products";

export default function Page() {
  return (
    <main className="pt-20 pb-10 px-[5%] md:px-[10%] w-full">
      <Reveal customClassName="my-8 flex justify-between px-2 items-center">
        <h2 className="text-black text-2xl uppercase  font-GothamBlack">
          SHOP ALL
        </h2>
        <p className="text-black/60 text-base font-GothamMedium">
          {products?.length} Products
        </p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1">
        {products.map((product, i) => (
          <Reveal key={product._id} delay={0.05 * (i + 1)}>
            <ProductCard
              details={product}
              singlePhoto={product?.variants ? false : true}
            />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
