import Background from "@/components/custom/background";
import Navbar from "@/components/custom/nav";
import AboutSection from "@/layout/about";
import { HeroLayout } from "@/layout/hero";
import { ProjectsLayout } from "@/layout/projects";
import Services from "@/layout/services";
import TeamSection from "@/layout/teams";

export default function Home() {
  return (
    <div className="relative py-32">
      <Background />
      <Navbar />
      <HeroLayout />
      <Services />
      <ProjectsLayout />
      <AboutSection />
      <TeamSection />
    </div>
  );
}
