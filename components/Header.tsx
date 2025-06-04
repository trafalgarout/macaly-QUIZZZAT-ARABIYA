"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Home, User, BookOpen, Phone, FileText, Shield } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  console.log('Header component rendering');

  const navItems = [
    { href: '/', label: 'الرئيسية', icon: Home },
    { href: '/about', label: 'عن الموقع', icon: User },
    { href: '/contact', label: 'اتصل بنا', icon: Phone },
    { href: '/privacy', label: 'سياسة الخصوصية', icon: Shield },
    { href: '/terms', label: 'شروط الاستخدام', icon: FileText },
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-quiz-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-quiz-primary to-quiz-secondary rounded-lg flex items-center justify-center text-white text-xl font-bold">
              د
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
                دارالمعرفة
              </h1>
              <p className="text-sm text-gray-600">منصة الاختبارات التعليمية</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-quiz-primary transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-right font-arabic">
                  <div className="flex items-center space-x-2 space-x-reverse justify-end">
                    <div className="text-right">
                      <div className="text-xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
                        دارالمعرفة
                      </div>
                      <div className="text-sm text-gray-600">منصة الاختبارات التعليمية</div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-quiz-primary to-quiz-secondary rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      د
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription className="text-right text-gray-600">
                  استكشف عالم المعرفة والتعلم الممتع
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 space-x-reverse justify-end text-gray-700 hover:text-quiz-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100"
                  >
                    <span className="font-medium">{item.label}</span>
                    <item.icon className="w-5 h-5" />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}