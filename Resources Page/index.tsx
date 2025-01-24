'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, User, Youtube, FileText } from 'lucide-react'
import Link from 'next/link'

interface Course {
  id: number
  name: string
  description: string
  instructor: string
  youtubeLink: string
  driveLink: string
}

const courses: Course[] = [
  { 
    id: 1, 
    name: "Introduction to React", 
    description: "Learn the basics of React and build your first app", 
    instructor: "Dr. Jane Smith",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink1',
    driveLink: 'https://drive.google.com/file/d/dummylink1'
  },
  { 
    id: 2, 
    name: "Advanced JavaScript", 
    description: "Deep dive into JavaScript's advanced concepts", 
    instructor: "Prof. John Doe",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink2',
    driveLink: 'https://drive.google.com/file/d/dummylink2'
  },
  { 
    id: 3, 
    name: "Web Design Fundamentals", 
    description: "Master the principles of effective web design", 
    instructor: "Ms. Emily Brown",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink3',
    driveLink: 'https://drive.google.com/file/d/dummylink3'
  },
  { 
    id: 4, 
    name: "Data Structures and Algorithms", 
    description: "Enhance your problem-solving skills", 
    instructor: "Dr. Michael Johnson",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink4',
    driveLink: 'https://drive.google.com/file/d/dummylink4'
  },
  { 
    id: 5, 
    name: "Machine Learning Basics", 
    description: "Introduction to machine learning concepts", 
    instructor: "Prof. Sarah Lee",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink5',
    driveLink: 'https://drive.google.com/file/d/dummylink5'
  },
  { 
    id: 6, 
    name: "Mobile App Development", 
    description: "Build cross-platform mobile apps", 
    instructor: "Mr. David Wilson",
    youtubeLink: 'https://www.youtube.com/watch?v=dummylink6',
    driveLink: 'https://drive.google.com/file/d/dummylink6'
  },
]

export default function ResourcesPage() {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  }

  const instructorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available Courses
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card 
                className="h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Book className="w-5 h-5 mr-2" />
                    {course.name}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.div
                    variants={instructorVariants}
                    initial="hidden"
                    animate={hoveredCourse === course.id ? "visible" : "hidden"}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <User className="w-4 h-4 mr-1" />
                    {course.instructor}
                  </motion.div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2">
                  <Link href={course.youtubeLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
                    <Button variant="outline" className="w-full">
                      <Youtube className="w-4 h-4 mr-2" />
                      YouTube
                    </Button>
                  </Link>
                  <Link href={course.driveLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Drive
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}