import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Add inline CSS for critical brand colors to ensure they're available
const inlineStyles = `
:root {
  --brand-light-green: 142 23% 77%;
  --brand-medium-green: 153 18% 63%;
  --brand-dark-green: 145 27% 29%;
  --brand-tan: 28 59% 66%;
  --brand-black: 0 0% 12%;
  --brand-white: 0 0% 100%;
}
.bg-brand-dark-green {
  background-color: hsl(145 27% 29%);
}
.text-brand-white {
  color: hsl(0 0% 100%);
}
`;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Choice Insurance Agency - Health, Life & Medicare",
  description: "Your trusted partner for Medicare, Life & Health insurance in IL, GA, TX, AL, OH, KY, MS, SC. Personalized plans and expert guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

