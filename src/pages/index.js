import Features from "../components/features/Features";
import HeroSection from "../components/Hero/Hero";
import Introduction from "../components/introduction/Introduction";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <Features />
    </div>
  );
}
