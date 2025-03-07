
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, PhoneCall, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-edu-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-edu-primary to-edu-secondary">
                EduLearnIverse
              </span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Transforming education through evidence-based learning technology and pedagogical innovation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-4 w-4" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-4 w-4" />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />} />
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-4 w-4" />} />
              <SocialLink href="https://github.com" icon={<Github className="h-4 w-4" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <FooterLink to="/courses" label="Courses" />
              <FooterLink to="/features" label="Features" />
              <FooterLink to="/pricing" label="Pricing" />
              <FooterLink to="/testimonials" label="Testimonials" />
              <FooterLink to="/faq" label="FAQ" />
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/documentation" label="Documentation" />
              <FooterLink to="/tutorials" label="Tutorials" />
              <FooterLink to="/webinars" label="Webinars" />
              <FooterLink to="/research" label="Research" />
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-edu-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  123 Education Ave, Learning City, 10001
                </span>
              </li>
              <li>
                <a href="mailto:info@edulearniverse.com" className="flex items-center text-foreground/70 hover:text-edu-primary transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-edu-primary flex-shrink-0" />
                  <span>info@edulearniverse.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="flex items-center text-foreground/70 hover:text-edu-primary transition-colors">
                  <PhoneCall className="h-5 w-5 mr-3 text-edu-primary flex-shrink-0" />
                  <span>+1 (123) 456-7890</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} EduLearnIverse. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <FooterLink to="/privacy" label="Privacy Policy" />
            <FooterLink to="/terms" label="Terms of Service" />
            <FooterLink to="/cookies" label="Cookie Policy" />
            <FooterLink to="/accessibility" label="Accessibility" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-foreground/70 hover:text-edu-primary transition-colors"
    >
      {label}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:bg-edu-primary hover:text-white transition-colors"
  >
    {icon}
  </a>
);

export default Footer;
