"use client";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import logoWhite from "../../public/assets/logos/LogoWhiteBg.png";
import logoBlack from "../../public/assets/logos/LogoBlackBg.png";
import Image from "next/image";
import Link from "next/link";
import BagIcon from "../../public/assets/icons/BagWhite.svg";
import CartMenu from "./Layovers/CartMenu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);

  function extractRoutePrefix(fullRoute) {
    // Find the index of the second "/" in the route
    let secondSlashIndex = fullRoute.indexOf("/", fullRoute.indexOf("/") + 1);

    // Extract the route prefix
    let routePrefix =
      secondSlashIndex !== -1
        ? fullRoute.substring(0, secondSlashIndex)
        : fullRoute;

    return routePrefix;
  }

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0, duration: 1.5, type: "just" },
    },
    hidden: { y: "-100%", opacity: 0 },
  };

  const routes = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/products" },
    { label: "Collections", path: "/collections" },
  ];

  const checkActiveRoute = (path) => {
    return extractRoutePrefix(pathname) === path;
  };

  const handleNavClick = (path) => {
    router.push(path);
    if (burgerMenuToggle) {
      setBurgerMenuToggle(!burgerMenuToggle);
    }
  };

  return (
    <motion.nav
      // animate="visible"
      // variants={navbarVariants}
      // initial="hidden"
      className={`justify-between  ${
        pathname !== "/" ? "navbar-bg" : "navbar-darkBg"
      } px-[3rem] flex items-center sm:py-[1rem] sm:max-lg:py-3 max-lg:px-[1.25rem] max-sm:py-1 max-sm:h-[56px] fixed w-screen z-30 top-0 font-GothamMedium h-[70px]`}
    >
      <div className="md:hidden">
        <Hamburger
          direction="left"
          toggled={burgerMenuToggle}
          toggle={setBurgerMenuToggle}
          color="white"
          hideOutline={true}
        />

        <AnimatePresence>
          {burgerMenuToggle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[56px] z-50"
            >
              <div className="flex h-[calc(100vh-56px)]">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="w-full bg-white shadow-xl h-full flex flex-col justify-between"
                >
                  <nav className="mt-10 flex flex-col">
                    {routes.map((val) => (
                      <div
                        key={val.path}
                        onClick={() => handleNavClick(val.path)}
                        className={`border-b text-center py-3 transition-all cursor-pointer`}
                      >
                        {val.label}
                      </div>
                    ))}
                  </nav>
                  <p className=" py-2 text-center border-t bg-black/10  font-GothamLight text-black text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-lg my-2">|</span> ZenG
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link href="/">
        <Image src={logoBlack} alt="logo-dark" className="h-16 w-16" />
      </Link>
      <div className="hidden md:flex items-center gap-x-3 h-full">
        {routes.map((val) => (
          <Link
            key={val.path}
            href={val.path}
            className={`hover:text-white hover:border-b transition-all ${
              checkActiveRoute(val.path)
                ? "border-b text-white"
                : "text-white/60"
            }`}
          >
            {val.label}
          </Link>
        ))}
      </div>
      <div>
        <CartMenu
          triggerComponent={() => (
            <Image
              src={BagIcon}
              className="hover:scale-110 transition-all duration-200 cursor-pointer"
              alt="cart"
            />
          )}
          closeComponent={() => <div>CLOSE THIS COMPONENT</div>}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
