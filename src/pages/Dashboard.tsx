
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, CheckCircle, Award, Bell, Settings, Search } from 'lucide-react';

// Sample course data
const inProgressCourses = [
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
    progress: 68,
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
    progress: 35,
    tags: ['Data Analysis', 'Educational Research']
  }
];

// Sample recommended courses
const recommendedCourses = [
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

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 animate-fadeIn">Welcome back, Alex</h1>
              <p className="text-foreground/70 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                Continue your learning journey and track your progress.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <Button variant="outline" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </div>
          </div>
          
          {/* Learning Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard 
              icon={<Clock className="h-6 w-6 text-edu-primary" />}
              title="16.5 Hours"
              subtitle="Total Learning Time"
              trend="+2.5 hrs this week"
              trendUp={true}
            />
            <StatCard 
              icon={<BookOpen className="h-6 w-6 text-edu-primary" />}
              title="42 Lessons"
              subtitle="Completed"
              trend="+8 this week"
              trendUp={true}
            />
            <StatCard 
              icon={<CheckCircle className="h-6 w-6 text-edu-primary" />}
              title="2 Courses"
              subtitle="In Progress"
              trend="56% average completion"
              trendUp={null}
            />
            <StatCard 
              icon={<Award className="h-6 w-6 text-edu-primary" />}
              title="12 Achievements"
              subtitle="Earned"
              trend="+3 this month"
              trendUp={true}
            />
          </div>
          
          {/* In Progress Courses */}
          <section className="mb-16 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">In Progress</h2>
              <Button variant="ghost" className="text-edu-primary">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {inProgressCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
          
          {/* Search & Explore */}
          <section className="py-10 px-8 rounded-2xl border border-border/50 bg-muted/30 mb-16 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">Discover New Learning Opportunities</h2>
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses, topics, or instructors..."
                  className="w-full py-3 pl-10 pr-4 bg-white border border-border/50 rounded-full focus-ring"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <TopicButton label="Educational Psychology" />
                <TopicButton label="Instructional Design" />
                <TopicButton label="Assessment Methods" />
                <TopicButton label="Learning Analytics" />
                <TopicButton label="Educational Technology" />
                <TopicButton label="Inclusive Learning" />
                <TopicButton label="Curriculum Development" />
              </div>
            </div>
          </section>
          
          {/* Recommended Courses */}
          <section className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recommended for You</h2>
              <Button variant="ghost" className="text-edu-primary">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recommendedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const StatCard = ({ 
  icon, 
  title, 
  subtitle,
  trend,
  trendUp
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string;
  trend: string;
  trendUp: boolean | null;
}) => (
  <div className="edu-card">
    <div className="flex items-start justify-between mb-2">
      <div className="rounded-full bg-edu-primary/10 p-2.5">
        {icon}
      </div>
      {trendUp !== null && (
        <span className={`text-xs font-medium ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
          {trendUp ? '↑' : '↓'} {trend}
        </span>
      )}
      {trendUp === null && (
        <span className="text-xs font-medium text-foreground/70">
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-xl font-bold mb-1">{title}</h3>
    <p className="text-foreground/70 text-sm">{subtitle}</p>
  </div>
);

const TopicButton = ({ label }: { label: string }) => (
  <button className="px-4 py-2 rounded-full bg-white border border-border/50 text-sm font-medium hover:bg-edu-primary hover:text-white hover:border-transparent transition-all duration-200 focus-ring">
    {label}
  </button>
);

export default Dashboard;
