"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navigationItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Solution Digitale", href: "/solution-digitale" },
  { name: "Documentation", href: "/documentation" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="container flex flex-nowrap h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-3">
            <Image 
              src="/nouveau_logo.jpeg" 
              alt="BEKA Formation HACCP - Logo" 
              width={64} 
              height={64} 
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">BEKA Formation</span>
              <span className="text-sm text-muted-foreground leading-tight">HACCP & Hygiène</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/contact">Obtenir un devis</Link>
            </Button>
            <Button asChild>
              <Link href="/solution-digitale">Solution Digitale</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium py-2 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Obtenir un devis</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/solution-digitale" onClick={() => setIsOpen(false)}>Solution Digitale</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
