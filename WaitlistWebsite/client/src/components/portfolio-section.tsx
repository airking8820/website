import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const portfolioItems = [
  {
    title: "Learn How To From Now On Greatly Improve Your Design",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    category: "UNIQUE",
    date: "NOVEMBER 23, 2023",
    description: "Explore advanced design techniques and principles",
  },
  {
    title: "Check Out These Top 10 Mistakes Young Designers Make",
    image: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2",
    category: "COLOR",
    date: "NOVEMBER 23, 2023",
    description: "Common pitfalls to avoid in design",
  },
  {
    title: "The Future of AI in Modern Web Development",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "TECHNOLOGY",
    date: "NOVEMBER 24, 2023",
    description: "AI integration in web development",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our recent work and innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="border-none shadow-none">
                <div className="overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </AspectRatio>
                </div>
                <CardContent className="px-0 pt-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-primary">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}