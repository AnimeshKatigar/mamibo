"use client";
import useMediaQuery from "@/utils/useMediaQuery";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useState } from "react";
import QuantityBtn from "../QuantityBtn";
import Link from "next/link";

export default function QuickView({
  dialogTriggerComponent,
  data,
  dialogCloseComponent,
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const keyFeatures = (
    <>
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
          This piece deserves to be shown off but it sometimes needs some rest,
          too; store it safely in an air-tight box when not in use.
        </li>
        <li>
          Drink at least 3 liters of water every day, but don&apos;t let it fall
          on the jewelry; keep away from water.
        </li>
        <li>
          Chemicals look good in chemistry textbooks. On jewellery?&nbsp;
          <strong>Naaah!</strong>
        </li>
      </ul>
    </>
  );
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(
    data?.variants ? 0 : null
  );
  const [count, setCount] = useState(1);

  const link = `/products/${data?._id}`;

  if (!isDesktop)
    return (
      <Drawer>
        <DrawerTrigger asChild>{dialogTriggerComponent()}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>{dialogCloseComponent()}</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTriggerComponent()}</DialogTrigger>
      <DialogContent className=" sm:max-w-[60vw] max-h-[80vh] overflow-y-auto lg:flex p-0 outline-none border-none rounded-none">
        <Image
          src={
            data?.variants
              ? data.variants?.[selectedVariantIndex].img
              : data?.img
          }
          alt="product-img"
          className="w-1/2"
        />
        <div className="overflow-y-auto p-2 ">
          <DialogHeader className="w-[95%] mt-6">
            <DialogTitle className="font-GothamMedium text-lg">
              {data?.title}
            </DialogTitle>
            <p className="font-GothamLight text-lg text-black pb-5 border-b border-black/10">
              ₹ {data?.price}
            </p>
            <DialogDescription className="line-clamp-4 text-ellipsis overflow-clip mt-4">
              {data?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="w-[95%] pb-3">
            {data?.variants && (
              <>
                <p className="text-[14px] text-slate-500 font-GothamBold my-3">
                  Variants
                </p>
                <div className=" flex gap-x-3">
                  {data.variants.map((variant, index) => (
                    <div
                      className={`${
                        index !== selectedVariantIndex
                          ? " text-[#141414] bg-white"
                          : " bg-[#141414] text-white"
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
          </div>
          {/* <div
            className="product-description-html-dev font-GothamLight text-base"
            dangerouslySetInnerHTML={{ __html: data?.html }}
          /> */}
          {/* <DialogFooter className="sm:justify-start">
            <DialogClose asChild>{dialogCloseComponent()}</DialogClose>
          </DialogFooter> */}
          <Link
            href={link}
            className="py-3 border-t border-black/10 font-GothamLight hover:underline underline-offset-2 text-black/85 hover:text-black cursor-pointer transition-all"
          >
            View all details -&gt;
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
