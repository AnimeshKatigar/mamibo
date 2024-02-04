/* eslint-disable @next/next/no-img-element */
"use client";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import PrimaryBtn from "@/components/PrimaryBtn";
import products from "../../../../public/data/products";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useState } from "react";
import QuantityBtn from "@/components/QuantityBtn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page({ params }) {
  const productDetails = products.filter((val) => val._id === params.slug)[0];
  const recommendedProducts = products
    .filter((val) => val._id !== params.slug)
    .slice(0, 4);

  const [count, setCount] = useState(1);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(
    productDetails?.variants ? 0 : null
  );

  return (
    <main className="pb-10 px-[5%] md:px-[10%] w-full">
      <div
        className={`mt-28 relative pb-3 border-b border-black/10 mb-4 flex flex-col lg:flex-row`}
      >
        <div
          className={`lg:w-1/2 lg:pr-4 ${
            productDetails?.variants?.length > 2
              ? ""
              : "lg:sticky lg:top-20 lg:h-screen xl:h-[85vh] lg:overflow-y-auto no-scrollbar"
          }  2xl:h-auto`}
        >
          <Zoom zoomMargin={25}>
            <img
              src={
                productDetails?.variants
                  ? productDetails.variants?.[selectedVariantIndex].img?.src
                  : productDetails?.img?.src
              }
              alt="Big Product Image"
              className="w-full h-auto object-contain xl:max-h-[550px] xl:object-cover"
            />
          </Zoom>
          {productDetails?.variants && (
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-4/5 mx-auto mt-4"
            >
              <CarouselContent>
                {productDetails?.variants.map((variant) => (
                  <CarouselItem
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                    key={variant.variant}
                  >
                    <img
                      src={variant.img?.src}
                      alt="Other Product Image 1"
                      className="w-full object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <h2 className="text-black text-xl lg:text-[32px] lg:leading-9 font-GothamMedium">
            {productDetails?.title}
          </h2>
          <p className="font-GothamLight text-lg text-black py-5 border-b border-black/10">
            ₹ {productDetails?.price}
          </p>
          <div className="font-GothamLight text-black/70 text-base py-3 ">
            {productDetails?.description}
          </div>
          {productDetails?.variants && (
            <>
              <p className="text-[14px] text-slate-500 font-GothamBold mb-3">
                Variants
              </p>
              <div className="flex gap-x-3">
                {productDetails.variants.map((variant, index) => (
                  <div
                    className={`${
                      index !== selectedVariantIndex
                        ? "text-[#141414] bg-white"
                        : "bg-[#141414] text-white"
                    } transition-all cursor-pointer border border-[#141414] w-fit rounded-full px-2 py-1 text-sm font-GothamLight `}
                    key={variant?.variant}
                    onClick={() => setSelectedVariantIndex(index)}
                  >
                    {variant.variant}
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex gap-x-2 my-3">
            <QuantityBtn
              // customClasses="w-full"
              count={count}
              setterFunction={setCount}
            />
            <button className="w-full bg-[#141414] text-base text-white py-3 font-GothamLight">
              Add to cart
            </button>
          </div>
          <div className="py-3">
            <p>
              <strong>Key Features:</strong>
            </p>
            <ul>
              <li>
                Crafted from&nbsp;<span>Stainless Steel</span>
                <span>&nbsp;</span>for durability and style
              </li>
              <li>Versatile enough for everyday wear or special occasions</li>
              <li>Available in various sizes to suit individual preferences</li>
              <li>
                This piece deserves to be shown off but it sometimes needs some
                rest, too; store it safely in an air-tight box when not in use.
              </li>
              <li>
                Drink at least 3 liters of water every day, but don&apos;t let
                it fall on the jewelry; keep away from water.
              </li>
              <li>
                Chemicals look good in chemistry textbooks. On jewellery?&nbsp;
                <strong>Naaah!</strong>
              </li>
            </ul>
            {productDetails?.extraInformation?.length && (
              <p className="my-3">{productDetails?.extraInformation}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[#141414] text-xl font-GothamMedium">
          You may also like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1">
          {recommendedProducts.map((product, i) => (
            <Reveal key={product._id} delay={0.05 * (i + 1)}>
              <ProductCard
                details={product}
                singlePhoto={product?.variants ? false : true}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
