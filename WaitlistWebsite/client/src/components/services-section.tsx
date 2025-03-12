import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Lock, Smartphone, Zap, Database } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: Globe,
    description: "Custom web applications built with modern technologies",
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications",
  },
  {
    title: "Cloud Solutions",
    icon: Database,
    description: "Scalable cloud infrastructure and deployment",
  },
  {
    title: "API Integration",
    icon: Code2,
    description: "Seamless integration with third-party services",
  },
  {
    title: "Security",
    icon: Lock,
    description: "Enterprise-grade security implementations",
  },
  {
    title: "Performance",
    icon: Zap,
    description: "Optimization for maximum speed and efficiency",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="w-8 h-8 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
