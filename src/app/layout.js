import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Awais | Full Stack & React Native Developer",

  description:
    "Portfolio of Muhammad Awais, a Software Engineering student and developer specializing in React Native, MERN stack, Next.js, responsive websites, and modern web applications.",

  keywords: [
    "Muhammad Awais",
    "React Native Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "Lahore Pakistan",
  ],

  authors: [
    {
      name: "Muhammad Awais",
    },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
