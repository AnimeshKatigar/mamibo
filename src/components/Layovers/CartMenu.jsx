"use client";
import React from "react";
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
import { Heart, ShoppingBag  } from 'lucide-react';

const CartMenu = ({ triggerComponent, closeComponent }) => {
  return (
    <div>
      <Sheet >
        <SheetTrigger asChild>{triggerComponent()}</SheetTrigger>
        <SheetContent className="shadow-2xl ">
          <SheetHeader>
            <SheetTitle className="font-GothamMedium text-lg">Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="flex w-[80%] justify-between border border-[#141414] divide-x divide-[#141414]">
            <div className=""><Heart/></div>
            <div className=""><ShoppingBag/></div>
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
