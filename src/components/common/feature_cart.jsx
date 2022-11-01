import Image from "next/image";

const Features_Cart = ({ image, icon, title, desc }) => {
  return (
    <div className="flex flex-col jsutify-center h-full items-stretch w-full md:w-6/12 lg:w-4/12 px-8 cursor-pointer max-w-[460px]">
      <div className="w-full bg-white rounded-lg pt-2 shadow-lg">
        <div className="relative w-full h-60">
          <Image src={image} alt="Feature" layout="fill" />
        </div>
        <div className="relative flex flex-col justify-center items-center gap-y-4 px-4 border-t-[1px] border-[#eee]">
          <div className="absolute -top-8 w-16 h-16">
            <Image src={icon} alt="logo" layout="fill" className="w-16 h-16" />
          </div>
          <h3 className="text-[#333] text-xl font-medium mt-8">{title}</h3>
          <p className="text-center pb-10 text-[#656565] text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Features_Cart;
