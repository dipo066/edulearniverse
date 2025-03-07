
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Filter, CheckSquare } from 'lucide-react';

// Sample course data
const allCourses = [
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
  },
  {
    id: '5',
    title: 'Assessment Strategies for Deep Learning',
    description: 'Master the art of designing assessments that measure higher-order thinking skills and promote authentic learning experiences.',
    instructor: 'Dr. Robert Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '6 weeks',
    lessonCount: 24,
    rating: 4.8,
    students: 1246,
    tags: ['Assessment', 'Learning Design']
  },
  {
    id: '6',
    title: 'Universal Design for Learning',
    description: 'Learn how to design educational experiences that are accessible and effective for all learners, regardless of background or ability.',
    instructor: 'Prof. Maria Garcia',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '5 weeks',
    lessonCount: 20,
    rating: 4.9,
    students: 1567,
    tags: ['Accessibility', 'Inclusive Design']
  },
  {
    id: '7',
    title: 'Learning Analytics and Visualization',
    description: 'Develop skills to collect, analyze, and visualize learning data to improve educational outcomes and inform instructional decisions.',
    instructor: 'Dr. Aisha Patel',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '8 weeks',
    lessonCount: 32,
    rating: 4.7,
    students: 1432,
    tags: ['Data Analytics', 'Visualization']
  },
  {
    id: '8',
    title: 'Engagement Strategies for Online Learning',
    description: 'Learn proven techniques to boost engagement, motivation, and retention in virtual learning environments.',
    instructor: 'Prof. James Anderson',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    duration: '4 weeks',
    lessonCount: 16,
    rating: 4.6,
    students: 2145,
    tags: ['Online Learning', 'Engagement']
  }
];

// Categories
const categories = [
  'Learning Design',
  'Educational Technology',
  'Assessment',
  'Data Analytics',
  'Inclusive Learning',
  'Pedagogy',
  'Instructional Design',
  'Educational Psychology'
];

// Durations
const durations = [
  'Under 4 weeks',
  '4-6 weeks',
  '6-8 weeks',
  'Over 8 weeks'
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const toggleDuration = (duration: string) => {
    if (selectedDurations.includes(duration)) {
      setSelectedDurations(selectedDurations.filter(d => d !== duration));
    } else {
      setSelectedDurations([...selectedDurations, duration]);
    }
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDurations([]);
    setSearchTerm('');
  };
  
  // Filter courses based on search term and filters
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                            course.tags.some(tag => selectedCategories.includes(tag));
    
    // Simple duration filter logic - could be more sophisticated
    const matchesDuration = selectedDurations.length === 0 ||
                            (selectedDurations.includes('Under 4 weeks') && course.duration.includes('4')) ||
                            (selectedDurations.includes('4-6 weeks') && 
                              (course.duration.includes('4') || course.duration.includes('5') || course.duration.includes('6'))) ||
                            (selectedDurations.includes('6-8 weeks') && 
                              (course.duration.includes('6') || course.duration.includes('7') || course.duration.includes('8'))) ||
                            (selectedDurations.includes('Over 8 weeks') && parseInt(course.duration) > 8);
    
    return matchesSearch && matchesCategory && matchesDuration;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-12 animate-fadeIn">
            <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Discover research-based courses designed to enhance your educational practice and improve learning outcomes.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foreground/50" />
                </div>
                <Input
                  type="text"
                  placeholder="Search courses, topics, or instructors..."
                  className="pl-10 py-6"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 md:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {/* Filters */}
            <div className={`${showFilters ? 'max-h-[500px] opacity-100 visible mb-8' : 'max-h-0 opacity-0 invisible overflow-hidden'} transition-all duration-300 ease-in-out`}>
              <div className="p-6 bg-muted/30 border border-border/50 rounded-xl">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <h3 className="text-lg font-semibold">Filter Courses</h3>
                  <Button 
                    variant="ghost" 
                    className="text-foreground/70 hover:text-foreground"
                    onClick={clearFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Categories */}
                  <div>
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <FilterCheckbox 
                          key={category}
                          label={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div>
                    <h4 className="font-medium mb-3">Duration</h4>
                    <div className="space-y-2">
                      {durations.map((duration) => (
                        <FilterCheckbox 
                          key={duration}
                          label={duration}
                          checked={selectedDurations.includes(duration)}
                          onChange={() => toggleDuration(duration)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Active filters */}
            {(selectedCategories.length > 0 || selectedDurations.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((category) => (
                  <ActiveFilter 
                    key={category}
                    label={category}
                    onRemove={() => toggleCategory(category)}
                  />
                ))}
                {selectedDurations.map((duration) => (
                  <ActiveFilter 
                    key={duration}
                    label={duration}
                    onRemove={() => toggleDuration(duration)}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Courses Grid */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            {filteredCourses.length > 0 ? (
              <>
                <p className="text-foreground/70 mb-6">
                  Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-2">No courses found</h3>
                <p className="text-foreground/70 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const FilterCheckbox = ({ 
  label, 
  checked, 
  onChange 
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void;
}) => (
  <label className="flex items-center space-x-2 cursor-pointer group">
    <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
      checked 
        ? 'bg-edu-primary border-edu-primary text-white' 
        : 'border-border bg-white group-hover:border-edu-primary/50'
    }`}>
      {checked && <CheckSquare className="h-4 w-4" />}
    </div>
    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
      {label}
    </span>
  </label>
);

const ActiveFilter = ({ 
  label, 
  onRemove 
}: { 
  label: string; 
  onRemove: () => void;
}) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm">
    <span className="mr-1">{label}</span>
    <button 
      onClick={onRemove}
      className="ml-1 text-foreground/70 hover:text-foreground focus:outline-none"
      aria-label="Remove filter"
    >
      ×
    </button>
  </div>
);

export default Courses;
