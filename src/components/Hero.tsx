import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-edu-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-edu-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground/80 mb-6 animate-fadeIn">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Next Generation Learning Platform
          </div>
          
          <h1 className="font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-edu-dark via-edu-primary to-edu-secondary animate-slideUp">Transform Learning Experiences with PRADANA KONTOL dan aji cokil</h1>
          
          <p className="text-xl text-foreground/80 mb-10 max-w-3xl animate-slideUp" style={{
          animationDelay: '0.1s'
        }}>
            A research-based learning management system designed to maximize engagement, retention, and mastery through adaptive learning paths, comprehensive analytics, and collaborative learning environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto animate-slideUp" style={{
          animationDelay: '0.2s'
        }}>
            <Button asChild className="btn-edu-primary w-full sm:w-auto">
              <Link to="/signup" className="flex items-center justify-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-edu-secondary w-full sm:w-auto">
              <Link to="/demo" className="flex items-center justify-center gap-2">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp" style={{
        animationDelay: '0.3s'
      }}>
          <StatCard icon={<BookOpen className="h-8 w-8 text-edu-primary" />} title="120+" description="Research-based learning modules designed for engagement and retention" />
          <StatCard icon={<Brain className="h-8 w-8 text-edu-primary" />} title="9 Theories" description="Pedagogical frameworks integrated to support different learning styles" />
          <StatCard icon={<Users className="h-8 w-8 text-edu-primary" />} title="24/7" description="Support for collaborative learning environments and community building" />
        </div>
      </div>
    </section>;
};
const StatCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => <div className="edu-card flex flex-col items-center text-center p-6">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-foreground/80">{description}</p>
  </div>;
export default Hero;