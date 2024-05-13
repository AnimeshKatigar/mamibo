"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import useMediaQuery from "@/utils/useMediaQuery";
import Image from "next/image";
import { useState, useEffect } from "react";
import WelcomeImage from "../../../public/assets/images/WelcomeImage.jpg";
import dynamic from "next/dynamic";
import Link from "next/link";
import { toast } from "sonner";
import { Clipboard } from "lucide-react";

const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

const InitialContent = ({
  email,
  setEmail,
  handleModalClose,
  setActiveContent,
}) => {
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onTouched" });

  const [showLoader, setShowLoader] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const sendEmail = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setActiveContent(2);
    }, 1500);
  };
  return (
    <>
      <h2 className="text-2xl mb-2 text-[#6f3b1a] font-bold">Welcome!!</h2>
      <p className="text-sm text-[#6f3b1ac4] my-7 w-4/5 mx-auto font-semibold">
        Subscribe to our newsletter and get exciting offers!
      </p>
      <input
        {...register("email", {
          onChange: handleInput,
          required: true,
          value: email,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email id",
          },
        })}
        placeholder="Email"
        autoComplete="off"
        className="py-2 px-1 w-3/4 my-2 focus:outline-none transition-all text-sm font-GothamLight text-black bg-[#fefefe] border border-[#6f3b1a]"
      />
      {errors?.email?.message && (
        <p className="text-[#f00] text-[12px]">{errors?.email?.message}</p>
      )}
      <button
        className={`${
          showLoader ? "bg-[#6f3b1aa4]" : "bg-[#6f3b1a]"
        } transition-all p-2 min-w-fit w-[75%] mx-auto block text-[#fefefe]`}
        disabled={!isValid || showLoader}
        onClick={sendEmail}
      >
        Join
      </button>
      <p
        className="underline underline-offset-2 my-2 text-sm text-[#6f3b1aa4] cursor-pointer"
        onClick={handleModalClose}
      >
        No,thanks
      </p>
      {showLoader && (
        <div className="h-6 w-6 rounded-full border-2 border-[#6f3b1a] border-b-transparent animate-spin mx-auto mt-3"></div>
      )}
    </>
  );
};

const SuccessContent = ({ handleModalClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("GET10");
    toast.success("The code is copied to the clipboard");
  };
  return (
    <div className="flex flex-col items-center justify-center w-4/5 mx-auto">
      <Confetti numberOfPieces={100} />
      <h2 className="text-[32px] leading-[32px] mt-3 mb-2 text-[#6f3b1a] font-bold">
        Thank you for joining us!
      </h2>
      <p className="text-sm text-[#6f3b1ac4] my-3 mx-auto font-semibold">
        Please use your below coupon at the checkout page
      </p>
      <div
        className="flex gap-x-3 px-1 items-center justify-center border-dashed border-2 border-[#6f3b1a] text-[#6f3b1a] py-1 w-full cursor-pointer select-none"
        onClick={copyToClipboard}
      >
        <h3 className="w-full">GET10</h3>
        <Clipboard className="ml-auto" />
      </div>
      <Link
        onClick={handleModalClose}
        href="/products"
        className="bg-[#6f3b1a] p-2 min-w-fit w-full mt-2 mx-auto block text-[#fefefe]"
      >
        {" "}
        Shop now
      </Link>
    </div>
  );
};

const WelcomeModal = () => {
  const [email, setEmail] = useState("");
  const [activeContent, setActiveContent] = useState(0);
  const [openModal, setOpenModal] = useState(true);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    let isWelcomeModalShowed = JSON.parse(
      localStorage.getItem("isWelcomeModalShowed") || false
    );
    if (!isWelcomeModalShowed) {
      let timer1 = setTimeout(() => setOpenModal(true), 4000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, []);

  const handleModalClose = () => {
    localStorage.setItem("isWelcomeModalShowed", true);
    setOpenModal(false);
  };

  return (
    <div>
      <Dialog open={openModal} onOpenChange={handleModalClose}>
        <DialogContent className="w-[90vw] bg-[#fbe5a4] gap-0 sm:max-w-[60vw] max-h-[60vh] no-scrollbar md:max-h-[80vh] md:overflow-y-auto md:flex p-0 outline-none border-none rounded-none">
          <div className="md:py-5 md:px-8 max-md:py-2 max-md:px-3 text-center w-full h-full mt-5">
            {activeContent == 0 ? (
              <InitialContent
                email={email}
                handleModalClose={handleModalClose}
                setActiveContent={setActiveContent}
                setEmail={setEmail}
              />
            ) : (
              <SuccessContent handleModalClose={handleModalClose} />
            )}
          </div>
          {isDesktop && (
            <Image
              src={WelcomeImage}
              alt="welcome-img"
              className="w-full aspect-[3/4] md:w-[45%]"
              placeholder="blur"
              loading="eager"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WelcomeModal;
