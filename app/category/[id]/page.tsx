"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { getCategoryById, getQuizzesByCategory, Quiz } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Star, ChevronLeft, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Generate more quizzes for demo purposes
function generateQuizzesForCategory(categoryId: number): Quiz[] {
  console.log('Generating quizzes for category:', categoryId);
  
  const baseQuizzes = [
    "أساسيات المعرفة",
    "المستوى المتقدم", 
    "التحدي الكبير",
    "معلومات عامة",
    "اختبار شامل",
    "المعرفة المتخصصة",
    "تحدي الخبراء",
    "أسئلة متنوعة",
    "المعرفة العميقة",
    "اختبار المحترفين"
  ];

  const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];
  const times = [5, 8, 10, 12, 15];

  return Array.from({ length: 30 }, (_, index) => ({
    id: parseInt(`${categoryId}${index + 1}`),
    title: `${baseQuizzes[index % baseQuizzes.length]} - الجزء ${Math.floor(index / 10) + 1}`,
    description: `اختبار شامل في موضوع متخصص يحتوي على 10 أسئلة متنوعة لتقييم مستوى معرفتك`,
    categoryId: categoryId,
    difficulty: difficulties[index % 3],
    estimatedTime: times[index % times.length],
    questions: [] // Will be generated when quiz is started
  }));
}

function QuizCard({ quiz, categoryColor, categoryId }: { quiz: Quiz; categoryColor: string; categoryId: number }) {
  const { toast } = useToast();

  const handleQuizClick = () => {
    console.log('Quiz clicked:', quiz.title);
    toast({
      title: "جارٍ تحضير الاختبار...",
      description: `سيتم توجيهك لاختبار "${quiz.title}" قريباً`,
    });
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'سهل';
      case 'medium': return 'متوسط';
      case 'hard': return 'صعب';
      default: return 'متوسط';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link href={`/category/${quiz.categoryId}/quiz/${quiz.id}`}>
      <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden" onClick={handleQuizClick}>
        <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Badge className={getDifficultyColor(quiz.difficulty)} variant="secondary">
              {getDifficultyLabel(quiz.difficulty)}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Clock className="w-3 h-3 ml-1" />
              {quiz.estimatedTime} دقيقة
            </Badge>
          </div>
          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-quiz-primary transition-colors group-hover:-translate-x-1" />
        </div>

        <div className="text-right space-y-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-quiz-primary transition-colors">
            {quiz.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {quiz.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2 space-x-reverse text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">10 أسئلة</span>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 mr-2">4.8</span>
          </div>
        </div>

        <div className={`mt-4 h-1 rounded-full ${categoryColor} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function CategoryPage() {
  const params = useParams();
  const categoryId = parseInt(params.id as string);
  
  console.log('CategoryPage rendering for ID:', categoryId);
  
  const category = getCategoryById(categoryId);
  const quizzes = generateQuizzesForCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-quiz-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الفئة غير موجودة</h1>
          <p className="text-xl text-gray-600 mb-8">عذراً، الفئة المطلوبة غير متاحة.</p>
          <Button asChild>
            <Link href="/">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للرئيسية
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-quiz-background">
      <Header />
      
      {/* Category Hero */}
      <section className={`py-20 ${category.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="text-6xl mb-6">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              {category.description}
            </p>
            <div className="flex items-center justify-center space-x-6 space-x-reverse">
              <div className="text-center">
                <div className="text-3xl font-bold">{category.quizCount}</div>
                <div className="text-sm opacity-80">اختبار متاح</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">300</div>
                <div className="text-sm opacity-80">سؤال</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm opacity-80">تقييم</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <Link href="/" className="hover:text-quiz-primary transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-quiz-primary font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Ad 1 */}
      <AdSense1 />

      {/* Quizzes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              اختبارات {category.name}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اختر من بين {category.quizCount} اختبار متنوع واختبر معرفتك في هذا المجال
            </p>
          </div>

          {/* Ad 2 */}
          <AdSense2 />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz, index) => (
              <div key={quiz.id}>
                <QuizCard quiz={quiz} categoryColor={category.color} categoryId={categoryId} />
                {/* Insert ads every 6 quizzes */}
                {index === 5 && <AdSense3 />}
                {index === 11 && <AdSense4 />}
                {index === 17 && <AdSense5 />}
                {index === 23 && <AdSense6 />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}