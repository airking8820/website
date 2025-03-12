import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Briefcase, Trophy, Star } from "lucide-react";

export default function StatsSection() {
  const { data: waitlistCount } = useQuery({
    queryKey: ["/api/waitlist/count"],
  });

  const stats = [
    {
      label: "Happy Clients",
      value: 150,
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Projects Completed",
      value: 300,
      icon: Briefcase,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Awards Won",
      value: 25,
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      label: "Waitlist Members",
      value: waitlistCount?.count || 0,
      icon: Star,
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.1)",
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/70 z-1" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    className="text-4xl font-bold text-white"
                  />
                  <p className="mt-2 text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}