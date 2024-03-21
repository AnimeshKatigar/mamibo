"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart, ShoppingBag } from "lucide-react";

const CartMenu = ({ triggerComponent, closeComponent, customOpen, openSetter }) => {
  const [activeTab, setActiveTab] = useState(0);
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
  const wishLists = () => {
  let wishListItems=JSON.parse(localStorage.getItem("wishListItems") || "[]");
    return <div>

    </div>;
  };
  const CartItems = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return (
      <div className="max-h-[75%] my-3 overflow-y-auto">
        {cartItems?.length ? (
          <div >
            {cartItems.map((item, i) => (
              <div className="flex relative gap-x-2 p-2" key={item?.productDetails._id}>
                <Image src={item?.productDetails?.img} alt="product-img" className="aspect-[3/4] object-fit" height={180}/>
                <div> Title
                  </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3></h3>
          </div>
        )}
      </div>
    );
  };
  let sheetProps = customOpen?.length ? {open:customOpen, onOpenChange:openSetter} : {}
  return (
    // <div>
      <Sheet {...sheetProps} >
       <SheetTrigger asChild>{triggerComponent()}</SheetTrigger>
        {/* {customOpen ?triggerComponent() :<SheetTrigger asChild>{triggerComponent()}</SheetTrigger>} */}
        <SheetContent className="shadow-2xl pt-2.5">
          <SheetHeader>
            <SheetTitle className="font-GothamMedium text-lg mb-2">
              Shopping Cart
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
          <CartItems/>
          <SheetFooter>
            <SheetClose asChild>{closeComponent()}</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    // </div>
  );
};

export default CartMenu;
