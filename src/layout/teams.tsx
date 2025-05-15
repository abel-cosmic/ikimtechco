"use client";

import TeamsCard, { SocialLink } from "@/components/custom/team-card";
import { staggerUpAnimation, zoomInAnimation } from "@/utils/animations/motion";
import { motion } from "motion/react";

type MemberType = {
  index: number;
  name: string;
  role: string;
  avatar: string;
  link: string;
  socials: SocialLink[];
};
const members: MemberType[] = [
  {
    name: "Mikiyas Taye",
    role: "CEO & Website Developer",
    avatar: "/teams/miki.jpg",
    link: "#",
    socials: [
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "facebook", url: "#" },
    ],
    index: 0,
  },
  {
    name: "Amen Dereje",
    role: "Website Developer",
    avatar: "/teams/aman2.jpg",
    link: "#",
    socials: [
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
    ],
    index: 1,
  },
  {
    name: "Betselot Bezuayehu",
    role: "Software Developer",
    avatar: "/teams/betselot.jpg",
    link: "#",
    socials: [
      { platform: "instagram", url: "#" },
      { platform: "facebook", url: "#" },
    ],
    index: 2,
  },
  {
    name: "Jecoliah Menberu",
    role: "Sales Agent",
    avatar: "/teams/jacoliah.jpg",
    link: "#",
    socials: [
      { platform: "twitter", url: "#" },
      { platform: "facebook", url: "#" },
    ],
    index: 3,
  },
  {
    name: "Bisrat Kifle",
    role: "Graphics Designer and Video Editor",
    avatar: "/teams/bisrat.jpg",
    link: "#",
    socials: [{ platform: "instagram", url: "#" }],
    index: 4,
  },
  {
    name: "Tesfahun Gibitan",
    role: "3D and VFX Artist",
    avatar: "/teams/tesfahun.jpg",
    link: "#",
    socials: [
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "facebook", url: "#" },
    ],
    index: 5,
  },
  {
    name: "Mikyas Seffi",
    role: "Marketing Consultant",
    avatar: "/teams/mikiyas.jpg",
    link: "#",
    socials: [
      { platform: "instagram", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "facebook", url: "#" },
    ],
    index: 6,
  },
];

export default function TeamSection() {
  return (
    <motion.section
      className="py-12 sm:py-16 md:py-24 lg:py-32"
      initial="hidden"
      id="Team"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={zoomInAnimation}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border-t-2 border-zinc-200">
          <motion.span
            className="text-caption -ml-4 -mt-3.5 block w-max bg-zinc-50 px-4 text-base dark:bg-gray-950 sm:-ml-6 sm:px-6 sm:text-lg"
            variants={staggerUpAnimation}
          >
            Team
          </motion.span>

          <motion.div
            className="mt-8 gap-6 sm:grid sm:grid-cols-2 sm:mt-12 md:mt-16 lg:mt-24"
            variants={zoomInAnimation}
          >
            <motion.div className="sm:w-full" variants={staggerUpAnimation}>
              <motion.h2
                className="text-2xl font-bold sm:text-3xl md:text-4xl"
                variants={staggerUpAnimation}
                whileHover={{ x: 5 }}
              >
                Our dream team
              </motion.h2>
            </motion.div>

            <motion.div className="mt-4 sm:mt-0" variants={staggerUpAnimation}>
              <motion.p className="text-sm sm:text-base" variants={staggerUpAnimation}>
                During the working process, we perform regular fitting with the
                client because he is the only person who can feel whether a new
                suit fits or not.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div className="mt-8 md:mt-16 lg:mt-24" variants={zoomInAnimation}>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
              variants={zoomInAnimation}
            >
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={staggerUpAnimation}
                  custom={index}
                >
                  <TeamsCard {...member} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </motion.section>
  );
}