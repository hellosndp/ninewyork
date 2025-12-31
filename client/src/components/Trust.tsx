import { Check, Clock, Shield, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "NYC Coverage",
    description: "Serving Manhattan, Brooklyn, Queens, and the Bronx with local teams."
  },
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "Full liability coverage and bonded staff for your peace of mind."
  },
  {
    icon: Clock,
    title: "Reliable Schedule",
    description: "We show up on time, every time. Consistent service you can plan around."
  },
  {
    icon: Check,
    title: "Vetted Staff",
    description: "Background-checked, trained, and uniformed professional cleaners."
  }
];

export default function Trust() {
  return (
    <section className="py-20 bg-background text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 border-l-4 border-black bg-white/10">
              <feature.icon className="w-10 h-10 mb-4 stroke-[2.5]" />
              <h3 className="text-xl font-black uppercase mb-2">{feature.title}</h3>
              <p className="font-medium leading-relaxed opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
