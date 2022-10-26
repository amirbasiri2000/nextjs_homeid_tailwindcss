const TitleBig = ({
  number,
  color_text,
  color_number,
  header,
  title,
  title1,
}) => {
  console.log({ color_text });
  return (
    <div className="w-full flex justify-center items-center mb-10">
      <div className="w-80 h-60 relative flex flex-col justify-center items-center ">
        <p className="text-[#0ec6d5] font-bold pb-8 text-xl z-10">{header}</p>
        <h2 className={`${color_text} text-center text-[2.4rem] z-10`}>
          {title}
        </h2>
        <h2 className={`${color_text} text-center text-[2.4rem] z-10`}>
          {title1}
        </h2>
        <span
          className={`absolute z-0 ${color_number} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center text-[15rem] w-full h-full font-extrabold`}
        >
          {number}
        </span>
      </div>
    </div>
  );
};

export default TitleBig;
