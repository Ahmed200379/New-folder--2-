'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Globe, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

interface Activity {
  id: number
  name: string
  arabicName?: string
  description: string
  website: string
  socialMedia: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}

const activities: Activity[] = [
  {
    id: 1,
    name: "Google Developer Groups (GDG)",
    description: "A community group for developers interested in Google's developer technology.",
    website: "https://developers.google.com/community/gdg",
    socialMedia: {
      facebook: "https://www.facebook.com/googledevelopers",
      twitter: "https://twitter.com/gdg",
      instagram: "https://www.instagram.com/googledevelopers",
      youtube: "https://www.youtube.com/user/GoogleDevelopers"
    }
  },
  {
    id: 2,
    name: "IEEE",
    description: "The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
    website: "https://www.ieee.org/",
    socialMedia: {
      facebook: "https://www.facebook.com/IEEE.org",
      twitter: "https://twitter.com/IEEEorg",
      instagram: "https://www.instagram.com/ieeeorg",
      linkedin: "https://www.linkedin.com/company/ieee"
    }
  },
  {
    id: 3,
    name: "Student Union",
    arabicName: "اتحاد الطلبه",
    description: "The official representative body for students, organizing events and advocating for student interests.",
    website: "https://example-university.edu/student-union",
    socialMedia: {
      facebook: "https://www.facebook.com/example-student-union",
      instagram: "https://www.instagram.com/example_student_union"
    }
  }
]

export default function StudentActivitiesPage() {
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
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Student Activities
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activities.map((activity) => (
            <motion.div key={activity.id} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-center">
                    <span>{activity.name}</span>
                    {activity.arabicName && (
                      <span className="text-lg font-medium mt-1">{activity.arabicName}</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="mb-4 flex-grow">{activity.description}</CardDescription>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {activity.socialMedia.facebook && (
                      <Link href={activity.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon"><Facebook className="h-4 w-4" /></Button>
                      </Link>
                    )}
                    {activity.socialMedia.twitter && (
                      <Link href={activity.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
                      </Link>
                    )}
                    {activity.socialMedia.instagram && (
                      <Link href={activity.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon"><Instagram className="h-4 w-4" /></Button>
                      </Link>
                    )}
                    {activity.socialMedia.linkedin && (
                      <Link href={activity.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
                      </Link>
                    )}
                    {activity.socialMedia.youtube && (
                      <Link href={activity.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon"><Youtube className="h-4 w-4" /></Button>
                      </Link>
                    )}
                  </div>
                  <Link href={activity.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" className="w-full">
                      <Globe className="mr-2 h-4 w-4" /> Visit Website
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}