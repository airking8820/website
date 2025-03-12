import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NavHeader() {
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PAGES", href: "/pages" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "SHOP", href: "/shop" },
    { label: "BLOG", href: "/blog" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 py-6 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-900">DEON</a>
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link href={item.href}>
                  <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    {item.label}
                  </a>
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
