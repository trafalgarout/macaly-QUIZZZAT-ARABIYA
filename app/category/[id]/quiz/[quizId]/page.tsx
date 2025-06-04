"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSense1, AdSense2, AdSense3, AdSense4, AdSense5, AdSense6 } from '@/components/AdSense';
import { getCategoryById, Quiz, Question } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Clock, ChevronLeft, Trophy, Share2, RefreshCw, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuizAnswer {
  questionIndex: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

// Generate quiz questions
function generateQuizQuestions(categoryId: number, quizId: number): Question[] {
  console.log('Generating questions for quiz:', quizId, 'category:', categoryId);
  
  const arabicQuestions = [
    {
      question: "ما هي عاصمة المملكة العربية السعودية؟",
      options: ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام"],
      correctAnswer: 0
    },
    {
      question: "كم عدد أركان الإسلام؟",
      options: ["أربعة", "خمسة", "ستة", "سبعة", "ثمانية"],
      correctAnswer: 1
    },
    {
      question: "في أي عام تم توحيد المملكة العربية السعودية؟",
      options: ["1930", "1932", "1934", "1936", "1938"],
      correctAnswer: 1
    },
    {
      question: "ما هو أطول نهر في العالم؟",
      options: ["النيل", "الأمازون", "الفرات", "دجلة", "الكونغو"],
      correctAnswer: 0
    },
    {
      question: "كم عدد قارات العالم؟",
      options: ["خمسة", "ستة", "سبعة", "ثمانية", "تسعة"],
      correctAnswer: 2
    },
    {
      question: "من هو مؤسس شركة أبل؟",
      options: ["بيل غيتس", "ستيف جوبز", "مارك زوكربيرغ", "إيلون ماسك", "جيف بيزوس"],
      correctAnswer: 1
    },
    {
      question: "ما هي أكبر المحيطات في العالم؟",
      options: ["الأطلسي", "الهندي", "الهادئ", "المتجمد الشمالي", "الجنوبي"],
      correctAnswer: 2
    },
    {
      question: "كم عدد أيام السنة العادية؟",
      options: ["364", "365", "366", "367", "368"],
      correctAnswer: 1
    },
    {
      question: "ما هي عملة اليابان؟",
      options: ["الين", "الوون", "اليوان", "الدولار", "الجنيه"],
      correctAnswer: 0
    },
    {
      question: "من كتب ملحمة الإلياذة؟",
      options: ["هوميروس", "سوفوكليس", "أفلاطون", "أرسطو", "فيرجيل"],
      correctAnswer: 0
    }
  ];

  return arabicQuestions.map((q, index) => ({
    id: parseInt(`${quizId}${index + 1}`),
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: `الإجابة الصحيحة هي: ${q.options[q.correctAnswer]}`
  }));
}

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  
  const categoryId = parseInt(params.id as string);
  const quizId = parseInt(params.quizId as string);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [questions, setQuestions] = useState<Question[]>([]);
  
  console.log('QuizPage rendering - Category:', categoryId, 'Quiz:', quizId);
  
  const category = getCategoryById(categoryId);

  useEffect(() => {
    const quizQuestions = generateQuizQuestions(categoryId, quizId);
    setQuestions(quizQuestions);
    console.log('Quiz questions generated:', quizQuestions.length);
  }, [categoryId, quizId]);

  useEffect(() => {
    if (timeLeft > 0 && !isQuizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isQuizCompleted) {
      handleFinishQuiz();
    }
  }, [timeLeft, isQuizCompleted]);

  const handleAnswerSelect = (answerIndex: number) => {
    console.log('Answer selected:', answerIndex, 'for question:', currentQuestion);
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast({
        title: "يرجى اختيار إجابة",
        description: "يجب اختيار إجابة قبل الانتقال للسؤال التالي",
        variant: "destructive"
      });
      return;
    }

    const newAnswer: QuizAnswer = {
      questionIndex: currentQuestion,
      selectedAnswer,
      isCorrect: selectedAnswer === questions[currentQuestion].correctAnswer
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    console.log('Answer recorded:', newAnswer);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setIsQuizCompleted(true);
      console.log('Quiz completed with answers:', newAnswers);
    }
  };

  const handleFinishQuiz = () => {
    setIsQuizCompleted(true);
    toast({
      title: "تم إنهاء الاختبار!",
      description: "شكراً لك على المشاركة",
    });
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter(answer => answer.isCorrect).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return "ممتاز! أداء رائع 🏆";
    if (percentage >= 80) return "جيد جداً! أداء مميز 🌟";
    if (percentage >= 70) return "جيد! يمكنك تحسين أدائك 👍";
    if (percentage >= 60) return "مقبول، يحتاج إلى مزيد من المراجعة 📚";
    return "يحتاج إلى دراسة أكثر، لا تيأس! 💪";
  };

  const handleShare = () => {
    const score = calculateScore();
    const shareText = `حققت ${score.percentage}% في اختبار ${category?.name} على منصة دارالمعرفة!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'دارالمعرفة',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      toast({
        title: "تم نسخ الرابط!",
        description: "يمكنك الآن مشاركة نتيجتك مع الأصدقاء",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!category || questions.length === 0) {
    return (
      <div className="min-h-screen bg-quiz-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">جارٍ تحميل الاختبار...</h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-quiz-primary mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isQuizCompleted) {
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-quiz-background">
        <Header />
        
        {/* Results Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              
              {/* Ad 1 */}
              <AdSense1 />

              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardHeader className={`${category.gradient} text-white text-center py-12`}>
                  <div className="text-6xl mb-4">
                    {score.percentage >= 80 ? '🏆' : score.percentage >= 60 ? '🌟' : '📚'}
                  </div>
                  <h1 className="text-3xl font-bold mb-2">انتهى الاختبار!</h1>
                  <p className="text-xl opacity-90">{getScoreMessage(score.percentage)}</p>
                </CardHeader>
                
                <CardContent className="p-8 text-center">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-quiz-primary">{score.correct}</div>
                      <div className="text-gray-600">إجابة صحيحة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500">{score.total - score.correct}</div>
                      <div className="text-gray-600">إجابة خاطئة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-500">{score.percentage}%</div>
                      <div className="text-gray-600">النتيجة النهائية</div>
                    </div>
                  </div>

                  <Progress value={score.percentage} className="h-3 mb-8" />

                  {/* Ad 2 */}
                  <AdSense2 />

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button onClick={handleShare} className="bg-quiz-primary hover:bg-quiz-primary/90">
                      <Share2 className="w-4 h-4 ml-2" />
                      شارك النتيجة
                    </Button>
                    <Button variant="outline" onClick={() => window.location.reload()}>
                      <RefreshCw className="w-4 h-4 ml-2" />
                      إعادة المحاولة
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/category/${categoryId}`}>
                        <ArrowRight className="w-4 h-4 ml-2" />
                        اختبارات أخرى
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/">
                        <Home className="w-4 h-4 ml-2" />
                        الرئيسية
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ad 3 */}
              <AdSense3 />

            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-quiz-background">
      <Header />
      
      {/* Quiz Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge variant="outline" className="text-quiz-primary border-quiz-primary">
                السؤال {currentQuestion + 1} من {questions.length}
              </Badge>
              <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Link href={`/category/${categoryId}`} className="text-gray-600 hover:text-quiz-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <Progress value={progress} className="mt-4 h-2" />
        </div>
      </section>

      {/* Ad 4 */}
      <AdSense4 />

      {/* Question Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-relaxed">
                    {currentQ.question}
                  </h2>
                  <p className="text-gray-600">اختر الإجابة الصحيحة</p>
                </div>

                <div className="space-y-4">
                  {currentQ.options.map((choice, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        selectedAnswer === index
                          ? 'ring-2 ring-quiz-primary bg-quiz-primary/5 border-quiz-primary'
                          : 'hover:border-quiz-primary/50'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-right flex-1">{choice}</span>
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 ${
                              selectedAnswer === index
                                ? 'bg-quiz-primary border-quiz-primary'
                                : 'border-gray-300'
                            }`}
                          >
                            {selectedAnswer === index && (
                              <div className="w-3 h-3 rounded-full bg-white"></div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    onClick={handleNextQuestion}
                    className="bg-quiz-primary hover:bg-quiz-primary/90 px-8 py-3 text-lg"
                    disabled={selectedAnswer === null}
                  >
                    {currentQuestion + 1 === questions.length ? 'إنهاء الاختبار' : 'السؤال التالي'}
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad 5 */}
      <AdSense5 />

      <Footer />
    </div>
  );
}