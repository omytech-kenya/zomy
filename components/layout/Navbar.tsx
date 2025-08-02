'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors";
    const activeClasses = "text-zomy-primary border-b-2 border-zomy-primary pb-1";
    const inactiveClasses = "text-gray-600 hover:text-zomy-text";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className="bg-white border-b border-zomy-gray-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-zomy-primary p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-zomy-text">ZOMY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className={getLinkClasses('/features')}>
              Features
            </Link>
            <Link href="/testimonials" className={getLinkClasses('/testimonials')}>
              Testimonials
            </Link>
            <Link href="/pricing" className={getLinkClasses('/pricing')}>
              Pricing
            </Link>
            <Link href="/contact" className={getLinkClasses('/contact')}>
              Contact
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-gray-600 hover:text-zomy-text">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-zomy-primary hover:bg-orange-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-zomy-text focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zomy-gray-light">
            <div className="flex flex-col space-y-4">
              <Link
                href="/features"
                className={getLinkClasses('/features')}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/testimonials"
                className={getLinkClasses('/testimonials')}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/pricing"
                className={getLinkClasses('/pricing')}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className={getLinkClasses('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-zomy-gray-light">
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-zomy-primary hover:bg-orange-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}