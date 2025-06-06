
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Define project type
type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  year: string;
  type: string;
};

// Create projects data
const projects: Project[] = [
  {
    id: "1",
    title: "Supply Chain Blockchain App 🧾",
    description: "A blockchain-based supply chain management app with user authentication and real-time data tracking.",
    imageSrc:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveDemoUrl: "https://loc-safe.com",
    githubUrl: "https://github.com/WuorBhang/Loc-web-app.git",
    year: "2024",
    type: "Web App"
  },
  {
    id: "2",
    title: "MedCare - Your Health Companion 🏥",
    description: "Hospital management system for patient records, appointments, and billing with multiple user roles.",
    imageSrc: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Firebase", "Redux", "Tailwind CSS", "TypeScript"],
    liveDemoUrl: "https://plphospitaldb.netlify.app",
    githubUrl: "https://github.com/WuorBhang/hospital_project.git",
    year: "2023",
    type: "Web App"
  },
  {
    id: "3",
    title: "Educonnect - Tutoring Platform 🌍",
    description: "Educonnect is a platform designed to provide high-quality tutoring services tailored to the needs of African diaspora families. Backed by prestigious institutions like MIT, Educonnect connects students with Nigeria's top educators to deliver culturally aware and academically effective learning experiences.",
    imageSrc: "/edu.png",
    tags: ["React", "Supabase", "Material UI", "AI & ML", "PostgreSQL"],
    liveDemoUrl: "https://educonnect-sepia.vercel.app",
    githubUrl: "https://github.com/WuorBhang/EDUconnect.git",
    year: "2023",
    type: "Website"
  },
  {
    id: "4",
    title: "Kuza Kids",
    description: "Kuzakids organization is dedicated to supporting kids and youths in both refugee and host communities through sports and arts activities. Join us as we make a positive impact through the transformative power of sports and arts.",
    imageSrc: "/kuza.png",
    tags: ["React", "Supabase", "Material UI", "AI & ML", "PostgreSQL"],
    liveDemoUrl: "https://kuzakids.vercel.app",
    githubUrl: "https://github.com/WuorBhang/kuzakids.git",
    year: "2023",
    type: "Website"
  },
  {
    id: "5",
    title: "GreenTech Institute",
    description: "GreenTech Institute offers cutting-edge technology education with a focus on sustainable innovation and industry-ready skills. Join us to become part of the next generation of tech pioneers.",
    imageSrc: "/ssdtech.png",
    tags: ["React", "Supabase", "Material UI", "AI & ML", "PostgreSQL"],
    liveDemoUrl: "https://ssdtechacademy.vercel.app/",
    githubUrl: "https://github.com/WuorBhang/EDUconnect.git",
    year: "2024",
    type: "Website"
  }
];

const ProjectsSection = () => {
  // Define filter states
  const [technologyFilter, setTechnologyFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  // Get unique technologies, types and years
  const technologies = Array.from(new Set(projects.flatMap(project => project.tags)));
  const types = Array.from(new Set(projects.map(project => project.type)));
  const years = Array.from(new Set(projects.map(project => project.year)));

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesTechnology = technologyFilter === "all" || project.tags.includes(technologyFilter);
    const matchesType = typeFilter === "all" || project.type === typeFilter;
    const matchesYear = yearFilter === "all" || project.year === yearFilter;

    return matchesTechnology && matchesType && matchesYear;
  });

  // Reset all filters
  const resetFilters = () => {
    setTechnologyFilter("all");
    setTypeFilter("all");
    setYearFilter("all");
  };

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Featured Projects😁"
            subtitle="Check out some of my recent work and the problems I've solved. 🚀"
          />
        </ScrollReveal>

        {/* Filter controls */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-3">
              {/* Technology filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Technology: {technologyFilter === "all" ? "All" : technologyFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  <DropdownMenuLabel>Filter by Technology</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={technologyFilter} onValueChange={setTechnologyFilter}>
                    <DropdownMenuRadioItem value="all">All Technologies</DropdownMenuRadioItem>
                    {technologies.map(tech => (
                      <DropdownMenuRadioItem key={tech} value={tech}>{tech}</DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Project type filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Type: {typeFilter === "all" ? "All" : typeFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={typeFilter} onValueChange={setTypeFilter}>
                    <DropdownMenuRadioItem value="all">All Types</DropdownMenuRadioItem>
                    {types.map(type => (
                      <DropdownMenuRadioItem key={type} value={type}>{type}</DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Year filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Year: {yearFilter === "all" ? "All" : yearFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  <DropdownMenuLabel>Filter by Year</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={yearFilter} onValueChange={setYearFilter}>
                    <DropdownMenuRadioItem value="all">All Years</DropdownMenuRadioItem>
                    {years.map(year => (
                      <DropdownMenuRadioItem key={year} value={year}>{year}</DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Reset filters button */}
            {(technologyFilter !== "all" || typeFilter !== "all" || yearFilter !== "all") && (
              <Button variant="secondary" onClick={resetFilters}>
                Reset Filters
              </Button>
            )}
          </div>
        </ScrollReveal>
        
        {/* Projects display */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-20">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  tags={project.tags}
                  liveDemoUrl={project.liveDemoUrl}
                  githubUrl={project.githubUrl}
                  reversed={index % 2 !== 0}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects match your current filters.</p>
            <Button variant="default" onClick={resetFilters} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
        
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="https://github.com/lewiii254?tab=repositories" target="_blank" rel="noopener noreferrer">
                View All Projects🧾 <span className="ml-1">🔍</span>
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
