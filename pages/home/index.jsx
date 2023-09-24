import Header from "@/components/Header";
import Carousel from "@/components/ui/Carousel";
import Slider from "react-slick";

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex p-10 gap-5 w-full h-full flex-col">
      <Header />
      <Carousel />
    </div>
  );
};

export default Index;
