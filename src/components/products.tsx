import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRODUCTS } from "@/lib/constants";

type Product = (typeof PRODUCTS)[number];

interface ProductsProps {
  onLearnMore: (product: Product) => void;
}

const Products = ({ onLearnMore }: ProductsProps) => {
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

export default Products;
