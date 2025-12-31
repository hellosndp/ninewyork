import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "@assets/generated_images/commercial_cleaning_team_in_nyc_office.png";
import img2 from "@assets/generated_images/empty_modern_office_interior.png";
import img3 from "@assets/generated_images/commercial_floor_polishing_machine.png";
import img4 from "@assets/generated_images/nyc_building_exterior_cleaning.png";
import img5 from "@assets/generated_images/grand_corporate_lobby_cleaning.png";
import img6 from "@assets/generated_images/cleaning_crew_in_hallway.png";

const images = [img1, img4, img2, img5, img3, img6];

export default function Gallery() {
  return (
    <section className="py-20 bg-zinc-100 border-y-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">Operations Gallery</h2>
            <div className="w-24 h-2 bg-background"></div>
          </div>
          <p className="hidden md:block font-bold text-lg text-gray-500 uppercase">Real NYC Projects</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((img, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-0 overflow-hidden">
                      <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-8 gap-2 pr-4">
             <CarouselPrevious className="static translate-y-0 rounded-none border-2 border-black bg-white hover:bg-background text-black h-12 w-12" />
             <CarouselNext className="static translate-y-0 rounded-none border-2 border-black bg-white hover:bg-background text-black h-12 w-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
