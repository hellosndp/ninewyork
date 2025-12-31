import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/commercial_cleaning_team_in_nyc_office.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  spaceType: z.string().min(1, "Please select a space type"),
  message: z.string().optional(),
});

export default function Hero() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      spaceType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "We will contact you shortly to confirm your commercial cleaning needs.",
    });
    form.reset();
  }

  return (
    <section className="relative w-full bg-background pt-8 pb-16 md:py-20 lg:py-24 overflow-hidden border-b-4 border-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tighter uppercase">
              Commercial Cleaning Services for <span className="block mt-2">New York Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground/90 max-w-lg leading-relaxed">
              Reliable, routine cleaning for offices, buildings, and commercial spaces across NYC.
            </p>
            
            <div className="hidden lg:block mt-8 p-4 bg-black/5 border-l-4 border-black">
              <ul className="space-y-2 font-bold text-lg">
                <li className="flex items-center gap-2">✓ Fully Insured & Bonded</li>
                <li className="flex items-center gap-2">✓ Trained Uniformed Staff</li>
                <li className="flex items-center gap-2">✓ Consistent NYC Schedule</li>
              </ul>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black relative">
            <h3 className="text-2xl font-bold mb-6 text-black uppercase">Get A Commercial Quote</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Inc." {...field} className="bg-gray-50 border-black focus-visible:ring-black rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-gray-50 border-black focus-visible:ring-black rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="name@company.com" {...field} className="bg-gray-50 border-black focus-visible:ring-black rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(212) 555-0123" {...field} className="bg-gray-50 border-black focus-visible:ring-black rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="spaceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold">Type of Space</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50 border-black focus:ring-black rounded-none">
                            <SelectValue placeholder="Select space type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="office">Office Space</SelectItem>
                          <SelectItem value="retail">Retail / Storefront</SelectItem>
                          <SelectItem value="building">Entire Building</SelectItem>
                          <SelectItem value="medical">Medical Facility</SelectItem>
                          <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-bold">Cleaning Requirements (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Daily cleaning needed, approx 5000 sq ft..." 
                          className="resize-none bg-gray-50 border-black focus-visible:ring-black rounded-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-black text-white hover:bg-black/80 font-bold text-lg h-14 rounded-none uppercase tracking-wide mt-4">
                  Request Service Proposal
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      {/* Background Image Integration - Subtle blend or positioned */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 pointer-events-none z-0">
         <img src={heroImage} alt="NYC Commercial Cleaning" className="w-full h-full object-cover grayscale mix-blend-multiply" />
      </div>
    </section>
  );
}
