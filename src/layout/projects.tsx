"use client";

import { ProjectCard, projects } from "@/components/custom/project-card";
import { ProjectsPagination } from "@/components/custom/project-pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  staggerUpAnimation,
  zoomInAnimation,
  zoomUpAnimation,
} from "@/utils/animations/motion";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const ProjectsLayout = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / 3);
  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      className="py-32"
      id="Project"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={zoomInAnimation}
    >
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <motion.div className="text-center" variants={staggerUpAnimation}>
          <motion.div variants={staggerUpAnimation}>
            <Badge variant="secondary" className="mb-6">
              Latest Updates
            </Badge>
          </motion.div>

          <motion.h2
            className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl"
            variants={staggerUpAnimation}
          >
            Project Portfolio
          </motion.h2>

          <motion.p
            className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg"
            variants={staggerUpAnimation}
          >
            Explore our diverse collection of projects
          </motion.p>

          <motion.div variants={staggerUpAnimation}>
            <Button variant="link" className="w-full sm:w-auto" asChild>
              <a href={"#"} target="_blank" rel="noreferrer">
                View all projects
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full"
          id="projects-section"
          variants={zoomInAnimation}
        >
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <motion.div
              className="flex justify-center mb-8"
              variants={staggerUpAnimation}
            >
              <motion.div variants={zoomUpAnimation}>
                <TabsList>
                  {["all", "web", "app", "mobile", "other"].map((tab) => (
                    <motion.div
                      key={tab}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TabsTrigger value={tab} className="capitalize">
                        {tab === "all" ? "All Projects" : tab}
                      </TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>
              </motion.div>
            </motion.div>

            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                key={activeTab}
                initial="hidden"
                animate="show"
                variants={zoomInAnimation}
              >
                {currentProjects.length > 0 ? (
                  currentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={staggerUpAnimation}
                      custom={index}
                    >
                      <ProjectCard project={project} index={index} />
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    className="col-span-full text-center py-12"
                    variants={staggerUpAnimation}
                  >
                    <p className="text-muted-foreground">
                      No projects found in this category.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <ProjectsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
};
