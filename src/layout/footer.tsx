"use client";
import {
  zoomInAnimation,
  staggerUpAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

const sections = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#" },
      { name: "Mobile Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Graphics Design", href: "#" },
      { name: "Printing", href: "#" },
      { name: "Video Editing", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Our Services", href: "#" },
      { name: "Our Projects", href: "#" },
      { name: "Teams", href: "#" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer = ({
  logo = {
    url: "/logo.png",
    src: "/logo.png",
    alt: "logo",
    title: "ikimtechco.com",
  },
}: FooterProps) => {
  return (
    <motion.section
      className="py-12 md:py-20 lg:py-32 bg-primary text-background"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={zoomInAnimation}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left"
          variants={zoomInAnimation}
        >
          <motion.div
            className="flex w-full flex-col items-center justify-between gap-6 lg:items-start lg:w-auto"
            variants={staggerUpAnimation}
          >
            <motion.div
              className="flex items-center gap-2 lg:justify-start"
              variants={zoomUpAnimation}
            >
              <h2 className="text-xl sm:text-2xl font-semibold">{logo.title}</h2>
            </motion.div>
            <motion.ul
              className="flex items-center space-x-4 sm:space-x-6 text-background/80"
              variants={staggerUpAnimation}
            >
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.li
                  key={index}
                  className="font-medium hover:text-background"
                  variants={staggerUpAnimation}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#">
                    <Icon className="size-5 sm:size-6" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12 xl:gap-20"
            variants={zoomInAnimation}
          >
            {sections.map((section, sectionIdx) => (
              <motion.div
                key={sectionIdx}
                variants={staggerUpAnimation}
                custom={sectionIdx}
              >
                <motion.h3
                  className="mb-4 sm:mb-6 text-lg sm:text-base font-bold"
                  variants={staggerUpAnimation}
                >
                  {section.title}
                </motion.h3>
                <motion.ul
                  className="space-y-2 sm:space-y-4 text-sm text-background/80"
                  variants={zoomInAnimation}
                >
                  {section.links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      className="font-medium hover:text-background"
                      variants={staggerUpAnimation}
                      whileHover={{ x: 5 }}
                    >
                      <a href={link.href}>{link.name}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
            <motion.div
              variants={staggerUpAnimation}
              custom={2}
              className="sm:col-span-2 md:col-span-1"
            >
              <motion.h3
                className="mb-4 sm:mb-6 text-lg sm:text-base font-bold"
                variants={staggerUpAnimation}
              >
                Contact Us
              </motion.h3>
              <motion.div
                className="space-y-2 sm:space-y-4 text-sm text-background/80"
                variants={zoomInAnimation}
              >
                <motion.p variants={staggerUpAnimation}>
                  Email: info@example.com
                </motion.p>
                <motion.p variants={staggerUpAnimation}>
                  Phone: +1 (123) 456-7890
                </motion.p>
                <motion.p variants={staggerUpAnimation}>
                  Address: Jemo, Addis Ababa, Ethiopia
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col justify-between gap-4 border-t border-background/20 pt-8 text-center text-sm font-medium text-background/80 sm:flex-row sm:items-center sm:text-left"
          variants={staggerUpAnimation}
        >
          <motion.p variants={staggerUpAnimation}>
            © 2024 {logo.title}. All rights reserved.
          </motion.p>
          <motion.ul
            className="flex flex-wrap justify-center gap-4 sm:justify-start"
            variants={staggerUpAnimation}
          >
            {["Terms and Conditions", "Privacy Policy"].map((item, index) => (
              <motion.li
                key={index}
                className="hover:text-background"
                variants={staggerUpAnimation}
                whileHover={{ scale: 1.05 }}
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { Footer };