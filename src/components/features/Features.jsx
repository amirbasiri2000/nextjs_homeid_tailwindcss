import Features_Cart from "../common/feature_cart";
import TitleBig from "../common/title/Title_big";

const Features = () => {
  return (
    <div className="bg-[#e9edf2]">
      <TitleBig
        number="02"
        color_text="text-[#1e1d85]"
        color_number="text-white"
        header="Features"
        title="Featues"
        title1="You Will Love"
      />
      <Features_Cart />
    </div>
  );
};

export default Features;
