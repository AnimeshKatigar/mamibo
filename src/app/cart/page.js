"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lottie from "react-lottie-player";
import emptyCartJson from "../../../public/assets/animationFiles/EmptyCart.json";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "@/components/Contexts/CartContext";
import { Trash, Minus, Plus, PlusCircle } from "lucide-react";

export default function Page() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const calculateTotal = () => {
    return cartItems?.reduce(
      (acc, item) => acc + item.productDetails.price * item.quantity,
      0
    );
  };

  const applyVoucher = () => {
    // Mock discount application
    if (voucherCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const total = calculateTotal();
  const discountedTotal = total - total * discount;
  const increaseQuantity = (item) => {
    let index = cartItems.findIndex(
      (val) => val.productDetails?._id === item?.productDetails._id
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
        {cartItems.map((item, i) => (
          <div
            className="flex flex-col sm:flex-row relative gap-4 p-4 border-b border-gray-200"
            key={item?.productDetails._id}
          >
            <div className="flex-shrink-0">
              <Image
                src={item?.productDetails?.img}
                placeholder="blur"
                alt="product-img"
                className="object-cover sm:aspect-[3/4]"
                height={180}
                width={150}
              />
            </div>
            <div className="flex-grow overflow-hidden">
              <h4
                title={item?.productDetails?.title}
                className="font-medium text-sm sm:text-base text-gray-800 truncate"
              >
                {item?.productDetails?.title}
              </h4>
              <h4 className="font-medium text-sm sm:text-base mt-1 text-gray-800">
                ₹ {item?.productDetails?.price.toLocaleString("en-IN")}
              </h4>
              <h4 className="font-medium text-sm sm:text-base mt-1 text-gray-600">
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
                <h4 className="font-medium text-sm sm:text-base mt-2 text-gray-800">
                  Total: ₹
                  {(item.productDetails.price * item.quantity).toLocaleString(
                    "en-IN"
                  )}
                </h4>
              )}
            </div>
            <PlusCircle
              onClick={() => removeItem(i)}
              className="absolute top-2 right-2 sm:static sm:ml-auto cursor-pointer rotate-45 transition-colors text-black/60 hover:text-black"
              size={20}
            />
          </div>
        ))}
      </>
    );
  };

  const OrderSummary = () => (
    <div className="w-full md:w-1/3 bg-gray-50 p-4 shadow-lg rounded-lg md:sticky md:top-24 h-full">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-gray-900">₹ {total.toLocaleString("en-IN")}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Discount</span>
        <span className="text-gray-900">
          ₹ {(total * discount).toLocaleString("en-IN")}
        </span>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between mb-6">
        <span className="text-xl font-semibold">Total</span>
        <span className="text-xl font-semibold text-gray-900">
          ₹ {discountedTotal.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="mb-6">
        <label
          htmlFor="voucher"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Voucher Code
        </label>
        <div className="flex">
          <input
            type="text"
            id="voucher"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            className="flex-grow w-full p-2 border border-black text-sm focus:outline-none"
          />
          <button
            onClick={applyVoucher}
            className="bg-[#2D2D2D]/90 text-white px-4 py-2 hover:bg-[#2D2D2D] transition-colors border border-[#2D2D2D]/90"
          >
            Apply
          </button>
        </div>
      </div>
      <Link
        className="w-full flex items-center justify-center bg-black/80 text-white py-3 font-semibold text-lg hover:bg-black/90transition-colors"
        href="/checkout"
      >
        Proceed to Checkout
      </Link>
    </div>
  );

  return (
    <main className="pt-20 pb-10 px-[5%] md:px-[10%] w-full">
      <Reveal customClassName="my-8 flex justify-between px-2 items-center">
        <h2 className="text-black text-2xl uppercase font-GothamBlack">Cart</h2>
      </Reveal>
      {cartItems?.length ? (
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow">
            <CartItems />
          </div>
          {OrderSummary()}
        </div>
      ) : (
        // <CartItems />
        <div className="text-center flex flex-col justify-center items-center h-full w-full">
          <Lottie
            loop
            animationData={emptyCartJson}
            play
            style={{ width: 150, height: 150 }}
          />
          <h3 className="text-base text-black/60">Your cart is empty</h3>
          <Link
            className="bg-[#141414] text-white cursor-pointer w-1/2 mx-auto mt-2 py-2"
            href="/products"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </main>
  );
}
