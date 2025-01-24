'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function EnterCodePage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      if (value !== '' && index < 5) {
        inputs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fullCode = code.join('')
    if (fullCode.length !== 6) {
      setError('Please enter a 6-digit code')
      return
    }
    // Here you would typically call an API to verify the code
    console.log('Code submitted:', fullCode)
    setIsSubmitted(true)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

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
              <CardTitle className="text-2xl font-bold text-center">Enter Verification Code</CardTitle>
              <CardDescription className="text-center">Enter the 6-digit code sent to your email</CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      {code.map((digit, index) => (
                        <Input
                          key={index}
                          type="text"
                          inputMode="numeric"
                          pattern="\d{1}"
                          maxLength={1}
                          className="w-12 h-12 text-center text-2xl"
                          value={digit}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(index, e)}
                          ref={(el) => inputs.current[index] = el}
                          required
                        />
                      ))}
                    </div>
                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                  </div>
                  <Button className="w-full mt-6" type="submit">Verify Code</Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-green-600">Code verified successfully!</p>
                  <p>You can now reset your password.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/auth/forgot-password" className="flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Forgot Password
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}