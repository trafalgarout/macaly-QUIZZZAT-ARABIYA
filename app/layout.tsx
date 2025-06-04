import "./globals.css";
import type { Metadata } from "next";
import { Cairo, Noto_Sans_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo"
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-arabic"
});

export const metadata: Metadata = {
  title: "دارالمعرفة - منصة الاختبارات التعليمية والترفيهية",
  description: "منصة دارالمعرفة للاختبارات التعليمية والترفيهية. استكشف أكثر من 20 فئة و 600 اختبار مختلف في مواضيع متنوعة. اختبر معرفتك واستمتع بالتعلم!",
  keywords: "اختبارات, تعليم, ترفيه, معرفة, أسئلة, ثقافة عامة, علوم, تاريخ, جغرافيا, رياضة",
  authors: [{ name: "دارالمعرفة" }],
  openGraph: {
    title: "دارالمعرفة - منصة الاختبارات التعليمية والترفيهية",
    description: "استكشف أكثر من 20 فئة و 600 اختبار في مواضيع متنوعة. اختبر معرفتك واستمتع بالتعلم!",
    url: "https://dar-almaarifa.com",
    siteName: "دارالمعرفة",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "دارالمعرفة - منصة الاختبارات التعليمية والترفيهية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دارالمعرفة - منصة الاختبارات التعليمية والترفيهية",
    description: "استكشف أكثر من 20 فئة و 600 اختبار في مواضيع متنوعة",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-adsense-account" content="ca-pub-6865939387108271" />
      </head>
      <body className={`${cairo.variable} ${notoSansArabic.variable} font-arabic bg-quiz-background text-quiz-text`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}