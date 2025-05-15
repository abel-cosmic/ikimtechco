"use client";
import { staggerUpAnimation } from "@/utils/animations/motion";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import ProjectLogo from "./logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems: {
    name: string;
    href?: string;
    subMenus?: {
      name: string;
      href: string;
    }[];
  }[] = [
    {
      name: "Home",
      href: "#Home",
    },
    {
      name: "Service",
      href: "#Service",
    },
    {
      name: "Project",
      href: "#Project",
    },
    {
      name: "Team",
      href: "#Team",
    },
    {
      name: "About",
      href: "#About",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll position tracking
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = document.querySelectorAll(
        "section[id]"
      ) as NodeListOf<HTMLElement>;
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-10 right-0 left-0  px-4 w-3/4 mx-auto self-center z-90  rounded transition-all 
        bg-white/50 backdrop-blur-sm border border-zinc-200 shadow-xs shadow-primary/20
      `}
    >
      <div className={`mx-auto flex py-5 w-full items-center justify-between`}>
        <Link href="/" className="flex items-center text-xl font-bold">
          <ProjectLogo />
        </Link>
        {/**@ts-ignore */}
        <div className="flex flex-row gap-4">
          <Menubar className="w-fit  max-lg:hidden ">
            {navItems.map((item) => (
              <MenubarMenu key={item.name}>
                {/**@ts-ignore */}
                <MenubarTrigger hasChildren={item.subMenus ? true : false}>
                  {item.subMenus ? (
                    item.name
                  ) : (
                    <motion.div variants={staggerUpAnimation}>
                      <Link
                        href={item.href || ""}
                        onClick={(e) => handleNavClick(e, item.href!)}
                        className={
                          activeSection === item.name
                            ? "text-primary font-bold"
                            : "font-medium"
                        }
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </MenubarTrigger>
                {item.subMenus && (
                  <>
                    {/**@ts-ignore */}
                    <MenubarContent className={`bg-background`}>
                      {item.subMenus.map((subMenu) => (
                        <>
                          {/**@ts-ignore */}
                          <MenubarItem key={subMenu.name}>
                            <Link
                              href={subMenu.href}
                              onClick={(e) => handleNavClick(e, item.href!)}
                              className={
                                activeSection === item.name
                                  ? "text-primary font-bold"
                                  : ""
                              }
                            >
                              {subMenu.name}
                            </Link>
                          </MenubarItem>
                        </>
                      ))}
                    </MenubarContent>
                  </>
                )}
              </MenubarMenu>
            ))}
          </Menubar>

          <Button className="max-md:hidden">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
            >
              <Menu className="h-5 w-5 md:h-10 md:w-10 text-muted-foreground" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          {/**@ts-ignore */}
          <SheetContent side="right" className="w-[300px] sm:w-[400px] z-100">
            <nav className="grid gap-6 p-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <ProjectLogo />
              </Link>
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href || ""}
                    onClick={(e) => handleNavClick(e, item.href!)}
                    className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${
                      activeSection === item.name
                        ? "text-primary font-bold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.subMenus && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.subMenus.map((subMenu) => (
                        <Link
                          key={subMenu.name}
                          href={subMenu.href}
                          onClick={(e) => handleNavClick(e, item.href!)}
                          className={`text-sm font-medium text-muted-foreground hover:text-foreground transition-colors block ${
                            activeSection === item.name
                              ? "text-primary font-bold"
                              : ""
                          }`}
                        >
                          {subMenu.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-4 mt-4 md:hidden">
                <Button variant="default" className="w-full">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
