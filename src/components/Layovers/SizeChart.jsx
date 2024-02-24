"use client";

import Image from "next/image";
import sizechartimage from "../../../public/assets/images/SizeChart.jpg";
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

const SizeChart = ({ dialogTriggerComponent }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{dialogTriggerComponent()}</DrawerTrigger>
      <DrawerContent className="flex flex-col items-center">
        <DrawerHeader>
          <DrawerTitle>Size Chart</DrawerTitle>
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
        </DrawerHeader>
        <Image
          alt="size-chart"
          src={sizechartimage}
          className="w-4/5 max-w-[600px]"
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <button className="px-6 py-2 max-w-[500px] text-black border-2 w-fit border-black/70 text-center">
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SizeChart;
