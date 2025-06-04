"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { CategoryCard } from '@/components/CategoryCard';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { categories } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Target, Users, Zap } from 'lucide-react';

export default function Home() {
  console.log('Home page rendering');

  const features = [
    {
      icon: Target,
      title: "اختبارات متنوعة",
      description: "أكثر من 600 اختبار في 20 فئة مختلفة تغطي جميع مجالات المعرفة",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "تجربة تفاعلية",
      description: "واجهة سهلة الاستخدام مع تصميم جذاب وألوان زاهية",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "للجميع",
      description: "محتوى مناسب لجميع الأعمار والمستويات التعليمية",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "نتائج فورية",
      description: "احصل على نتائجك فور انتهاء الاختبار مع إمكانية المشاركة",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-quiz-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ad 1 */}
      <AdSense1 />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-quiz-primary/10 text-quiz-primary border-quiz-primary/20">
              ⭐ مميزات المنصة
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              لماذا دارالمعرفة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              منصة شاملة ومتطورة تجمع بين التعليم والترفيه لتقدم لك أفضل تجربة تعليمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                <CardContent className="p-8 text-center relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 2 */}
      <AdSense2 />

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-quiz-secondary/10 text-quiz-secondary border-quiz-secondary/20">
              📚 الفئات المتاحة
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              استكشف فئات المعرفة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اختر من بين 20 فئة متنوعة واستمتع بأكثر من 600 اختبار شيق ومفيد
            </p>
          </div>

          {/* Ad 3 */}
          <AdSense3 />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Ad 4 */}
          <AdSense4 />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-quiz-primary to-quiz-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              هل أنت مستعد للتحدي؟
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              ابدأ رحلتك في عالم المعرفة واكتشف كم تعرف حقاً. تحدى نفسك وأصدقاءك!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-quiz-primary hover:bg-gray-100 font-semibold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 ml-2" />
              ابدأ أول اختبار الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Ad 5 */}
      <AdSense5 />

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-quiz-accent/10 text-quiz-accent border-quiz-accent/20">
              📊 إحصائيات المنصة
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-accent bg-clip-text text-transparent">
              أرقام مذهلة
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                600+
              </div>
              <div className="text-lg text-gray-600 font-medium">اختبار متاح</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-quiz-secondary to-quiz-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                20
              </div>
              <div className="text-lg text-gray-600 font-medium">فئة مختلفة</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-quiz-accent to-quiz-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                6000+
              </div>
              <div className="text-lg text-gray-600 font-medium">سؤال وجواب</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-lg text-gray-600 font-medium">مجاني</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad 6 */}
      <AdSense6 />

      <Footer />
    </div>
  );
}
