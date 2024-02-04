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

export default function QuickShop({
  dialogTriggerComponent,
  dialogCloseComponent,
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
          </button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>{dialogCloseComponent()}</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
