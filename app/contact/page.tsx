"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  console.log('Contact page rendering');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "شكراً لك على تواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@dar-almaarifa.com",
      description: "راسلنا في أي وقت",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 123 4567",
      description: "متاح من 9 صباحاً إلى 6 مساءً",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "الدعم الفني",
      value: "support@dar-almaarifa.com",
      description: "للمساعدة التقنية",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "المملكة العربية السعودية",
      description: "نخدم العالم العربي",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const faqs = [
    {
      question: "كيف يمكنني إضافة اختبار جديد؟",
      answer: "يمكنك التواصل معنا عبر البريد الإلكتروني مع تفاصيل الاختبار المقترح وسنقوم بمراجعته وإضافته إن كان مناسباً."
    },
    {
      question: "هل الاختبارات مجانية؟",
      answer: "نعم، جميع الاختبارات على المنصة مجانية بالكامل ولا تتطلب أي رسوم أو اشتراكات."
    },
    {
      question: "كيف يمكنني الإبلاغ عن خطأ؟",
      answer: "يمكنك الإبلاغ عن أي خطأ من خلال نموذج الاتصال أو مراسلتنا مباشرة على البريد الإلكتروني."
    },
    {
      question: "هل يمكنني مشاركة النتائج؟",
      answer: "نعم، بعد إنهاء أي اختبار يمكنك مشاركة النتائج على مواقع التواصل الاجتماعي."
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
              📞 تواصل معنا
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
              نحن هنا لمساعدتك
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              لديك سؤال أو اقتراح؟ تواصل معنا وسنكون سعداء بالرد عليك في أقرب وقت ممكن
            </p>
          </div>
        </div>
      </section>

      {/* Ad 1 */}
      <AdSense1 />

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              طرق التواصل
            </h2>
            <p className="text-lg text-gray-600">
              اختر الطريقة المناسبة للتواصل معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-6`}>
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{info.title}</h3>
                  <p className="text-quiz-primary font-medium mb-2" dir="ltr">{info.value}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 2 */}
      <AdSense2 />

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-quiz-primary to-quiz-secondary bg-clip-text text-transparent">
                أرسل لنا رسالة
              </h2>
              <p className="text-lg text-gray-600">
                املأ النموذج التالي وسنتواصل معك قريباً
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-right block">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="text-right"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-right block">البريد الإلكتروني *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="text-left"
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-right block">موضوع الرسالة *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="text-right"
                      placeholder="اختر موضوع رسالتك"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-right block">الرسالة *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="text-right min-h-32"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-gradient-to-r from-quiz-primary to-quiz-secondary hover:from-quiz-primary/90 hover:to-quiz-secondary/90 text-white font-semibold px-12 py-4 text-lg rounded-xl"
                    >
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad 3 */}
      <AdSense3 />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600">
              إجابات على أهم الأسئلة التي يطرحها مستخدمونا
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-right">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-right">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad 4 */}
      <AdSense4 />

      {/* Working Hours */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-quiz-primary to-quiz-secondary text-white mb-8">
              <Clock className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              أوقات العمل
            </h2>
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                <span className="text-gray-600">السبت - الخميس</span>
                <span className="font-semibold text-quiz-primary">9:00 ص - 6:00 م</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                <span className="text-gray-600">الجمعة</span>
                <span className="font-semibold text-quiz-secondary">مغلق</span>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              * نستجيب للرسائل الإلكترونية خلال 24 ساعة في أيام العمل
            </p>
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
              هل تحتاج مساعدة فورية؟
            </h2>
            <p className="text-xl mb-8 opacity-90">
              تواصل معنا الآن وسنساعدك في حل أي مشكلة أو الإجابة على استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-quiz-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl"
              >
                <Mail className="w-5 h-5 ml-2" />
                راسلنا الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-quiz-primary font-semibold px-8 py-4 text-lg rounded-xl"
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا
              </Button>
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