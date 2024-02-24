"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logos/logo.png"

const Footer = () => {
  const [email, setEmail] = useState("");
  const {
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onTouched" });

  const handleInput = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = () => {
    if (!isValid) {
      return;
    } else {
      alert("Submitted succesfully");
    }
  };

  const informaticDocs = [
    { label: "Contact Information", path: "/" },
    { label: "Privacy Policy", path: "/" },
    { label: "Shipping Policy", path: "/" },
    { label: "Terms of Service", path: "/" },
  ];

  return (
    <Reveal>
      <footer className="w-full bg-[#eeeeee] py-6 text-center">
        <Reveal>
          <Image src={logo} alt="logo" className="w-1/3 mx-auto" />
          <div className="flex gap-x-3 text-black text-base my-3 justify-center">
            <p>Early Access.</p>
            <p>Premium Discounts.</p>
            <p>Exclusive Service.</p>
          </div>
        </Reveal>
        <div className="relative w-1/2 text-center mx-auto transition-all">
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
            autoComplete="email"
            className="py-4 pl-4 pr-14 w-full focus:outline  focus:outline-white/60 transition-all text-sm font-GothamLight text-black bg-transparent border-black border"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              disabled={!isValid}
              onClick={handleSubmit}
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-[#2D2D2D] text-white transition-all hover:bg-neutral-800 disabled:bg-[#797878]"
            >
              <svg viewBox="0 0 16 6" className="w-4">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {errors?.email?.message && (
          <p className="text-red">{errors?.email?.message}</p>
        )}
        <div className="md:flex gap-x-4 px-[5%] border-t border-black/10 mt-8 pt-4 justify-around">
          <div className="w-full md:w-1/3 px-2 text-left flex flex-col gap-3 text-black/70 font-GothamLight my-3 md:my-0">
            <h3 className="text-black">Just in Case</h3>
            {informaticDocs.map((val) => (
              <Link
                key={val.path}
                href={val.path}
                className="hover:text-black transition-all text-black/60 w-fit"
              >
                {val.label}
              </Link>
            ))}
          </div>
          <div className="w-full md:w-1/3 px-2 text-left text-black">
            <h3>About Us</h3>
            <p className="text-justify italics font-GothamLight mt-3 text-black/60">
              It is a fashion brand with contemporary indo-western style form
              that highlights the shape of the beauty essence of the body.
              Fabrics have beautiful shine, flawless, subtle, lightweight
              delicate texture. Women who want to make their figure look more
              expressive and highlight using minimal accessories as per design.
              The brand focuses on women&apos;s wear garment enhances their natural
              curves and adds a lot more elegance to their natural look..
            </p>
          </div>

          {/* <Image src={sizeGuide} alt="size-guide"/> */}
        </div>
        {/* TO DO: Show THANKS FOR SUBSRCIBING AFTER EMAIL IS BEEN SENT USING LOCAL STORAGE */}
        <p className="pt-4 border-t border-black/10  font-GothamLight text-black mt-5 text-sm">
          © {new Date().getFullYear()} <span className="text-lg my-2">|</span>{" "}
          MAMIBO
        </p>
      </footer>
    </Reveal>
  );
};

export default Footer;
