"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Trophy, Star } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  console.log('HeroSection component rendering');

  const stats = [
    { icon: BookOpen, label: 'اختبار', value: '600+', color: 'text-quiz-primary' },
    { icon: Users, label: 'فئة', value: '20', color: 'text-quiz-secondary' },
    { icon: Trophy, label: 'سؤال', value: '6000+', color: 'text-quiz-accent' },
    { icon: Star, label: 'تقييم', value: '4.9', color: 'text-yellow-500' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-quiz-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-quiz-secondary/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-quiz-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/80 text-quiz-primary border-quiz-primary/20 px-4 py-2 text-sm font-medium animate-bounce-in">
            🎯 منصة الاختبارات التعليمية الأولى
          </Badge>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-in-right">
            <span className="bg-gradient-to-r from-quiz-primary via-quiz-secondary to-quiz-accent bg-clip-text text-transparent">
              دارالمعرفة
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-bounce-in" style={{animationDelay: '0.2s'}}>
            استكشف عالم المعرفة من خلال أكثر من <span className="font-bold text-quiz-primary">600 اختبار</span> في 
            <span className="font-bold text-quiz-secondary"> 20 فئة مختلفة</span>. 
            اختبر معرفتك واستمتع بالتعلم!
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-bounce-in" style={{animationDelay: '0.4s'}}>
            من التاريخ والجغرافيا إلى العلوم والتكنولوجيا، نقدم لك تجربة تعليمية شاملة وممتعة تناسب جميع الأعمار والاهتمامات
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in" style={{animationDelay: '0.6s'}}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-quiz-primary to-quiz-secondary hover:from-quiz-primary/90 hover:to-quiz-secondary/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="#categories">
                <BookOpen className="w-5 h-5 ml-2" />
                ابدأ الاختبارات الآن
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-quiz-primary text-quiz-primary hover:bg-quiz-primary hover:text-white font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/about">
                تعرف على المزيد
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in"
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} bg-current/10 mb-3`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-quiz-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-quiz-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}