'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/products', label: t('products') },
    { href: '/how-it-works', label: t('howItWorks') },
    { href: '/about', label: t('about') },
    { href: '/partners', label: t('partners') },
    { href: '/showroom', label: t('showroom') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-primary">
              <Image
                src="images/logo.png"
                alt="Santan Market logo"
                width={501}
                height={498}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline font-bold text-lg text-secondary">
              Santan Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                  language === 'uz'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-gray-200'
                }`}
              >
                O'z
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                  language === 'ru'
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-gray-200'
                }`}
              >
                Ру
              </button>
            </div>

            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:opacity-90 transition-opacity">
              <ShoppingCart className="w-5 h-5" />
              <span>{t('cart')} (0)</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-border pb-4">
            <div className="space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="px-4 py-2 mt-4 flex gap-2">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`flex-1 px-3 py-2 text-xs font-semibold rounded transition-colors ${
                    language === 'uz'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-gray-300'
                  }`}
                >
                  O'zbekcha
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`flex-1 px-3 py-2 text-xs font-semibold rounded transition-colors ${
                    language === 'ru'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-gray-300'
                  }`}
                >
                  Русский
                </button>
              </div>

              <button className="w-full mx-4 px-3 py-2 mt-4 text-sm font-medium text-white bg-secondary rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                {t('cart')} (0)
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
