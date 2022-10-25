import Image from "next/image";
import React from "react";
import NextLink from "next/link";

export const Header = () => {
  return (
    <div className="">
      <div className="lg:hidden transition-colors bg-[#1e1d85] pl-4">
        <div className="relative w-36 h-16 justify-start items-center">
          <NextLink href="/">
            <Image
              src="/images/logo-white.png"
              alt="HomeID Logo"
              layout="fill"
              objectFit="contain"
            />
          </NextLink>
        </div>
      </div>
      <div className="lg:flex transition-colors justify-around items-center hidden ">
        {/* logo */}
        <div className="relative w-36 h-24 cursor-pointer">
          <NextLink href="/">
            <Image
              src="/images/logo.png"
              alt="HomeID Logo"
              layout="fill"
              objectFit="contain"
            />
          </NextLink>
        </div>

        {/* navbar */}
        <div>
          <ul className="no-underline flex justify-center space-x-4 items-center">
            <li className="nav_itme">
              <NextLink href="/">Demos</NextLink>
            </li>
            <li className="nav_itme">
              <NextLink href="/">Listing</NextLink>
            </li>
            <li className="nav_itme">
              <NextLink href="/">Property</NextLink>
            </li>
            <li className="nav_itme">
              <NextLink href="/">Dashboard</NextLink>
            </li>
            <li className="nav_itme">
              <NextLink href="/">Docs</NextLink>
            </li>
          </ul>
        </div>

        {/* button */}
        <div>
          <NextLink href="/">
            <span
              className="btn_green"
            >
              Purchase
            </span>
          </NextLink>
        </div>
      </div>
    </div>
  );
};
