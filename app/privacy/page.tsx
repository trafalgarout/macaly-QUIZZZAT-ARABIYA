"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Users, Database, Globe } from 'lucide-react';

export default function PrivacyPage() {
  console.log('Privacy page rendering');

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "حماية البيانات",
      description: "نحافظ على خصوصية جميع بياناتك الشخصية",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "الأمان أولاً",
      description: "نستخدم أحدث تقنيات الحماية والتشفير",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Eye,
      title: "الشفافية",
      description: "نوضح بوضوح كيف نستخدم معلوماتك",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "عدم المشاركة",
      description: "لا نشارك بياناتك مع أطراف ثالثة",
      color: "from-orange-500 to-orange-600"
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
              🔒 سياسة الخصوصية
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              نحن ملتزمون بحماية خصوصيتك وضمان أمان معلوماتك الشخصية
            </p>
            <p className="text-sm text-gray-500 mt-4">
              آخر تحديث: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Ad 1 */}
      <AdSense1 />

      {/* Privacy Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              مبادئ الخصوصية لدينا
            </h2>
            <p className="text-lg text-gray-600">
              نلتزم بأعلى معايير حماية الخصوصية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} text-white mb-6`}>
                    <principle.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 2 */}
      <AdSense2 />

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Globe className="w-6 h-6 mr-3" />
                  مقدمة
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    مرحباً بكم في منصة دارالمعرفة. نحن نقدر ثقتكم بنا ونلتزم بحماية خصوصيتكم. 
                    تشرح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتكم الشخصية.
                  </p>
                  <p>
                    باستخدام موقعنا الإلكتروني أو خدماتنا، فإنكم توافقون على جمع واستخدام المعلومات 
                    وفقاً لهذه السياسة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ad 3 */}
            <AdSense3 />

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Database className="w-6 h-6 mr-3" />
                  المعلومات التي نجمعها
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <h3 className="text-xl font-semibold text-gray-900">المعلومات الشخصية</h3>
                  <p>
                    عند تفاعلكم مع منصتنا، قد نجمع المعلومات التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>عنوان البريد الإلكتروني (في حالة التواصل معنا)</li>
                    <li>الاسم (في حالة التواصل معنا)</li>
                    <li>نتائج الاختبارات (محلياً في المتصفح فقط)</li>
                    <li>تفضيلات الاستخدام</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mt-6">المعلومات التقنية</h3>
                  <p>
                    نجمع تلقائياً بعض المعلومات التقنية مثل:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>عنوان IP</li>
                    <li>نوع المتصفح والجهاز</li>
                    <li>صفحات الموقع التي تم زيارتها</li>
                    <li>وقت ومدة الزيارة</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Lock className="w-6 h-6 mr-3" />
                  كيف نستخدم المعلومات
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>تقديم وتحسين خدماتنا</li>
                    <li>الرد على استفساراتكم ومساعدتكم</li>
                    <li>تحليل استخدام الموقع لتحسين التجربة</li>
                    <li>إرسال إشعارات مهمة متعلقة بالخدمة</li>
                    <li>حماية الموقع من الاستخدام المسيء</li>
                    <li>الامتثال للقوانين واللوائح المعمول بها</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Ad 4 */}
            <AdSense4 />

            {/* Data Sharing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Users className="w-6 h-6 mr-3" />
                  مشاركة المعلومات
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    <strong>نحن لا نبيع أو نؤجر معلوماتكم الشخصية لأطراف ثالثة.</strong>
                  </p>
                  <p>قد نشارك معلوماتكم فقط في الحالات التالية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>بموافقتكم الصريحة</li>
                    <li>لحماية حقوقنا أو سلامة المستخدمين</li>
                    <li>للامتثال للقوانين أو الطلبات القانونية</li>
                    <li>مع مقدمي الخدمات التقنية (مثل استضافة الموقع) الذين يلتزمون بحماية بياناتكم</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right">
                  ملفات تعريف الارتباط (Cookies)
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    نستخدم ملفات تعريف الارتباط لتحسين تجربتكم على الموقع. هذه الملفات تساعدنا في:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>حفظ تفضيلاتكم</li>
                    <li>تذكر نتائج الاختبارات السابقة</li>
                    <li>تحليل استخدام الموقع</li>
                    <li>عرض الإعلانات المناسبة</li>
                  </ul>
                  <p>
                    يمكنكم تعطيل ملفات تعريف الارتباط من إعدادات المتصفح، لكن هذا قد يؤثر على 
                    بعض وظائف الموقع.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ad 5 */}
            <AdSense5 />

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right flex items-center justify-end">
                  <Shield className="w-6 h-6 mr-3" />
                  أمان البيانات
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    نطبق تدابير أمنية متقدمة لحماية معلوماتكم:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li>تشفير البيانات أثناء النقل والتخزين</li>
                    <li>وصول محدود للبيانات الشخصية</li>
                    <li>مراقبة مستمرة للأنشطة المشبوهة</li>
                    <li>تحديث منتظم لأنظمة الحماية</li>
                    <li>النسخ الاحتياطي الآمن للبيانات</li>
                  </ul>
                  <p>
                    رغم جهودنا في الحماية، لا يمكن ضمان الأمان المطلق لأي نظام على الإنترنت. 
                    نشجعكم على اتخاذ احتياطات إضافية لحماية معلوماتكم.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right">
                  حقوقكم
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>لديكم الحقوق التالية فيما يتعلق ببياناتكم الشخصية:</p>
                  <ul className="list-disc list-inside space-y-2 mr-6">
                    <li><strong>الوصول:</strong> طلب نسخة من بياناتكم المخزنة لدينا</li>
                    <li><strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة</li>
                    <li><strong>الحذف:</strong> طلب حذف بياناتكم الشخصية</li>
                    <li><strong>التقييد:</strong> طلب تقييد معالجة بياناتكم</li>
                    <li><strong>الاعتراض:</strong> الاعتراض على معالجة بياناتكم</li>
                    <li><strong>النقل:</strong> طلب نقل بياناتكم لمقدم خدمة آخر</li>
                  </ul>
                  <p>
                    لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 text-right">
                  تغييرات على سياسة الخصوصية
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 text-right">
                  <p>
                    قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سنقوم بإشعاركم بأي تغييرات مهمة 
                    عبر عرض السياسة الجديدة على هذه الصفحة.
                  </p>
                  <p>
                    ننصحكم بمراجعة هذه الصفحة بشكل دوري للاطلاع على أي تحديثات. 
                    التغييرات تصبح سارية المفعول فور نشرها على هذه الصفحة.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-quiz-primary to-quiz-secondary text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-right">
                  تواصل معنا
                </h2>
                <div className="text-white/90 leading-relaxed space-y-4 text-right">
                  <p>
                    إذا كان لديكم أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا في التعامل مع 
                    المعلومات الشخصية، يرجى التواصل معنا:
                  </p>
                  <div className="space-y-2">
                    <p><strong>البريد الإلكتروني:</strong> privacy@dar-almaarifa.com</p>
                    <p><strong>العنوان:</strong> المملكة العربية السعودية</p>
                  </div>
                  <p>
                    سنرد على استفساراتكم في غضون 30 يوماً من تاريخ الاستلام.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Ad 6 */}
      <AdSense6 />

      <Footer />
    </div>
  );
}