'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Sun, GraduationCap } from 'lucide-react'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'zh', label: '中文' },
]

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
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
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`py-4 px-6 flex items-center justify-center shadow-md ${darkMode ? 'bg-gray-800' : 'bg-primary text-primary-foreground'}`}>
        <GraduationCap className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-bold">Academy Guide</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Settings
          </motion.h1>
          <Card className={`w-full max-w-md mx-auto ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Manage your app settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div className="flex items-center justify-between" variants={itemVariants}>
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <CardDescription>Toggle dark mode on or off</CardDescription>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="ml-4"
                />
              </motion.div>
              <motion.div className="space-y-2" variants={itemVariants}>
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <CardDescription>Choose your preferred language</CardDescription>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}