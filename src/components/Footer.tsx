
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/WuorBhang' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com/in/wuorbhang' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/devopsbhang' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:uhuribhang211@gmail.com' },
  ];

  return (
    <footer className="bg-background border-t py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading font-bold text-xl">
              <span className="text-gradient">Wuor Bhang</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Creating digital experiences that inspire. <br />
              Passionate about clean code, user-focused design, and impact-driven tech <br />
              Built by Wuor Bhang | Software Engineer & Startup Enthusiast 🚀
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Wuor Bhang✨. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
