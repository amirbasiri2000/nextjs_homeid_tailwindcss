import Image from "next/image";
import NextLink from "next/link";

const DemoCart = ({ title, img }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 h-auto cursor-pointer flex flex-col justify-center items-center space-y-10 px-5">
      <NextLink href="/" className="hover:hover-shine">
        <div className="relative w-full h-80 rounded-xl">
          <Image className="rounded-lg" src={img} alt="Demo" layout="fill" />
        </div>
      </NextLink>
      <div>
        <span className="text-white text-2xl">{title}</span>
      </div>
    </div>
  );
};

export default DemoCart;
