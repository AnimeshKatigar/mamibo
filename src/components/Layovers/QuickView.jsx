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
import { useState, useContext } from "react";
import QuantityBtn from "../QuantityBtn";
import Link from "next/link";
import { toast } from "sonner";
import { CartContext } from "@/components/Contexts/CartContext";
import CartMenu from "@/components/Layovers/CartMenu";

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
  const [forceClose, setForceClose] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems, wishList, addToCart, addToWishlist, setCartItems } =
    useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(data.sizes[0]);

  const link = `/products/${data?.href}`;

  const handleAddToCart = () => {
    let index = cartItems?.findIndex(
      (item) => item?.productDetails?._id === data?._id
    );
    if (index > -1 && cartItems?.[index].size === selectedSize) {
      const itemToBeUpdated = cartItems[index];
      itemToBeUpdated.quantity += quantity;
      let arr = cartItems;
      arr.splice(index, 1, itemToBeUpdated);
      setCartItems(arr);
    } else {
      let itemDetails = {
        productDetails: data,
        quantity,
        size: selectedSize,
      };
      addToCart(itemDetails);
      // localStorage.setItem("cartItems", JSON.stringify(items));
    }
    let cartSheet = document.getElementById("cart-sheet-trigger");
    let currentQuickViewModal = document.getElementById("dialog-modal-close");
    currentQuickViewModal.click();
    cartSheet.click();
    toast.success("Added to the cart");
  };
  // let props = forceClose ? { open: false } : {};

  // if (!isDesktop)
  //   return (
  //     <Drawer>
  //       <DrawerTrigger asChild>{dialogTriggerComponent()}</DrawerTrigger>
  //       <DrawerContent>
  //         <DrawerHeader>
  //           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
  //           <DrawerDescription>This action cannot be undone.</DrawerDescription>
  //         </DrawerHeader>
  //         <DrawerFooter>
  //           <DrawerClose asChild>{dialogCloseComponent()}</DrawerClose>
  //         </DrawerFooter>
  //       </DrawerContent>
  //     </Drawer>
  //   );
  return (
    <Dialog>
      {/* <Dialog {...props}> */}
      <DialogTrigger asChild>{dialogTriggerComponent()}</DialogTrigger>
      <DialogContent className="w-[90vw] sm:max-w-[60vw] max-h-[60vh] no-scrollbar md:max-h-[80vh] overflow-y-auto md:flex p-0 outline-none border-none rounded-none">
        <Image
          src={
            data?.variants
              ? data.variants?.[selectedVariantIndex].img
              : data?.img
          }
          placeholder="blur"
          alt="product-img"
          className="w-full aspect-[3/4] md:mt-auto md:w-1/2 p-3 md:p-0"
        />
        <div className="max-md:h-auto md:overflow-y-auto p-2 max-md:pt-0">
          <DialogHeader className="w-[95%] mt-6">
            <DialogTitle className="font-GothamMedium text-lg">
              {data?.title}
            </DialogTitle>
            <p className="font-GothamLight text-lg text-black pb-5 border-b border-black/10">
              ₹ {data?.price?.toLocaleString("en-IN")}
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
            {data?.sizes && (
              <>
                {/* <div className="flex gap-x-10 items-center justify-between pr-3 mb-3"> */}
                <p className="text-[14px] text-slate-500 font-GothamBold my-2">
                  Select Size
                </p>
                {/* </div> */}
                <div className="flex gap-3 flex-wrap">
                  {data.sizes.map((size) => (
                    <div
                      className={`${
                        size !== selectedSize
                          ? "text-[#141414] bg-white"
                          : "bg-[#141414] text-white"
                      } transition-all cursor-pointer border border-[#141414] w-fit rounded-full px-2 py-1 text-sm font-GothamLight `}
                      key={size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="flex gap-x-2 my-3">
              <QuantityBtn count={quantity} setterFunction={setQuantity} />
              <CartMenu
                // customOpen={openCart}
                tabToOpen={1}
                openSetter={setOpenCart}
                triggerComponent={() => (
                  <button
                    className="w-full bg-[#141414] text-base text-white py-3 font-GothamLight"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>
                )}
              />
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
