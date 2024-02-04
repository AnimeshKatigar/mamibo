import Image from "next/image";
import QuickView from "./Layovers/QuickView";
import QuickShop from "./Layovers/QuickShop";
import Link from "next/link";

const ProductCard = ({ singlePhoto = false, details }) => {
  const link = `/products/${details?._id}`;
  return (
    <div className="p-2 ">
      <div className="relative cursor-pointer hover:shadow-xl ">
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
          <div className="absolute flex bottom-[4%] justify-center gap-x-2 w-full z-10">
            <QuickView
              dialogTriggerComponent={() => (
                <div className="rounded-full bg-black text-white px-3 viewBtn whitespace-nowrap flex h-8 items-center text-[14px] font-GothamLight">
                  <span className="w-full text-center mb-0.5">Quick view</span>
                </div>
              )}
              data={details}
              dialogCloseComponent={() => <button>Close</button>}
            />
            <QuickView
              dialogTriggerComponent={() => (
                <div className="rounded-full bg-black text-white px-3 viewBtn whitespace-nowrap flex h-8 items-center text-[14px] font-GothamLight">
                  <span className="w-full text-center mb-0.5">Quick Shop</span>
                </div>
              )}
              data={details}
              dialogCloseComponent={() => <button>Close</button>}
            />
          </div>
          <Link href={link}>
            <Image
              src={
                details?.variants
                  ? details.variants?.[0].img
                  : // ? details.variants?.[details.variants.length - 1].img
                    details?.img
              }
              className="w-full aspect-square object-fit"
              alt="image"
            />
          </Link>
        </div>
      </div>
      <Link href={link}>
        <div className="my-4">
          <h4 className="font-GothamBlack text-sm mb-0.5">{details.title}</h4>
          <p className="font-GothamMedium text-sm text-black/60">
            ₹ {details.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
