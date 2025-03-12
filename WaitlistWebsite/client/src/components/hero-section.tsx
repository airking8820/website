import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-gray-900">
            Structural and <br />
            Software Design <br />
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Revolutionize your workflow with cutting-edge technology solutions
          </p>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-gray-900 hover:text-white transition-colors"
            onClick={() => {
              const element = document.getElementById("waitlist");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Waitlist <ArrowDown className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}