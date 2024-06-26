import CarouselHome from "@/components/home/carousel";
import BackgroundImageCardsHero from "@/components/home/cards";
import Customer from "@/components/home/costumer";
import CarouselSlider from "@/components/home/testimonial";

export default function Home() {
  return (
      <div>
        <CarouselHome/>
        <BackgroundImageCardsHero/>
        <Customer/>
        <CarouselSlider/>
      </div>
  );
}

