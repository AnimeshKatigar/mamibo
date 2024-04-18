// "use client";
import Image from "next/image";
import QuickView from "./Layovers/QuickView";
import QuickShop from "./Layovers/QuickShop";
import Link from "next/link";
import { useContext } from "react";
import useMediaQuery from "@/utils/useMediaQuery";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { CartContext } from "@/components/Contexts/CartContext";

const ProductCard = ({ singlePhoto = false, details }) => {
  const link = `/products/${details?._id}`;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { wishList, addToWishlist, removeFromWishlist } =
    useContext(CartContext);

  const checkWishlistOccurence = () => {
    let index = wishList?.findIndex((item) => item?._id === details?._id);
    if (index > -1) {
      return true;
    } else return false;
  };

  const handleWishlistAction = () => {
    if (checkWishlistOccurence()) {
      removeFromWishlist(details?._id);
    } else {
      addToWishlist(details);
    }
  };

  return (
    <div className="p-2 ">
      <div className="relative cursor-pointer hover:shadow-xl overflow-clip">
        {/* {!singlePhoto && (
          <Link href={link}>
            <Image
              src={details?.variants ? details.variants?.[0].img : details?.img}
              className="productImage aspect-square"
              // width={350}
              // height={350}
              alt="image"
            />
          </Link>
        )} */}
        <div
          className={`${
            "singleProductImage"
            // !singlePhoto ? "productImage-hover" : "singleProductImage"
          } overflow-clip font-GothamLight`}
        >
          {isDesktop && (
            <>
              <div className="absolute z-10 right-5 top-5">
                <div
                  className={`rounded-full ${checkWishlistOccurence() ? "bg-red-500":"bg-white hover:bg-[#141414]"} p-2 transition-all group `}
                  onClick={handleWishlistAction}
                >
                  <Heart
                    size={18}
                    className="group-hover:text-white transition-all"
                    fill="white"
                    stroke={checkWishlistOccurence() ? "white" : "#141414"}
                  />
                </div>
              </div>
              <div className="absolute flex bottom-[4%] justify-center gap-x-2 w-full z-10">
                <QuickView
                  dialogTriggerComponent={() => (
                    <div className="rounded-full bg-black text-white px-3 viewBtn whitespace-nowrap flex h-8 items-center text-[14px] font-GothamLight">
                      <span className="w-full text-center mb-0.5">
                        Quick view
                      </span>
                    </div>
                  )}
                  data={details}
                  dialogCloseComponent={() => <button>Close</button>}
                />
                <QuickView
                  dialogTriggerComponent={() => (
                    <div className="rounded-full bg-black text-white px-3 viewBtn whitespace-nowrap flex h-8 items-center text-[14px] font-GothamLight">
                      <span className="w-full text-center mb-0.5">
                        Quick Shop
                      </span>
                    </div>
                  )}
                  data={details}
                  dialogCloseComponent={() => <button>Close</button>}
                />
              </div>
            </>
          )}
          <Link href={link}>
            <Image
              src={
                details?.variants
                  ? details.variants?.[0].img
                  : // ? details.variants?.[details.variants.length - 1].img
                    details?.img
              }
              className="w-full aspect-[3/4] object-fit"
              alt="image"
              placeholder="blur"
              // loading="eager"
            />
          </Link>
        </div>
        {!isDesktop && (
          <div className="flex bottom-0 justify-center divide-x border-b border-x w-full">
            <QuickView
              dialogTriggerComponent={() => (
                <div className="transition-all py-2 justify-center items-center gap-x-2 text-black/60 whitespace-nowrap flex w-1/2">
                  <Eye size={22} />
                  {/* Quick view */}
                </div>
              )}
              data={details}
              dialogCloseComponent={() => <button>Close</button>}
            />
            <QuickView
              dialogTriggerComponent={() => (
                <div className="transition-all py-2 justify-center items-center gap-x-2 text-black/60 whitespace-nowrap flex w-1/2">
                  <ShoppingBag size={22} />
                  {/* Quick Shop */}
                </div>
              )}
              data={details}
              dialogCloseComponent={() => <button>Close</button>}
            />
          </div>
        )}
      </div>
      <Link href={link}>
        <div className="my-4">
          <h4 className="font-GothamBlack text-sm mb-0.5">{details.title}</h4>
          <p className="font-GothamMedium text-sm text-black/60">
            ₹ {details?.price?.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
