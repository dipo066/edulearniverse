
import React from 'react';
import { Users, BookOpen, Activity, MessageSquare, Brain, LineChart, Shield, Puzzle } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
          <h2 className="font-bold mb-4">Empowered by Educational Science</h2>
          <p className="text-xl text-foreground/80">
            Our platform is built on research-backed principles of learning science, designed to create meaningful and effective educational experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Users />}
            title="User Management"
            description="Role-based authentication system that supports personalized learning paths for each user type."
            delay={0}
          />
          <FeatureCard 
            icon={<BookOpen />}
            title="Learning Content"
            description="Module-based course management with support for multiple content formats and adaptive scaffolding."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Activity />}
            title="Assessment System"
            description="Comprehensive assessment tools aligned with Bloom's Taxonomy supporting formative and summative evaluation."
            delay={0.2}
          />
          <FeatureCard 
            icon={<MessageSquare />}
            title="Collaboration Tools"
            description="Real-time discussion forums, peer reviews, and notifications to foster social learning environments."
            delay={0.3}
          />
          <FeatureCard 
            icon={<Brain />}
            title="Adaptive Learning"
            description="AI-powered content recommendations based on individual learning patterns and progress."
            delay={0.4}
          />
          <FeatureCard 
            icon={<LineChart />}
            title="Learning Analytics"
            description="Comprehensive dashboards tracking engagement, progress, and competency development."
            delay={0.5}
          />
          <FeatureCard 
            icon={<Shield />}
            title="Accessible Design"
            description="Built following Universal Design for Learning principles to support diverse learning needs."
            delay={0.6}
          />
          <FeatureCard 
            icon={<Puzzle />}
            title="Integration Ready"
            description="Open architecture with APIs for seamless integration with existing educational tools."
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <div 
    className="edu-card h-full section-animate" 
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="rounded-full bg-edu-primary/10 p-3 inline-block mb-4">
      <div className="text-edu-primary">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-foreground/80">{description}</p>
  </div>
);

export default Features;
