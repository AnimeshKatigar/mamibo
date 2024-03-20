"use client";
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

const CartMenu = ({ triggerComponent, closeComponent }) => {
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
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{triggerComponent()}</SheetTrigger>
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
          <SheetFooter>
            <SheetClose asChild>{closeComponent()}</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartMenu;
