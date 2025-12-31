import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import imgOffice from "@assets/generated_images/empty_modern_office_interior.png";
import imgFloor from "@assets/generated_images/commercial_floor_polishing_machine.png";
import imgRestroom from "@assets/generated_images/clean_commercial_restroom.png";
import imgLobby from "@assets/generated_images/grand_corporate_lobby_cleaning.png";
import imgJanitor from "@assets/generated_images/cleaning_crew_in_hallway.png";
import imgNight from "@assets/generated_images/night_office_cleaning_nyc.png";

const services = [
  {
    title: "Office Cleaning",
    description: "Daily or weekly routine cleaning for corporate offices. Desks, trash removal, dusting, and common areas.",
    image: imgOffice
  },
  {
    title: "Floor & Carpet Care",
    description: "Professional floor maintenance, buffing, waxing, and deep carpet cleaning for high-traffic areas.",
    image: imgFloor
  },
  {
    title: "Restroom Sanitization",
    description: "Deep cleaning and sanitization of employee and public restrooms to maintain hygiene standards.",
    image: imgRestroom
  },
  {
    title: "Building & Lobby",
    description: "Maintenance of entrance ways, reception areas, and building common spaces for a professional first impression.",
    image: imgLobby
  },
  {
    title: "Janitorial Services",
    description: "Day porter services and ongoing facility maintenance to keep operations running smoothly.",
    image: imgJanitor
  },
  {
    title: "After-Hours Cleaning",
    description: "Nightly cleaning crews that work securely after your business closes to prepare for the next day.",
    image: imgNight
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">Our Commercial Services</h2>
          <div className="w-24 h-2 bg-background"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden group hover:translate-y-[-4px] transition-transform duration-200 bg-white">
              <div className="aspect-[4/3] relative overflow-hidden border-b-2 border-black">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <CardHeader className="bg-white p-6 pb-2">
                <CardTitle className="text-xl font-bold uppercase">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-gray-700 leading-relaxed font-medium">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
