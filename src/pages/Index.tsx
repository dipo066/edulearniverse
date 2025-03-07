
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { ArrowRight, GraduationCap, Book, Lightbulb, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample course data
const featuredCourses = [
  {
    id: '1',
    title: 'Principles of Effective Learning Design',
    description: 'Explore the cognitive science behind learning design and apply evidence-based methods to create engaging educational experiences.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    duration: '6 weeks',
    lessonCount: 24,
    rating: 4.9,
    students: 2430,
    tags: ['Learning Design', 'Cognitive Science']
  },
  {
    id: '2',
    title: 'Data-Driven Educational Decision Making',
    description: 'Learn how to collect, analyze, and interpret educational data to make informed decisions that improve learning outcomes.',
    instructor: 'Prof. Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '8 weeks',
    lessonCount: 32,
    rating: 4.7,
    students: 1876,
    tags: ['Data Analysis', 'Educational Research']
  },
  {
    id: '3',
    title: 'Adaptive Learning Technologies',
    description: 'Discover how AI and machine learning are revolutionizing education by creating personalized learning experiences for every student.',
    instructor: 'Dr. Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    duration: '10 weeks',
    lessonCount: 40,
    rating: 4.8,
    students: 3254,
    tags: ['EdTech', 'Artificial Intelligence']
  },
  {
    id: '4',
    title: 'Collaborative Learning Environments',
    description: 'Learn strategies for designing and facilitating effective collaborative learning experiences in both online and in-person settings.',
    instructor: 'Prof. David Thompson',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '6 weeks',
    lessonCount: 24,
    rating: 4.6,
    students: 1958,
    tags: ['Collaboration', 'Community Building']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="font-bold mb-3">Featured Courses</h2>
                <p className="text-foreground/80 max-w-2xl">
                  Discover our most popular research-backed courses designed to enhance your educational practices.
                </p>
              </div>
              <Button asChild variant="outline" className="btn-edu-secondary">
                <Link to="/courses" className="flex items-center gap-2">
                  View All Courses <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        <Features />
        
        {/* Pedagogical Approach */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16 section-animate">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background text-sm font-medium text-foreground/80 mb-6">
                Evidence-Based Learning
              </div>
              <h2 className="font-bold mb-4">Our Pedagogical Framework</h2>
              <p className="text-xl text-foreground/80">
                Our platform is built on well-established learning theories that have been proven to enhance educational outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <FrameworkCard 
                icon={<GraduationCap />}
                title="Constructivism"
                description="Learners actively construct knowledge through personal experiences and reflection on those experiences."
                points={[
                  "Project-based learning activities",
                  "Reflective journaling prompts",
                  "Problem-solving challenges"
                ]}
                delay={0}
              />
              <FrameworkCard 
                icon={<Lightbulb />}
                title="Connectivism"
                description="Knowledge is distributed across networks and learning is the process of connecting and traversing those networks."
                points={[
                  "Networked learning communities",
                  "Resource curation and sharing",
                  "Cross-disciplinary connections"
                ]}
                delay={0.1}
              />
              <FrameworkCard 
                icon={<Book />}
                title="Self-Regulated Learning"
                description="Learners actively monitor and control their cognition, motivation, and behavior to achieve learning goals."
                points={[
                  "Goal-setting frameworks",
                  "Progress monitoring tools",
                  "Metacognitive strategies"
                ]}
                delay={0.2}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-edu-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-bold mb-6 text-white">Ready to Transform Learning Experiences?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of educators and institutions who are using our platform to create more effective, engaging, and equitable learning environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-edu-primary hover:bg-white/90 transition-colors">
                  <Link to="/signup">Get Started for Free</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/demo">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const FrameworkCard = ({ 
  icon, 
  title, 
  description,
  points,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  points: string[];
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
    <p className="text-foreground/80 mb-4">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-4 w-4 text-edu-primary mr-2 mt-1 flex-shrink-0" />
          <span className="text-foreground/80">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;
