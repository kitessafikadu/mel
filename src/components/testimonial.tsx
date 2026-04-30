import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TRUST_AVATAR =
  "https://storage.googleapis.com/dala-prod-pulic-storage/generated-images/86ad4178-a1e6-434d-a5bb-4b435993f7db/trust-and-care---professional-endorsement-d7980e22-1777496771091.webp";

const TESTIMONIALS = [
  {
    quote:
      "Mel Medicated products have consistently demonstrated the highest quality in the functional confectionery space. Their commitment to clean ingredients and precise dosages makes them a brand I confidently recommend.",
    name: "Dr. Sarah Thompson",
    role: "Pharmacist, Chief Pharmaceutical Advisor",
    avatar: TRUST_AVATAR,
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-cyan-950 via-cyan-900 to-slate-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by Professionals
          </h2>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 sm:p-8 shadow-2xl backdrop-blur-md">
          <Carousel opts={{ loop: true }} className="">
            <CarouselContent className="px-4 sm:px-0">
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i} className="px-4 sm:px-6">
                  <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto text-slate-900">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      “{t.quote}”
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex !top-auto !bottom-4 !left-4 !-translate-y-0 z-20" />
            <CarouselNext className="hidden sm:flex !top-auto !bottom-4 !right-4 !-translate-y-0 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
