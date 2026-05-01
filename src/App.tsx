import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Candy,
  HeartPulse,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Testimonial from "@/components/testimonial";

// --- Constants & Data ---

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Honey Ginger Lozenges",
    description:
      "Soothing relief for sore throats with natural honey and spicy ginger extracts.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/86ad4178-a1e6-434d-a5bb-4b435993f7db/product---honey-ginger-lozenges-72f15aac-1777496768552.webp",
    category: "Relief",
    benefits: ["Natural Honey", "Immune Support", "Fast Acting"],
  },
  {
    id: 2,
    name: "Vitamin C Herbal Gummies",
    description:
      "Daily immune booster made with real fruit juice and essential vitamins.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/attachments/a1a7d504-7e3c-4561-a6d4-fd2303af0682/1777495920801_melllllll.jpg",
    category: "Wellness",
    benefits: ["Zinc Infused", "Sugar Free", "Kid Friendly"],
  },
  {
    id: 3,
    name: "Menthol Eucalyptus Drops",
    description:
      "Clear your airways instantly with our extra-strength cooling formula.",
    image:
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/86ad4178-a1e6-434d-a5bb-4b435993f7db/hero-image---medicated-confectionery-showcase-8be94d73-1777496767983.webp",
    category: "Respiratory",
    benefits: ["Intense Cooling", "Sugar-Free", "Long Lasting"],
  },
];

type Product = (typeof PRODUCTS)[number];

const FAQS = [
  {
    question: "Are Mel Medicated products safe for children?",
    answer:
      "Most of our products are safe for children over 6 years old. However, we always recommend consulting with a pediatrician before use, especially for our specialized medicated lines.",
  },
  {
    question: "What makes your confectionery 'medicated'?",
    answer:
      "We infuse our confectionery with pharmaceutical-grade active ingredients like menthol, zinc, vitamin C, and natural herbal extracts that provide specific health benefits or symptom relief.",
  },
  {
    question: "Are your products sugar-free?",
    answer:
      "We offer both traditional and sugar-free options to cater to different dietary needs. Our sugar-free range uses high-quality stevia and xylitol.",
  },
  {
    question: "Where can I buy Mel Medicated products?",
    answer:
      "Our products are available in major pharmacies, supermarkets, and health stores nationwide. You can also order directly through our authorized distributors.",
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5 mb-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-600 p-1.5 rounded-lg">
            <Candy className="text-white w-6 h-6" />
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}
          >
            Mel
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-cyan-600 ${scrolled ? "text-slate-600" : "text-white/90"}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-slate-900" />
          ) : (
            <Menu
              className={
                scrolled ? "text-slate-900" : "text-slate-900 md:text-white"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 font-medium py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 md:pt-32 lg:pt-36 overflow-hidden pb-24 lg:pb-40"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/86ad4178-a1e6-434d-a5bb-4b435993f7db/hero-image---medicated-confectionery-showcase-8be94d73-1777496767983.webp"
          alt="Medicated Confectionery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-200 border-cyan-500/30 backdrop-blur-md px-4 py-1.5 text-sm">
              Standard of Excellence in Medicated Sweets
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sweetening the Path to{" "}
              <span className="text-cyan-400">Better Health</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Mel Medicated Confectionery PLC blends the science of wellness
              with the art of confectionery. We create delicious, effective
              medicated treats that support your daily health journey.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats/Features bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 py-8 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-white">
          {[
            {
              icon: HeartPulse,
              label: "Health-Focused",
              sub: "Science-backed formulas",
            },
            {
              icon: ShieldCheck,
              label: "Certified Quality",
              sub: "ISO & GMP Compliant",
            },
            {
              icon: CheckCircle2,
              label: "Natural Ingredients",
              sub: "Premium herbal extracts",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-cyan-600/20 p-3 rounded-full border border-cyan-500/30">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">{item.label}</p>
                <p className="text-slate-400 text-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-full -z-10" />
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/86ad4178-a1e6-434d-a5bb-4b435993f7db/production-quality-control-76deca93-1777496769056.webp"
              alt="Mel Medicated Production"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-50 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4 block">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pioneering Health-Infused Confectionery since 2010
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Mel Medicated Confectionery PLC started with a simple vision: to
              make wellness more accessible and enjoyable. We recognized that
              the medicinal experience doesn't have to be unpleasant.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Today, we are a leading manufacturer of medicated lozenges,
              gummies, and functional sweets. Our state-of-the-art facility
              adheres to the highest global pharmaceutical and food safety
              standards, ensuring every piece we produce is both safe and
              effective.
            </p>

            <div className="space-y-4">
              {[
                "Advanced pharmaceutical-grade infusion techniques",
                "Carefully sourced botanical and herbal ingredients",
                "Rigorous multi-stage quality control",
                "Eco-friendly and sustainable manufacturing",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Products = ({
  onLearnMore,
}: {
  onLearnMore: (product: Product) => void;
}) => {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-600 font-bold tracking-wider uppercase text-sm mb-4 block">
            Our Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Crafted for Your Well-being
          </h2>
          <p className="text-slate-600">
            Discover our range of scientifically formulated medicated treats
            designed to support your health throughout the seasons.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-none shadow-md group-hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-cyan-600 border-none backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-slate-600 mt-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md font-semibold"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-colors"
                    onClick={() => onLearnMore(product)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mb-8">
              Can't find what you're looking for? Reach out to our customer
              support team for detailed information about our products and
              processes.
            </p>
          </div>
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-slate-100 mb-2 px-4 bg-slate-50 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-slate-900 font-semibold py-6 hover:no-underline hover:text-cyan-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-cyan-600 p-10 md:p-14 text-white">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-cyan-100 mb-12">
                Have questions about our products or interested in becoming a
                distributor? Our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Headquarters</p>
                    <p className="text-cyan-100 text-sm">
                      Industrial Zone Sector 4, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-cyan-100 text-sm">+251 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-cyan-100 text-sm">
                      info@melmedicated.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-16">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-cyan-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 p-10 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Full Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      required
                      className="bg-slate-50 border-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-slate-50 border-none h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Subject
                  </label>
                  <Input
                    placeholder="Inquiry about distribution"
                    required
                    className="bg-slate-50 border-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    required
                    className="bg-slate-50 border-none min-h-[150px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 text-lg shadow-lg shadow-cyan-600/20"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-cyan-600 p-1.5 rounded-lg">
                <Candy className="text-white w-5 h-5" />
              </div>
              <span className="text-white text-xl font-bold tracking-tight">
                MEL <span className="text-cyan-500">PLC</span>
              </span>
            </div>
            <p className="max-w-xs mb-8">
              Pioneering the future of health-infused confectionery with
              quality, science, and taste at the core of everything we do.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Lozenges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Gummies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Sugar-Free
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Herbal Blends
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Mel Medicated Confectionery PLC. All
            rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-100 selection:text-cyan-900">
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
                  <Badge className="bg-cyan-50 text-cyan-700 border-none">
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
                        className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700"
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

                <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-sm text-slate-700 leading-relaxed">
                  <p className="font-semibold text-cyan-900 mb-1">
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
