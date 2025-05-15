"use client";

import {
  staggerUpAnimation,
  zoomInAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export type SocialLink = {
  platform: "instagram" | "twitter" | "facebook";
  url: string;
};

const TeamsCard = ({
  index,
  name,
  role,
  avatar,
  link,
  socials,
}: {
  index: number;
  name: string;
  role: string;
  avatar: string;
  link: string;
  socials: SocialLink[];
}) => {
  // Map platform names to their respective icons
  const socialIcons = {
    instagram: Instagram,
    twitter: Twitter,
    facebook: Facebook,
  };

  return (
    <motion.div
      key={index}
      className="group overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={zoomInAnimation}
      custom={index}
    >
      <motion.div
        variants={zoomUpAnimation}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          className="h-64 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[18rem] sm:group-hover:h-[22.5rem] group-hover:rounded-xl sm:h-72"
          src={avatar}
          alt={name}
          width="826"
          height="1239"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="px-2 pt-4 pb-2 sm:pb-0 sm:pt-4"
        variants={staggerUpAnimation}
      >
        <motion.div
          className="flex justify-between"
          variants={staggerUpAnimation}
        >
          <motion.h3
            className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider sm:text-lg"
            whileHover={{ x: 5 }}
          >
            {name}
          </motion.h3>
          <motion.span className="text-xs sm:text-sm" variants={staggerUpAnimation}>
            _0{index + 1}
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-1 flex items-center justify-between"
          variants={staggerUpAnimation}
        >
          <motion.span
            className="text-muted-foreground inline-block translate-y-6 text-xs opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:text-sm"
            variants={staggerUpAnimation}
          >
            {role}
          </motion.span>

          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            variants={zoomInAnimation}
          >
            {socials.map((social, socialIndex) => {
              const Icon = socialIcons[social.platform];
              return (
                <motion.div
                  key={socialIndex}
                  variants={staggerUpAnimation}
                  custom={socialIndex}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary inline-block transition-colors duration-300"
                    aria-label={`${social.platform} profile`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamsCard;