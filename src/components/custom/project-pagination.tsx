"use client";

import { Button } from "@/components/ui/button";
import { staggerUpAnimation, zoomUpAnimation } from "@/utils/animations/motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ProjectsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProjectsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectsPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <motion.div
      className="flex justify-center items-center gap-2 mt-12"
      initial="hidden"
      animate="show"
      variants={staggerUpAnimation}
    >
      <motion.div
        variants={zoomUpAnimation}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeft className="size-4" />
          <span className="sr-only">Previous page</span>
        </Button>
      </motion.div>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.div
          key={page}
          variants={zoomUpAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Button
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className="relative"
          >
            {page}
            {currentPage === page && (
              <motion.span
                layoutId="activePage"
                className="absolute inset-0 bg-primary rounded-md"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Button>
        </motion.div>
      ))}

      <motion.div
        variants={zoomUpAnimation}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowRight className="size-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </motion.div>
    </motion.div>
  );
};
