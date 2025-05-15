"use client";

import { motion } from "motion/react";
import {
  AlignVerticalSpaceAround,
  Cpu,
  Fingerprint,
  IndentDecrease,
  Pencil,
  Settings2,
  Sparkles,
  VideoIcon,
  Zap,
} from "lucide-react";
import {
  zoomInAnimation,
  staggerUpAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";

export default function Services() {
  const services = [
    {
      icon: <Zap className="size-4" />,
      title: "Web Development",
      description:
        "Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement.",
    },
    {
      icon: <Cpu className="size-4" />,
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions.",
    },
    {
      icon: <Fingerprint className="size-4" />,
      title: "UI/UX Design",
      description:
        "Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.",
    },
    {
      icon: <Pencil className="size-4" />,
      title: "Web Hosting",
      description:
        "Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.",
    },
    {
      icon: <Settings2 className="size-4" />,
      title: "Graphics Design",
      description:
        "Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.",
    },
    {
      icon: <Sparkles className="size-4" />,
      title: "Printing",
      description:
        "Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters.",
    },
    {
      icon: <IndentDecrease className="size-4" />,
      title: "3D Designing",
      description:
        "Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation.",
    },
    {
      icon: <VideoIcon className="size-4" />,
      title: "Video Editing",
      description:
        "Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more.",
    },
    {
      icon: <AlignVerticalSpaceAround className="size-4" />,
      title: "Market Consultancy",
      description:
        "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success",
    },
  ];

  return (
    <motion.section
      id="Service"
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={zoomInAnimation}
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <motion.div
          className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
          variants={staggerUpAnimation}
        >
          <motion.h2
            className="text-balance text-4xl font-medium lg:text-5xl"
            variants={staggerUpAnimation}
          >
            The creative services we provide
          </motion.h2>
          <motion.p variants={staggerUpAnimation}>
            We offer a range of creative services to help you bring your ideas
            to life. From branding and digital experiences to custom projects,
            our team delivers innovative design and exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto grid max-w-4xl divide-x divide-y border border-primary/10 *:p-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={zoomInAnimation}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="space-y-3 backdrop-blur-lg"
              variants={staggerUpAnimation}
              custom={index}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                zIndex: 1,
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </motion.div>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
