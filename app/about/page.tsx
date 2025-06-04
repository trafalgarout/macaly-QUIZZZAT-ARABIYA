"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Target, Heart, Star, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  console.log('About page rendering');

  const values = [
    {
      icon: BookOpen,
      title: "التعليم للجميع",
      description: "نؤمن بأن التعليم حق للجميع ونسعى لجعل المعرفة متاحة بطريقة ممتعة وتفاعلية",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "الجودة والإتقان",
      description: "نحرص على تقديم محتوى عالي الجودة مع مراجعة دقيقة لجميع الأسئلة والإجابات",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "التعلم بالمتعة",
      description: "نجعل التعلم ممتعاً من خلال التصميم الجذاب والتفاعل المشوق مع المحتوى",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "المجتمع التعليمي",
      description: "نبني مجتمعاً تعليمياً يشارك المعرفة ويدعم التعلم المستمر",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const team = [
    {
      name: "فريق المحتوى",
      role: "إعداد وكتابة الأسئلة",
      description: "فريق من المتخصصين في مختلف المجالات"
    },
    {
      name: "فريق التطوير",
      role: "تطوير المنصة",
      description: "مهندسو برمجيات متخصصون في التقنيات الحديثة"
    },
    {
      name: "فريق التصميم",
      role: "تصميم التجربة",
      description: "مصممون خبراء في تجربة المستخدم والواجهات"
    }
  ];

  return (
    <div className="min-h-screen bg-quiz-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-quiz-primary/10 to-quiz-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-quiz-primary/10 text-quiz-primary border-quiz-primary/20">
              🌟 تعرف علينا
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              عن دارالمعرفة
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              منصة تعليمية عربية رائدة تهدف إلى نشر المعرفة والثقافة من خلال الاختبارات التفاعلية والممتعة
            </p>
          </div>
        </div>
      </section>

      {/* Ad 1 */}
      <AdSense1 />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-quiz-primary/20 to-quiz-secondary/20 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                  <p className="text-gray-700 leading-relaxed">
                    أن نكون المنصة العربية الأولى للتعلم التفاعلي والاختبارات التعليمية،
                    ونساهم في رفع مستوى الثقافة والمعرفة في العالم العربي
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                مهمتنا وأهدافنا
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-quiz-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-quiz-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">نشر المعرفة</h4>
                    <p className="text-gray-600">تقديم محتوى تعليمي عالي الجودة يغطي مختلف مجالات المعرفة</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-quiz-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Trophy className="w-4 h-4 text-quiz-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">التعلم الممتع</h4>
                    <p className="text-gray-600">جعل التعلم تجربة ممتعة ومثيرة من خلال الاختبارات التفاعلية</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-quiz-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-quiz-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">خدمة المجتمع</h4>
                    <p className="text-gray-600">المساهمة في تطوير المجتمع من خلال التعليم والثقافة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad 2 */}
      <AdSense2 />

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              قيمنا ومبادئنا
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نحن نؤمن بمجموعة من القيم والمبادئ التي توجه عملنا وتحدد رؤيتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 3 */}
      <AdSense3 />

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              أرقامنا المميزة
            </h2>
            <p className="text-lg text-gray-600">
              إنجازاتنا في أرقام تعكس التزامنا بالتميز
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent mb-2">
                600+
              </div>
              <div className="text-lg text-gray-600 font-medium">اختبار متنوع</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-quiz-secondary to-quiz-accent bg-clip-text text-transparent mb-2">
                20
              </div>
              <div className="text-lg text-gray-600 font-medium">فئة تعليمية</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-quiz-accent to-quiz-primary bg-clip-text text-transparent mb-2">
                6000+
              </div>
              <div className="text-lg text-gray-600 font-medium">سؤال وجواب</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-quiz-primary to-quiz-accent bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-lg text-gray-600 font-medium">مجاني ومفتوح</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad 4 */}
      <AdSense4 />

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              فريق العمل
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              فريق متخصص ومتفان يعمل على تطوير وتحسين المنصة باستمرار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-quiz-primary to-quiz-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-quiz-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 5 */}
      <AdSense5 />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-quiz-primary to-quiz-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              انضم إلى رحلة التعلم
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ابدأ استكشاف عالم المعرفة معنا واستمتع بتجربة تعليمية فريدة
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-quiz-primary hover:bg-gray-100 font-semibold px-12 py-4 text-lg rounded-xl"
            >
              <Link href="/">
                <BookOpen className="w-5 h-5 ml-2" />
                ابدأ الآن
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ad 6 */}
      <AdSense6 />

      <Footer />
    </div>
  );
}