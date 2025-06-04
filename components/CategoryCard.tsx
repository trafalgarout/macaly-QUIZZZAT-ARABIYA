"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/lib/quiz-data';
import { ChevronLeft, BookOpen } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  console.log('Rendering CategoryCard for:', category.name);

  return (
    <Link href={`/category/${category.id}`}>
      <Card className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in ${category.gradient}`}
        style={{ animationDelay: `${index * 100}ms` }}>
        <CardContent className="p-6 text-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                {category.quizCount} اختبار
              </Badge>
              <div className="text-4xl">{category.icon}</div>
            </div>
            
            <div className="text-right space-y-2">
              <h3 className="text-xl font-bold leading-tight group-hover:text-white/90 transition-colors">
                {category.name}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                {category.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-2 space-x-reverse text-white/80">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">ابدأ الآن</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </Link>
  );
}