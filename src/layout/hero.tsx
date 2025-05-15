"use client";
import { Button } from "@/components/ui/button";
import {
  staggerUpAnimation,
  zoomInAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const heroContent = [
  {
    title: "IKIM Tech Co",
    description:
      "We turn your concepts into reality through creative services. Our team delivers innovative design and exceptional results in branding, digital experiences, and custom projects.Let us transform your vision into a lasting masterpiece.",
  },
  {
    title: "Mobile App & Web Development",
    description:
      "We create captivating visuals and functional mobile and web applications to enhance your online presence. Our designs feature intuitive interfaces and stunning graphics, ensuring a memorable experience that stands out across all platforms.",
  },
  {
    title: "Video Editing",
    description:
      "Producing engaging video content that tells your story effectively. We combine compelling visuals, clear messaging, and creative storytelling to captivate your audience and leave a lasting impression.",
  },
  {
    title: "3D Design",
    description: `Creating stunning three-dimensional visuals to elevate your projects. We bring depth,
realism, and creativity to your ideas, transforming them into immersive experiences that
captivate and inspire.`,
  },
];

const HeroLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Home" className="relative overflow-hidden py-32">
      <div className="relative z-10 container">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center"
          initial="hidden"
          animate="show"
          variants={zoomInAnimation}
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <motion.div
              className="rounded bg-primary shadow-sm backdrop-blur-sm"
              variants={zoomUpAnimation}
            >
              <img src="/logo.png" alt="logo" className="h-20" />
            </motion.div>

            <motion.div variants={staggerUpAnimation}>
              <motion.h1
                className="mb-6 text-2xl font-bold text-primary tracking-tight text-pretty lg:text-5xl"
                variants={staggerUpAnimation}
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {heroContent[currentIndex].title}
              </motion.h1>
              <motion.p
                className="mx-auto max-w-3xl text-muted-foreground lg:text-xl"
                variants={staggerUpAnimation}
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {heroContent[currentIndex].description}
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-6 flex justify-center gap-3"
              variants={staggerUpAnimation}
            >
              <Button className="shadow-sm transition-shadow hover:shadow">
                Get Started
              </Button>
              <Button variant="outline" className="group">
                Learn more{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroLayout };
