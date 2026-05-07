import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
              src="/assets/images/production.jpg"
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
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
              Pioneering Health-Infused Confectionery
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

export default About;
