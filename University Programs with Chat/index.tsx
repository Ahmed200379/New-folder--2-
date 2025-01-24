"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BookOpen, GraduationCap, Home, MessageCircle, Search, Settings, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false)

  useEffect(() => {
    if (!isWidgetLoaded) {
      // Inject the script tag
      const script = document.createElement("script")
      script.innerHTML = `
        window.CHIPP_APP_URL = "https://-18122.chipp.ai";
        window.CHIPP_APP_ID = 18122;
      `
      document.head.appendChild(script)

      // Inject the link tag
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css"
      document.head.appendChild(link)

      // Inject the deferred script tag
      const deferredScript = document.createElement("script")
      deferredScript.defer = true
      deferredScript.src = "https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js"
      document.head.appendChild(deferredScript)

      setIsWidgetLoaded(true)
    }
  }, [isWidgetLoaded])

  const handleChatClick = () => {
    // Trigger the Chipp Chat Widget to open
    if (window.Chipp && typeof window.Chipp.open === "function") {
      window.Chipp.open()
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Left Bar */}
      <aside className="flex w-16 flex-col items-center border-r bg-background py-4">
        <TooltipProvider>
          <div className="flex flex-col items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <Image
                      src="/placeholder.svg"
                      alt="University Logo"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <span className="sr-only">Home</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <Home className="h-6 w-6" />
                    <span className="sr-only">الصفحة الرئيسية</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>الصفحة الرئيسية</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <User className="h-6 w-6" />
                    <span className="sr-only">شروط الالتحاق ببرامج</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>شروط الالتحاق ببرامج</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <GraduationCap className="h-6 w-6" />
                    <span className="sr-only">الدكتوراه الاكاديمية</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>الدكتوراه الاكاديمية</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/registration-subjects">
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <BookOpen className="h-6 w-6" />
                    <span className="sr-only">الماجستير الاكاديمي</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>الماجستير الاكاديمي</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <div className="mt-auto flex flex-col gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/profile">
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <User className="h-6 w-6" />
                  <span className="sr-only">Profile</span>
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Settings className="h-6 w-6" />
                <span className="sr-only">Settings</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="relative h-48 bg-blue-100 dark:bg-blue-950">
          <Image
            src="/placeholder.svg"
            alt="University Building"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Faculty Logo"
                width={60}
                height={60}
                className="rounded-full bg-white p-2"
              />
              <h1 className="text-2xl font-bold text-right">
                 المرشد الاكاديمي               
              </h1>
            </div>
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Programs Grid */}
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-center">MSc الخطة الدراسية</h3>
                <p className="text-center text-sm text-muted-foreground">منذ التقديم وحتى المنح</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-center">PhD الخطة الدراسية</h3>
                <p className="text-center text-sm text-muted-foreground">منذ التقديم وحتى المنح</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  MBA
                </div>
                <h3 className="text-xl font-semibold text-center">MBA الخطة الدراسية</h3>
                <p className="text-center text-sm text-muted-foreground">منذ التقديم وحتى المنح</p>
              </CardContent>
            </Card>

            <Link href="/registration-subjects">
              <Card className="transition-transform hover:scale-105">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    ماجستير
                  </div>
                  <h3 className="text-xl font-semibold text-center">الماجستير الاكاديمي</h3>
                  <p className="text-center text-sm text-muted-foreground">تسجيل المواد</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </ScrollArea>

        {/* Chipp Chat Widget Button */}
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg"
          onClick={handleChatClick}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open Chat</span>
        </Button>
      </main>
    </div>
  )
}