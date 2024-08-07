"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useState, useContext } from "react";
import { CartContext } from "@/components/Contexts/CartContext";
import { Trash, Minus, Plus, PlusCircle, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RadioButton from "@/components/RadioButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Page() {
  const [voucherCode, setVoucherCode] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  const [discount, setDiscount] = useState(0);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cashfree");

  const addressFields = [
    { name: "name", placeholder: "Full Name", type: "text" },
    { name: "street", placeholder: "Street Address", type: "text" },
    { name: "city", placeholder: "City", type: "text" },
    { name: "state", placeholder: "State/Province", type: "text" },
    { name: "postalCode", placeholder: "Postal Code", type: "text" },
    { name: "country", placeholder: "Country", type: "text" },
  ];

  const paymentMethods = [
    { value: "cashfree", label: "Cashfree Payment" },
    { value: "cod", label: "Cash on Delivery" },
  ];

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

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

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

  const total = calculateTotal();
  const discountedTotal = total - total * discount;

  const CartItems = () => {
    return (
      <>
        {cartItems?.map((item, i) => (
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
        <span className="text-gray-900">
          ₹ {total?.toLocaleString("en-IN")}
        </span>
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
          ₹ {discountedTotal?.toLocaleString("en-IN")}
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
            className="flex-grow w-full p-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            onClick={applyVoucher}
            className="bg-[#2D2D2D]/90 text-white px-4 py-2 hover:bg-[#2D2D2D] transition-colors border border-[#2D2D2D]/90"
          >
            Apply
          </button>
        </div>
      </div>
      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
        Pay now
      </button>
    </div>
  );

  const sections = [
    {
      title: "Delivery Address",
      render: () => (
        <form className="grid gap-4">
          {addressFields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={address[field.name]}
              onChange={handleAddressChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none"
            />
          ))}
        </form>
      ),
    },
    {
      title: "Payment Method",
      render: () => (
        <div className="grid gap-4">
          {paymentMethods.map((method) => (
            <div>
              <div className="p-1 flex gap-x-3" key={method.value}>
                <RadioButton
                  // label={method.label}
                  value={method.value}
                  checked={paymentMethod === method.value}
                  onChange={handlePaymentChange}
                />
                <div className="w-full flex-row justify-center">
                  <div className="flex items-center justify-between">
                    <h3 className="mb-0 leading-6 ">
                      {method.label}{" "}
                      {method.value === "cashfree" && (
                        <TooltipProvider delayDuration={300}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info size={14} className="ml-4" />
                            </TooltipTrigger>
                            <TooltipContent
                              className="w-1/2 right-3"
                              sideOffset={6}
                              side="right"
                            >
                              <p className="text-sm">
                                After clicking “Pay now”, you will be redirected
                                to Cashfree Payment
                                (UPI,Cards,Wallets,NetBanking) to complete your
                                purchase securely.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </h3>
                    {method?.value === "cashfree" && (
                      <div className="flex flex-wrap">
                        <img
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/dcdfe7e1d5626b0a1dda.svg"
                          alt="UPI"
                          title="UPI"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
                          alt="VISA"
                          title="VISA"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/5e3b05b68f3d31b87e84.svg"
                          alt="MASTERCARD"
                          title="MASTERCARD"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/fe904f1307590b94f8e6.svg"
                          alt="RUPAY"
                          title="RUPAY"
                          className="w-8 h-8"
                        />
                      </div>
                    )}
                  </div>
                  {method?.value === "cashfree" && "(UPI, Cards, NetBanking)"}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    { title: "Items", render: () => <CartItems /> },
  ];

  return (
    <main className="pt-20 pb-10 px-[5%] md:px-[10%] w-full">
      <Reveal customClassName="my-8 flex justify-between px-2 items-center">
        <h2 className="text-black text-2xl uppercase font-GothamBlack">
          Checkout
        </h2>
      </Reveal>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-grow">
          <Accordion type="multiple" defaultValue={sections[0].title}>
            {sections.map((section) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>{section.render()}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {OrderSummary()}
      </div>
    </main>
  );
}
