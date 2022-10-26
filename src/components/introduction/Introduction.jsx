import DemoCart from "../common/demo_cart/DemoCart";
import TitleBig from "../common/title/Title_big";

const data = [
  {
    id: 1,
    image: "/images/home-landing-02.jpg",
    title: "Home 01",
  },
  {
    id: 2,
    image: "/images/home-landing-03.jpg",
    title: "Home 02",
  },
  {
    id: 3,
    image: "/images/home-landing-04.jpg",
    title: "Home 03",
  },
  {
    id: 4,
    image: "/images/home-landing-05.jpg",
    title: "Home 04",
  },
  {
    id: 5,
    image: "/images/home-landing-06.jpg",
    title: "Home 05",
  },
  {
    id: 6,
    image: "/images/home-landing-02.jpg",
    title: "Home 06",
  },
  {
    id: 7,
    image: "/images/home-landing-07.jpg",
    title: "Home 07",
  },
  {
    id: 8,
    image: "/images/home-landing-08.jpg",
    title: "Home 08",
  },
  {
    id: 9,
    image: "/images/home-landing-09.jpg",
    title: "Home 09",
  },
];

const Introduction = () => {
  return (
    <div className="w-full h-auto bg-[#080c42] mt-16 lg:mt-28 rounded-3xl lg:px-24 pt-2 pb-32">
      <TitleBig
        number="01"
        color_text="text-white"
        color_number="text-[#14184b]"
        header="Introduction"
        title="HomeID Demos"
        title1 =""
      />
      <div className="flex justify-center flex-wrap gap-y-20 w-full">
        {data.map((item) => (
          <DemoCart key={item.id} img={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Introduction;
