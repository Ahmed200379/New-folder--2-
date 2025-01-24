'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter your email address')
      return
    }
    // Here you would typically call an API to handle the password reset request
    console.log('Password reset requested for:', email)
    setIsSubmitted(true)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-center shadow-md">
        <GraduationCap className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-bold">Academy Guide</h1>
      </header>
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
              <CardDescription className="text-center">Enter your email to reset your password</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="m@example.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
                  <Button className="w-full mt-6" type="submit">Reset Password</Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-green-600">Password reset link sent to your email!</p>
                  <p>Please check your inbox and follow the instructions to reset your password.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/auth" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}