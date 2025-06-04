export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
  categoryId: number;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number; // in minutes
}

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  quizCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "التاريخ الإسلامي",
    description: "اختبر معرفتك في التاريخ الإسلامي والحضارة الإسلامية",
    icon: "🕌",
    color: "from-emerald-400 to-emerald-600",
    gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    quizCount: 30
  },
  {
    id: 2,
    name: "الجغرافيا العربية",
    description: "تعرف على البلدان العربية ومعالمها الجغرافية",
    icon: "🌍",
    color: "from-blue-400 to-blue-600",
    gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    quizCount: 30
  },
  {
    id: 3,
    name: "الأدب العربي",
    description: "استكشف روائع الأدب العربي والشعر",
    icon: "📚",
    color: "from-purple-400 to-purple-600",
    gradient: "bg-gradient-to-br from-purple-400 to-purple-600",
    quizCount: 30
  },
  {
    id: 4,
    name: "العلوم والطبيعة",
    description: "اختبارات في العلوم الطبيعية والاكتشافات العلمية",
    icon: "🔬",
    color: "from-green-400 to-green-600",
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
    quizCount: 30
  },
  {
    id: 5,
    name: "الرياضة العربية",
    description: "كل ما يخص الرياضة في العالم العربي",
    icon: "⚽",
    color: "from-orange-400 to-orange-600",
    gradient: "bg-gradient-to-br from-orange-400 to-orange-600",
    quizCount: 30
  },
  {
    id: 6,
    name: "المأكولات العربية",
    description: "تعرف على المأكولات الشعبية والتراثية",
    icon: "🍽️",
    color: "from-red-400 to-red-600",
    gradient: "bg-gradient-to-br from-red-400 to-red-600",
    quizCount: 30
  },
  {
    id: 7,
    name: "الفنون والثقافة",
    description: "الفنون الشعبية والثقافة العربية",
    icon: "🎨",
    color: "from-pink-400 to-pink-600",
    gradient: "bg-gradient-to-br from-pink-400 to-pink-600",
    quizCount: 30
  },
  {
    id: 8,
    name: "التكنولوجيا",
    description: "آخر التطورات في عالم التكنولوجيا",
    icon: "💻",
    color: "from-indigo-400 to-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    quizCount: 30
  },
  {
    id: 9,
    name: "الصحة والطب",
    description: "معلومات طبية وصحية مفيدة",
    icon: "🏥",
    color: "from-teal-400 to-teal-600",
    gradient: "bg-gradient-to-br from-teal-400 to-teal-600",
    quizCount: 30
  },
  {
    id: 10,
    name: "الاقتصاد والمال",
    description: "مفاهيم اقتصادية ومالية أساسية",
    icon: "💰",
    color: "from-yellow-400 to-yellow-600",
    gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    quizCount: 30
  },
  {
    id: 11,
    name: "السياحة والسفر",
    description: "أجمل الوجهات السياحية في العالم العربي",
    icon: "✈️",
    color: "from-cyan-400 to-cyan-600",
    gradient: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    quizCount: 30
  },
  {
    id: 12,
    name: "الألعاب والتسلية",
    description: "ألعاب ذهنية وأسئلة تسلية",
    icon: "🎮",
    color: "from-violet-400 to-violet-600",
    gradient: "bg-gradient-to-br from-violet-400 to-violet-600",
    quizCount: 30
  },
  {
    id: 13,
    name: "الطبيعة والبيئة",
    description: "عالم الطبيعة والحفاظ على البيئة",
    icon: "🌱",
    color: "from-lime-400 to-lime-600",
    gradient: "bg-gradient-to-br from-lime-400 to-lime-600",
    quizCount: 30
  },
  {
    id: 14,
    name: "الفضاء والكون",
    description: "استكشاف الفضاء والكواكب",
    icon: "🚀",
    color: "from-slate-400 to-slate-600",
    gradient: "bg-gradient-to-br from-slate-400 to-slate-600",
    quizCount: 30
  },
  {
    id: 15,
    name: "الموسيقى والغناء",
    description: "الموسيقى العربية والأغاني التراثية",
    icon: "🎵",
    color: "from-rose-400 to-rose-600",
    gradient: "bg-gradient-to-br from-rose-400 to-rose-600",
    quizCount: 30
  },
  {
    id: 16,
    name: "السينما والمسرح",
    description: "الفن السابع والمسرح العربي",
    icon: "🎬",
    color: "from-amber-400 to-amber-600",
    gradient: "bg-gradient-to-br from-amber-400 to-amber-600",
    quizCount: 30
  },
  {
    id: 17,
    name: "اللغة العربية",
    description: "قواعد وبلاغة اللغة العربية",
    icon: "📝",
    color: "from-emerald-500 to-emerald-700",
    gradient: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    quizCount: 30
  },
  {
    id: 18,
    name: "الدين والفقه",
    description: "أحكام دينية ومعلومات إسلامية",
    icon: "☪️",
    color: "from-blue-500 to-blue-700",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    quizCount: 30
  },
  {
    id: 19,
    name: "الشخصيات التاريخية",
    description: "أهم الشخصيات في التاريخ العربي والإسلامي",
    icon: "👑",
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    quizCount: 30
  },
  {
    id: 20,
    name: "الثقافة العامة",
    description: "معلومات متنوعة في شتى المجالات",
    icon: "🧠",
    color: "from-gray-500 to-gray-700",
    gradient: "bg-gradient-to-br from-gray-500 to-gray-700",
    quizCount: 30
  }
];

// Sample quiz data for demonstration
export const sampleQuizzes: Quiz[] = [
  {
    id: 1,
    title: "الخلفاء الراشدون",
    description: "اختبر معرفتك بتاريخ الخلفاء الراشدين",
    categoryId: 1,
    difficulty: 'medium',
    estimatedTime: 10,
    questions: [
      {
        id: 1,
        question: "من هو أول الخلفاء الراشدين؟",
        options: ["علي بن أبي طالب", "عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "معاوية بن أبي سفيان"],
        correctAnswer: 2,
        explanation: "أبو بكر الصديق رضي الله عنه هو أول الخلفاء الراشدين وأول من آمن من الرجال"
      },
      {
        id: 2,
        question: "كم سنة حكم عمر بن الخطاب رضي الله عنه؟",
        options: ["8 سنوات", "10 سنوات", "12 سنة", "15 سنة", "6 سنوات"],
        correctAnswer: 1,
        explanation: "حكم عمر بن الخطاب رضي الله عنه لمدة 10 سنوات من 13-23 هجرية"
      },
      {
        id: 3,
        question: "من الذي لُقب بـ 'ذي النورين'؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "الحسن بن علي"],
        correctAnswer: 2,
        explanation: "عثمان بن عفان رضي الله عنه لُقب بذي النورين لزواجه من ابنتي الرسول ﷺ"
      },
      {
        id: 4,
        question: "في أي معركة استشهد علي بن أبي طالب؟",
        options: ["معركة صفين", "معركة الجمل", "معركة النهروان", "لم يستشهد في معركة", "معركة اليرموك"],
        correctAnswer: 3,
        explanation: "علي بن أبي طالب رضي الله عنه لم يستشهد في معركة وإنما اغتاله ابن ملجم في المسجد"
      },
      {
        id: 5,
        question: "من جمع القرآن الكريم في مصحف واحد؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "زيد بن ثابت"],
        correctAnswer: 2,
        explanation: "عثمان بن عفان رضي الله عنه هو من أمر بجمع القرآن في مصحف واحد ونسخه"
      },
      {
        id: 6,
        question: "ما هو لقب أبي بكر الصديق؟",
        options: ["الفاروق", "ذو النورين", "الصديق", "أسد الله", "سيف الله"],
        correctAnswer: 2,
        explanation: "أبو بكر رضي الله عنه لُقب بالصديق لتصديقه للرسول ﷺ في رحلة الإسراء والمعراج"
      },
      {
        id: 7,
        question: "في عهد أي خليفة فُتحت مصر؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "معاوية بن أبي سفيان"],
        correctAnswer: 1,
        explanation: "فُتحت مصر في عهد عمر بن الخطاب رضي الله عنه على يد عمرو بن العاص"
      },
      {
        id: 8,
        question: "من أنشأ الديوان في الإسلام؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "معاوية بن أبي سفيان"],
        correctAnswer: 1,
        explanation: "عمر بن الخطاب رضي الله عنه هو أول من أنشأ نظام الديوان لتنظيم شؤون الدولة"
      },
      {
        id: 9,
        question: "كم استمرت خلافة أبي بكر الصديق؟",
        options: ["سنة واحدة", "سنتان وثلاثة أشهر", "ثلاث سنوات", "أربع سنوات", "خمس سنوات"],
        correctAnswer: 1,
        explanation: "استمرت خلافة أبي بكر الصديق رضي الله عنه حوالي سنتين وثلاثة أشهر"
      },
      {
        id: 10,
        question: "من القائل: 'لو كان الفقر رجلاً لقتلته'؟",
        options: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب", "خالد بن الوليد"],
        correctAnswer: 3,
        explanation: "هذا القول منسوب لعلي بن أبي طالب رضي الله عنه في إشارة لمحاربة الفقر والظلم"
      }
    ]
  }
];

export function getQuizzesByCategory(categoryId: number): Quiz[] {
  return sampleQuizzes.filter(quiz => quiz.categoryId === categoryId);
}

export function getQuizById(quizId: number): Quiz | undefined {
  return sampleQuizzes.find(quiz => quiz.id === quizId);
}

export function getCategoryById(categoryId: number): Category | undefined {
  return categories.find(category => category.id === categoryId);
}