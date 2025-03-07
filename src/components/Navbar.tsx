
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="EduLearnIverse logo"
          >
            <div className="h-9 w-9 rounded-lg bg-edu-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-edu-primary to-edu-secondary">
              EduLearnIverse
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavItem to="/courses" label="Courses" />
              <NavItem to="/features" label="Features" />
              <NavItem to="/about" label="About" />
              <div className="relative group">
                <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1">
                  <span>Resources</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-border/50 overflow-hidden">
                  <div className="py-1">
                    <DropdownItem to="/blog" label="Blog" />
                    <DropdownItem to="/documentation" label="Documentation" />
                    <DropdownItem to="/tutorials" label="Tutorials" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" className="btn-edu-secondary">
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild className="btn-edu-primary">
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none focus-ring rounded-md p-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="pt-4 pb-3 space-y-3">
            <MobileNavItem to="/courses" label="Courses" onClick={toggleMenu} />
            <MobileNavItem to="/features" label="Features" onClick={toggleMenu} />
            <MobileNavItem to="/about" label="About" onClick={toggleMenu} />
            <MobileNavItem to="/blog" label="Blog" onClick={toggleMenu} />
            <MobileNavItem to="/documentation" label="Documentation" onClick={toggleMenu} />
            <MobileNavItem to="/tutorials" label="Tutorials" onClick={toggleMenu} />
            <div className="pt-4 flex flex-col space-y-3">
              <Button asChild variant="outline" className="w-full btn-edu-secondary">
                <Link to="/login" onClick={toggleMenu}>Log in</Link>
              </Button>
              <Button asChild className="w-full btn-edu-primary">
                <Link to="/signup" onClick={toggleMenu}>Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-foreground/80 hover:text-foreground transition-colors focus-ring rounded-md px-2 py-1"
  >
    {label}
  </Link>
);

const DropdownItem = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ 
  to, 
  label, 
  onClick 
}: { 
  to: string; 
  label: string; 
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
