import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonSocialIconDemo() {
  const socials = [
    {
      href: "mailto:akrupitsky@ufl.edu",
      label: "Email",
      icon: Mail,
    },
    {
      href: "https://www.linkedin.com/in/alicekrupitsky",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/alicekrupitsky",
      label: "GitHub",
      icon: Github,
    },
  ];

  return (
    <div style={{ position: 'relative', width: '272px', height: '64px', margin: '0 auto' }}>
      {socials.map(({ href, label, icon: Icon }, i) => {
        let positionStyles: React.CSSProperties = {};
        if (i === 0) positionStyles = { left: '0', top: '0' };
        if (i === 1) positionStyles = { left: '50%', top: '0', transform: 'translateX(-50%)' };
        if (i === 2) positionStyles = { right: '0', top: '0' };

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-[16px] border-[4px] border-[#1a3d2f] bg-[#e6fff2] text-[#1a3d2f] shadow-[0_5px_0_#1a3d2f] hover:-translate-y-1 hover:shadow-[0_7px_0_#1a3d2f] hover:bg-white transition-all cursor-pointer"
            style={{ 
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '4px solid #1a3d2f', 
              textDecoration: 'none',
              ...positionStyles 
            }}
          >
            <Icon className="h-8 w-8" strokeWidth={2.5} />
          </a>
        );
      })}
    </div>
  );
}