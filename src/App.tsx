import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";
import { PRODUCTS } from "@/lib/constants";

type Product = (typeof PRODUCTS)[number];

// --- Main App ---

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onLearnMore={setSelectedProduct} />
        <Testimonial />
        <FAQSection />
        <Contact />
      </main>
      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProduct(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-blue-50 text-blue-700 border-none">
                    {selectedProduct.category}
                  </Badge>
                </div>
                <DialogTitle className="text-2xl text-slate-900">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-slate-600 text-base">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="h-64 w-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Key Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 leading-relaxed">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Why this product stands out
                    </h4>
                    <p>
                      This product is part of our curated range of medicated
                      confectionery designed to support wellness with clean
                      ingredients, consistent formulation, and a taste profile
                      people actually enjoy.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600 leading-relaxed">
                    <h4 className="font-semibold text-slate-900 mb-2">
                      What to expect
                    </h4>
                    <p>
                      Depending on the product type, it may help soothe,
                      refresh, or support daily wellness. It is designed as a
                      convenient option for people who want functional benefits
                      without giving up flavor.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700 leading-relaxed">
                  <p className="font-semibold text-blue-900 mb-1">
                    Good to know
                  </p>
                  <p>
                    For best results, follow the product directions on the
                    package or check with your healthcare professional if you
                    have questions about suitability for your needs.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}

export default App;
