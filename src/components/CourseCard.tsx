import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Star, Users } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  lessonCount: number;
  rating: number;
  students: number;
  progress?: number;
  tags?: string[];
}
const CourseCard = ({
  id,
  title,
  description,
  instructor,
  thumbnail,
  duration,
  lessonCount,
  rating,
  students,
  progress,
  tags = []
}: CourseCardProps) => {
  return <Link to={`/courses/${id}`} className="block group">
      <div className="edu-card h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          {progress !== undefined && <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex justify-between text-white text-xs mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-value" style={{
              width: `${progress}%`
            }}></div>
              </div>
            </div>}
        </div>

        {/* Tags */}
        {tags.length > 0 && <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => <span key={index} className="inline-block px-2.5 py-0.5 bg-muted text-xs font-medium rounded-full">
                {tag}
              </span>)}
          </div>}

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-edu-primary transition-colors">
          {title}
        </h3>
        <p className="text-foreground/70 mb-3 text-sm line-clamp-2">
          {description}
        </p>
        <p className="text">
          By {instructor}
        </p>

        {/* Stats */}
        <div className="mt-auto grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center text-foreground/70">
            <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-foreground/70">
            <BookOpen className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{lessonCount} Lessons</span>
          </div>
          <div className="flex items-center text-foreground/70">
            <Star className="h-4 w-4 mr-1 text-edu-accent flex-shrink-0" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-foreground/70">
            <Users className="h-4 w-4 mr-1 flex-shrink-0" />
            <span>{students.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>;
};
export default CourseCard;