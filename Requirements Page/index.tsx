'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

interface Requirement {
  id: number
  title: string
  description: string
  paperLink: string
}

const requirements: Requirement[] = [
  {
    id: 1,
    title: "Research Proposal",
    description: "A detailed outline of your proposed research project, including objectives, methodology, and expected outcomes.",
    paperLink: "https://example.com/research-proposal-template.pdf"
  },
  {
    id: 2,
    title: "Literature Review",
    description: "A comprehensive review of existing literature related to your research topic, identifying gaps and areas for further study.",
    paperLink: "https://example.com/literature-review-guide.pdf"
  },
  {
    id: 3,
    title: "Methodology Section",
    description: "A detailed description of the research methods you plan to use, including data collection and analysis techniques.",
    paperLink: "https://example.com/methodology-guidelines.pdf"
  },
  {
    id: 4,
    title: "Ethics Application",
    description: "An application detailing the ethical considerations of your research and how you plan to address them.",
    paperLink: "https://example.com/ethics-application-form.pdf"
  },
  {
    id: 5,
    title: "Progress Report",
    description: "A regular update on the progress of your research, including achievements, challenges, and next steps.",
    paperLink: "https://example.com/progress-report-template.pdf"
  },
  {
    id: 6,
    title: "Final Thesis",
    description: "The complete presentation of your research, including introduction, literature review, methodology, results, discussion, and conclusion.",
    paperLink: "https://example.com/thesis-structure-guide.pdf"
  }
]

export default function RequirementsPage() {
  const [expandedCard, setExpandedCard] = useState<{ id: number | null, timestamp: number }>({ id: null, timestamp: 0 })

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
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }

  useEffect(() => {
    if (expandedCard.id !== null) {
      const timer = setTimeout(() => {
        setExpandedCard(prev => ({ ...prev, id: null }))
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [expandedCard.timestamp])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Academic Requirements
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {requirements.map((req) => (
            <motion.div
              key={req.id}
              variants={cardVariants}
              whileHover="hover"
            >
              <Card 
                className="h-full flex flex-col cursor-pointer"
                onClick={() => {
                  const now = Date.now()
                  setExpandedCard(prev => 
                    prev.id === req.id ? { id: null, timestamp: now } : { id: req.id, timestamp: now }
                  )
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      {req.title}
                    </span>
                    {expandedCard.id === req.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: expandedCard.id === req.id ? 1 : 0,
                      height: expandedCard.id === req.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardDescription className="mb-4">{req.description}</CardDescription>
                  </motion.div>
                  <Link href={req.paperLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full mt-2">
                      View Requirement Paper
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