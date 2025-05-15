"use client";

import { staggerUpAnimation, zoomInAnimation } from "@/utils/animations/motion";
import { Check, Headset, Palette, Settings, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const features = [
    {
      icon: <Sparkles className="size-5" />,
      title: "Quality Services",
      description: "Premium solutions tailored to your business needs"
    },
    {
      icon: <Check className="size-5" />,
      title: "Free Consultation",
      description: "Get expert advice before committing to any project"
    },
    {
      icon: <Palette className="size-5" />,
      title: "Creative Designers",
      description: "Innovative professionals with artistic vision"
    },
    {
      icon: <Headset className="size-5" />,
      title: "Customer Support",
      description: "24/7 assistance for all your needs"
    },
    {
      icon: <Settings className="size-5" />,
      title: "Activate Window",
      description: "Go to Settings to activate UI"
    }
  ];

  return (
    <motion.section 
      id="About"
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
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="text-lg"
            variants={staggerUpAnimation}
          >
            At IKIM Tech, we combine innovation, expertise, and dedication to deliver exceptional results. Here's why we stand out:
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={zoomInAnimation}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-4 rounded-lg border border-primary/10 p-6 text-center backdrop-blur-lg"
              variants={staggerUpAnimation}
              custom={index}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 p-2 text-primary"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}