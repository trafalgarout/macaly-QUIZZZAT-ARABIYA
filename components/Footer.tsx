"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  console.log('Footer component rendering');

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'فيسبوك' },
    { icon: Twitter, href: '#', label: 'تويتر' },
    { icon: Instagram, href: '#', label: 'إنستغرام' },
    { icon: Youtube, href: '#', label: 'يوتيوب' },
  ];

  const quickLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن الموقع' },
    { href: '/contact', label: 'اتصل بنا' },
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/terms', label: 'شروط الاستخدام' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-quiz-primary to-quiz-secondary rounded-lg flex items-center justify-center text-white text-xl font-bold">
                د
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
                  دارالمعرفة
                </h3>
                <p className="text-gray-300">منصة الاختبارات التعليمية والترفيهية</p>
              </div>
            </div>
            <p className="text-gray-300 text-right leading-relaxed mb-6 max-w-md">
              منصة تعليمية شاملة تقدم أكثر من 600 اختبار في 20 فئة مختلفة. 
              استكشف عالم المعرفة واختبر قدراتك في مواضيع متنوعة وشيقة.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-quiz-primary/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-right">روابط سريعة</h4>
            <ul className="space-y-3 text-right">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-quiz-primary transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-right">تواصل معنا</h4>
            <div className="space-y-4 text-right">
              <div className="flex items-center space-x-3 space-x-reverse justify-end">
                <span className="text-gray-300">info@dar-almaarifa.com</span>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse justify-end">
                <span className="text-gray-300" dir="ltr">+966 50 123 4567</span>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} دارالمعرفة. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              صُمم بـ ❤️ لنشر المعرفة والتعلم
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}