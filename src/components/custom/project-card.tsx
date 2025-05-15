import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Eye, Link } from "lucide-react";
import {
  zoomInAnimation,
  staggerUpAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";

export type ProjectType = "web" | "app" | "mobile" | "other";

export interface Project {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  type: ProjectType;
  viewUrl?: string;
  detailsUrl?: string;
}

export interface ProjectsProps {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  projects: Project[];
  projectsPerPage?: number;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const projects: Project[] = [
  // Web Projects
  {
    id: "web-1",
    title: "Nawla Trading PLC",
    summary:
      "his Nawla Trading website showcases products and services with a clean, responsive design.",
    label: "Business",
    author: "Web Team",
    published: "Jan 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/newla.jpg",
    type: "web",
    viewUrl: "https://example.com/view/nawla",
    detailsUrl: "https://www.ikimtechco.com/img/projects/Nawla.jpg",
  },
  {
    id: "web-2",
    title: "Gojo Guest House",
    summary:
      "This guesthouse website highlights services, room options, and amenities.",
    label: "Hospitality",
    author: "Web Team",
    published: "Feb 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/gojo.jpg",
    type: "web",
    viewUrl: "https://example.com/view/gojo",
    detailsUrl: "https://example.com/details/gojo",
  },
  {
    id: "web-3",
    title: "Brand Clothing",
    summary: "Brand Clothing brings you timeless fashion with a modern touch.",
    label: "E-commerce",
    author: "Web Team",
    published: "Mar 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/Brand.png",
    type: "web",
    viewUrl: "https://example.com/view/brand-clothing",
    detailsUrl: "https://example.com/details/brand-clothing",
  },
  {
    id: "web-4",
    title: "Heiver Tech",
    summary:
      "Provides various technology services and is globally recognized for its outstanding innovations, cutting-edge solutions, and commitment to excellence in the tech industry.",
    label: "Blog",
    author: "Web Team",
    published: "Apr 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/hiever.jpg",
    type: "web",
    viewUrl: "https://example.com/view/techblog",
    detailsUrl: "https://example.com/details/techblog",
  },

  // Mobile Projects
  {
    id: "mobile-1",
    title: "ነጋሪት Marketing Agency",
    summary:
      "Offers a wide range of digital services, striving to modernize the world by providing innovative and effective marketing solutions.",
    label: "Fitness",
    author: "Mobile Team",
    published: "Jan 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/negarit.jpg",
    type: "mobile",
    viewUrl: "https://example.com/view/fittrack",
    detailsUrl: "https://example.com/details/fittrack",
  },
  {
    id: "mobile-2",
    title: "Adape Leather Design",
    summary:
      "Specializes in crafting a variety of high-quality leather products, delighting clients with beautiful and expertly handcrafted designs.",
    label: "Food & Delivery",
    author: "Mobile Team",
    published: "Feb 2024",
    url: "https://shadcnblocks.com",
    image: "/projects/adape.jpg",
    type: "mobile",
    viewUrl: "https://example.com/view/quickdelivery",
    detailsUrl: "https://example.com/details/quickdelivery",
  },
];

export const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={zoomInAnimation}
      custom={index}
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Card className="flex flex-col overflow-hidden">
          <motion.div
            className="aspect-[16/9] w-full overflow-hidden"
            variants={zoomUpAnimation}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <CardHeader>
            <motion.div
              className="flex justify-between items-center mb-2"
              variants={staggerUpAnimation}
            >
              <Badge variant="secondary">{project.label}</Badge>
              <Badge variant="outline">{project.type}</Badge>
            </motion.div>
            <motion.h3
              className="text-lg font-semibold md:text-xl"
              variants={staggerUpAnimation}
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
          </CardHeader>

          <CardContent className="flex-grow">
            <motion.p
              className="text-muted-foreground"
              variants={staggerUpAnimation}
            >
              {project.summary}
            </motion.p>
          </CardContent>

          <CardFooter className="flex justify-between gap-4 pt-4 border-t">
            <motion.div
              variants={staggerUpAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" className="flex-1" asChild>
                <a
                  href={project.viewUrl || project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Eye className="mr-2 size-4" /> View
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={staggerUpAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="flex-1" asChild>
                <a
                  href={project.detailsUrl || project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Link className="mr-2 size-4" /> Details
                </a>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};
