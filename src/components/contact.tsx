import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxL0XvqW07frgZdfF1bcQ1xVU7OLme3ZCie4h-TW9-sqz1pU2w-DTCR34az9z5fOoH8Pw/exec"; // Paste URL from Step 3 here
    const formData = new FormData(e.currentTarget);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Important for Google Apps Script
      });

      toast.success("Message sent! We will get back to you soon.");
      (e.target as HTMLFormElement).reset(); // Clear form
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error!", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      {/* ... keeping your layout code identical ... */}
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
                    <p className="text-cyan-100 text-sm">+251 94 842 1132</p>
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
                      name="Full Name" // Must match Sheet Header
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
                      name="Email Address" // Must match Sheet Header
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
                    name="Subject" // Must match Sheet Header
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
                    name="Message" // Must match Sheet Header
                    placeholder="How can we help you?"
                    required
                    className="bg-slate-50 border-none min-h-[150px] resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 text-lg shadow-lg shadow-cyan-600/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
}
