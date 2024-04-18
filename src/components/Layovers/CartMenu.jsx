"use client";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, ShoppingBag } from "lucide-react";
import { Trash, Minus, Plus, PlusCircle } from "lucide-react";
import { CartContext } from "@/components/Contexts/CartContext";
import Lottie from "react-lottie-player";
import Link from "next/link";
import emptyCartJson from "../../../public/assets/animationFiles/EmptyCart.json";
import EmptyWishlist from "../../../public/assets/animationFiles/EmptyWishlist";
import { AnimatePresence } from "framer-motion";

const CartMenu = ({
  triggerComponent,
  closeComponent,
  customOpen,
  openSetter,
  tabToOpen = 0,
}) => {
  const [activeTab, setActiveTab] = useState(tabToOpen);
  const { cartItems, wishList, setCartItems } = useContext(CartContext);

  const tabs = [
    {
      icon: (className) => <Heart className={className} />,
      handleOnClick: () => setActiveTab(0),
    },
    {
      icon: (className) => <ShoppingBag className={className} />,
      handleOnClick: () => setActiveTab(1),
    },
  ];

  const increaseQuantity = (item) => {
    let index = cartItems.findIndex(
      (val) =>
        val.productDetails?._id === item?.productDetails._id &&
        item.size === val.size
    );
    const itemToBeUpdated = cartItems[index];
    itemToBeUpdated.quantity += 1;
    let arr = cartItems;
    arr.splice(index, 1, itemToBeUpdated);
    setCartItems([...arr]);
  };

  const decreaseQuantity = (item, index) => {
    let idx = cartItems.findIndex(
      (val) =>
        val.productDetails?._id === item?.productDetails._id &&
        item.size === val.size
    );
    const itemToBeUpdated = cartItems[idx];
    let items = cartItems;
    if (itemToBeUpdated.quantity === 1) {
      items.splice(index, 1);
      setCartItems([...items]);
    } else {
      itemToBeUpdated.quantity -= 1;
      items.splice(idx, 1, itemToBeUpdated);
      setCartItems([...items]);
    }
  };

  const removeItem = (index) => {
    let items = cartItems;
    items.splice(index, 1);
    setCartItems([...items]);
  };

  const CartItems = () => {
    return (
      <>
        {cartItems?.length ? (
          <>
            {cartItems.map((item, i) => (
              <div
                className="flex relative gap-x-2 p-2 border-b border-[#e0e0e0]"
                key={item?.productDetails._id}
              >
                <Image
                  src={item?.productDetails?.img}
                  placeholder="blur"
                  alt="product-img"
                  className="max-sm:max-w-[110px] object-cover sm:aspect-[3/4] sm:object-fit"
                  height={180}
                />
                <div className="overflow-hidden">
                  <h4
                    title={item?.productDetails?.title}
                    className="text-ellipsis overflow-hidden font-medium text-sm sm:text-base whitespace-nowrap"
                  >
                    {item?.productDetails?.title}
                  </h4>
                  <h4 className="text-ellipsis overflow-hidden font-medium text-sm sm:text-base mt-1">
                    ₹ {item?.productDetails?.price.toLocaleString("en-IN")}
                  </h4>
                  <h4 className="text-ellipsis overflow-hidden font-medium text-sm sm:text-base mt-1 opacity-60">
                    Size: {item?.size}
                  </h4>
                  <div className="flex border border-black/40 w-[96px] min-w-[96px] text-sm py-1 px-2 gap-x-2">
                    <button
                      className="w-[30px] flex items-center justify-center"
                      onClick={() => decreaseQuantity(item, i)}
                    >
                      {item?.quantity === 1 ? (
                        <Trash size={12} />
                      ) : (
                        <Minus size={12} />
                      )}{" "}
                    </button>
                    <button className="w-[30px] flex items-center justify-center">
                      {item?.quantity}
                    </button>
                    <button
                      className="w-[30px] flex items-center justify-center"
                      onClick={() => increaseQuantity(item)}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  {item?.quantity > 1 && (
                    <h4 className="text-ellipsis overflow-hidden font-medium text-sm sm:text-base mt-2">
                      Total: ₹
                      {(
                        item.productDetails.price * item.quantity
                      ).toLocaleString("en-IN")}
                    </h4>
                  )}
                </div>
                <PlusCircle
                  onClick={() => removeItem(i)}
                  className="rotate-45 transition-colors text-black/60 hover:text-black cursor-pointer"
                />
              </div>
            ))}
          </>
        ) : (
          <div className="text-center flex flex-col justify-center items-center h-full w-full">
            <Lottie
              loop
              animationData={emptyCartJson}
              play
              style={{ width: 150, height: 150 }}
            />
            <h3 className="text-base text-black/60">Your cart is empty</h3>
            <SheetClose asChild>
              <Link
                className="bg-[#141414] text-white cursor-pointer w-1/2 mx-auto mt-2 py-2"
                href="/products"
              >
                Start Shopping
              </Link>
            </SheetClose>
          </div>
        )}
      </>
    );
  };

  function WishlistItems() {
    return (
      <>
        {wishList?.length ? (
          <>
            {wishList.map((item, i) => (
              <div
                className="flex relative gap-x-2 p-2 border-b border-[#e0e0e0] items-center"
                key={item._id}
              >
                <Image
                  src={item?.img}
                  alt="product-img"
                  placeholder="blur"
                  className="max-sm:max-w-[110px] object-cover sm:aspect-[3/4] sm:object-fit"
                  height={180}
                />
                <div className="overflow-hidden">
                  <h4 className="font-medium text-sm sm:text-base line-clamp-2">
                    {item?.title}
                  </h4>
                  <h4 className="text-ellipsis overflow-hidden font-medium text-sm sm:text-base mt-1">
                    ₹ {item?.price.toLocaleString("en-IN")}
                  </h4>
                </div>
                <Heart
                  fill="#ea4343"
                  className="cursor-pointer ml-auto"
                  color="#ea4343"
                />
              </div>
            ))}
          </>
        ) : (
          <div className="text-center h-full w-full flex flex-col justify-center items-center">
            <div className="relative mt-28">
              <EmptyWishlist />
            </div>
            <h3 className="text-base text-black/60 pt-24">
              There are no items in your wishlist
            </h3>
          </div>
        )}
      </>
    );
  }
  let sheetProps = customOpen?.length
    ? { open: customOpen, onOpenChange: openSetter }
    : {};

  const calculateSubTotal = () => {
    let cost = cartItems?.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue?.productDetails?.price * currentValue.quantity,
      0
    );
    return cost;
  };
  return (
    // <div>
    <Sheet {...sheetProps}>
      <SheetTrigger asChild>{triggerComponent()}</SheetTrigger>
      {/* {customOpen ?triggerComponent() :<SheetTrigger asChild>{triggerComponent()}</SheetTrigger>} */}
      <SheetContent className="max-md:w-[90%] shadow-2xl px-0 max-h-dvh">
        <div className="flex flex-col h-[calc(100vh-30px)]">
          <div className="px-2 lg:px-4">
            <SheetHeader>
              <SheetTitle className="font-GothamMedium text-lg mb-2">
                {activeTab === 1 ? "Shopping Cart" : "Your Wishlist"}
              </SheetTitle>
            </SheetHeader>
            <div className="flex w-full justify-between border divide-x divide-[#14141454] border-[#14141454]">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  className={`w-1/2 relative flex items-center justify-center py-2 ${
                    activeTab === i && "tab"
                  } cursor-pointer`}
                  onClick={tab.handleOnClick}
                >
                  {tab.icon(
                    `transition-all ${
                      activeTab === i ? "text-[#141414]" : "text-[#14141454]"
                    }`
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-grow overflow-auto pb-2 px-2 lg:px-4">
            {activeTab === 1 ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CartItems />
                </motion.div>
              </AnimatePresence>
            ) : (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <WishlistItems />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          {cartItems?.length > 0 && activeTab === 1 && (
            <div className="w-full bg-[#eeeeee] p-3">
              <div className="flex justify-between w-full">
                <h2>Subtotal:</h2>
                <h2>₹{calculateSubTotal()?.toLocaleString("en-IN")}</h2>
              </div>
              <SheetClose asChild className="mt-3">
                <div className="bg-[#222] text-white text-center cursor-pointer py-2 w-full">
                  View Cart
                </div>
              </SheetClose>
              {/* <SheetClose asChild>{closeComponent()}</SheetClose> */}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
    // </div>
  );
};

export default CartMenu;
