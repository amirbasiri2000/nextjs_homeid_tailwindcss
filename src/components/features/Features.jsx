import Features_Cart from "../common/feature_cart";
import TitleBig from "../common/title/Title_big";

const data = [
  {
    id: 1,
    image: "/images/landing-feature-01.jpg",
    icon: "/images/icon-landing-feature-01.png",
    title: "Compare Property",
    desc: "This function allows the audience to compare properties by its features, price and detailed information to find their dream home.",
  },
  {
    id: 2,
    image: "/images/landing-feature-02.jpg",
    icon: "/images/icon-landing-feature-02.png",
    title: "Mortgage Calculator",
    desc: "Each property page will ahve a finance widget to help the dudience easily calculate mortgage payment in order to have a proper financial decision.",
  },
  {
    id: 3,
    image: "/images/landing-feature-03.jpg",
    icon: "/images/icon-landing-feature-03.png",
    title: "Google Analytic Integration",
    desc: "Agencies or prperty owners can observe and manage the number of visits on each property to make necessary changes if needed.",
  },
  {
    id: 4,
    image: "/images/landing-feature-04.jpg",
    icon: "/images/icon-landing-feature-04.png",
    title: "Wishlist",
    desc: "The audience can save their favorite property into the wishlist, arrange them as they want and open faster on the next visits.",
  },
  {
    id: 5,
    image: "/images/landing-feature-05.jpg",
    icon: "/images/icon-landing-feature-05.png",
    title: "Agents & Agencies",
    desc: "Users can register as an agency or agent (approved by admin) and have their own dashboard to manage personal information and add properties.",
  },
  {
    id: 6,
    image: "/images/landing-feature-06.jpg",
    icon: "/images/icon-landing-feature-06.png",
    title: "Mobile Friendly",
    desc: "HomeID is retina ready and full responsive that allows users to access the site from any browser whithout mistakes.",
  },
];

const Features = () => {
  return (
    <div className="bg-[#e9edf2]">
      <div>
        <TitleBig
          number="02"
          color_text="text-[#1e1d85]"
          color_number="text-white"
          header="Features"
          title="Featues"
          title1="You Will Love"
        />
      </div>
      <div className="flex justify-center flex-wrap lg:px-16 gap-y-14">
        {
          data?.map((cart) => (
            <Features_Cart key={cart.id} {...cart} />
          ))
        }
      </div>
    </div>
  );
};

export default Features;
