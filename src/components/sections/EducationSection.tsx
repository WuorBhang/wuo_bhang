
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CertificateCard from "@/components/CertificateCard";
import { Award, Clipboard, GraduationCap, Medal } from "lucide-react";

const EducationSection = () => {
  const certificates = [
    { 
      title: "PLP Certificate", 
      issuer: "Power Learn Project", 
      date: "2024", 
      icon: <Clipboard />,
      imageUrl: "/PLP.png" 
    },
    { 
      title: "Software Engineering Backend", 
      issuer: "ALX Africa", 
      date: "2024", 
      icon: <Award />,
      imageUrl: "/ALX.png" 
    },
    { 
      title: "MIT Foundation Program", 
      issuer: "Massachusetts Institute of Technology", 
      date: "2025", 
      icon: <Medal />,
      imageUrl: "/MIT.png" 
    },
    { 
      title: "Python for Data Science and AI", 
      issuer: "IBM", 
      date: "2023", 
      icon: <Clipboard />,
      imageUrl: "/IBM_PYTHON.png" 
    },
    { 
      title: "Application Security and DevOps Engineering", 
      issuer: "IBM", 
      date: "2023", 
      icon: <Award />,
      imageUrl: "/devOps.png" 
    },
    { 
      title: "Responsive Web Design", 
      issuer: "freeCodeCamp", 
      date: "2023", 
      icon: <Medal />,
      imageUrl: "/responsive.png"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Education & Certifications"
            subtitle="My academic journey and professional qualifications that validate my expertise. 🎓"
          />
        </ScrollReveal>
        
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Education🧾
            </h3>
          </ScrollReveal>
          
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-bold">Bachelor of Science in Computer Science💻</h4>
                    <p className="text-lg text-primary">University of the People</p>
                    <p className="mt-2 text-muted-foreground">Currently pursuing a Bachelor's degree in Computer Science. As a second-year student, I'm building a strong foundation in algorithms, data structures, software engineering, and computer networks.</p>
                  </div>
                  <div className="text-right md:whitespace-nowrap">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2024 - 2028</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-bold">High School🏫</h4>
                    <p className="text-lg text-primary">Vision Secondary School</p>
                    <p className="mt-2 text-muted-foreground">Focused on Mathematics, Physics, and Computer Studies. Participated in national coding competitions.</p>
                  </div>
                  <div className="text-right md:whitespace-nowrap">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2019 - 2020</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-primary" />
              Certifications🧾
            </h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? 'up' : 'down'}>
                <CertificateCard 
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  icon={cert.icon}
                  imageUrl={cert.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
