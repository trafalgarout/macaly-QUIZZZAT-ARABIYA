"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Users, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function TermsPage() {
  console.log('Terms page rendering');

  const termsHighlights = [
    {
      icon: CheckCircle,
      title: "الاستخدام المجاني",
      description: "جميع خدماتنا مجانية بالكامل",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "للجميع",
      description: "مناسب لجميع الأعمار والمستويات",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "الاستخدام الآمن",
      description: "محتوى آمن ومراجع بعناية",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: XCircle,
      title: "ممنوعات واضحة",
      description: "قوانين واضحة للاستخدام السليم",
      color: "from-red-500 to-red-600"
    }
  ];

  const lastUpdated = "1 يناير 2024";

  return (
    <div className="min-h-screen bg-quiz-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-quiz-primary/10 to-quiz-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-quiz-primary/10 text-quiz-primary border-quiz-primary/20">
              📋 شروط الاستخدام
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              شروط الاستخدام
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              القوانين والأحكام التي تحكم استخدام منصة دارالمعرفة
            </p>
            <p className="text-sm text-gray-500 mt-4">
              آخر تحديث: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Ad 1 */}
      <AdSense1 />

      {/* Terms Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              أهم النقاط
            </h2>
            <p className="text-lg text-gray-600">
              ملخص سريع لأهم شروط الاستخدام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {termsHighlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} text-white mb-6`}>
                    <highlight.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 2 */}
      <AdSense2 />

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <FileText className="w-6 h-6 mr-3" />
                  مقدمة
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    مرحباً بكم في منصة دارالمعرفة. تحكم هذه الشروط والأحكام استخدامكم لموقعنا الإلكتروني 
                    وجميع الخدمات المقدمة من خلاله.
                  </p>
                  <p>
                    باستخدام موقعنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام. 
                    إذا كنتم لا توافقون على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ad 3 */}
            <AdSense3 />

            {/* User Responsibilities */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Users className="w-6 h-6 mr-3" />
                  مسؤوليات المستخدم
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>عند استخدام منصتنا، تتعهدون بـ:</p>
                  
                  <h3 className="text-xl font-semibold text-gray-900">الاستخدام المقبول</h3>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>استخدام الموقع لأغراض تعليمية وترفيهية مشروعة</li>
                    <li>احترام حقوق الملكية الفكرية</li>
                    <li>عدم محاولة اختراق أو إلحاق الضرر بالموقع</li>
                    <li>عدم نشر محتوى مسيء أو غير مناسب</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                  الاستخدامات المحظورة
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <div className="bg-red-50 border-r-4 border-red-500 p-4 rounded">
                    <p className="font-semibold text-red-800 mb-2">ممنوع منعاً باتاً:</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>استخدام الموقع لأي أغراض غير قانونية</li>
                    <li>محاولة الوصول غير المصرح به لأنظمة الموقع</li>
                    <li>نشر فيروسات أو أكواد ضارة</li>
                    <li>انتهاك حقوق الطبع والنشر</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Ad 4 */}
            <AdSense4 />

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-quiz-primary to-quiz-secondary text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-right">
                  تواصل معنا
                </h2>
                <div className="text-white/90 leading-relaxed space-y-4 text-right">
                  <p>
                    إذا كان لديكم أي أسئلة حول شروط الاستخدام هذه، يرجى التواصل معنا:
                  </p>
                  <div className="space-y-2">
                    <p><strong>البريد الإلكتروني:</strong> legal@dar-almaarifa.com</p>
                    <p><strong>العنوان:</strong> المملكة العربية السعودية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ad 5 */}
            <AdSense5 />

          </div>
        </div>
      </section>

      {/* Ad 6 */}
      <AdSense6 />

      <Footer />
    </div>
  );
}