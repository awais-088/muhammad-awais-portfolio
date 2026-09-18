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
  title: "Muhammad Awais | Software Engineer & Full-Stack Developer",

  description:
    "Muhammad Awais is a final-year Software Engineering student and full-stack developer specializing in React, Next.js, React Native, Node.js, MongoDB, and modern web and mobile applications.",

  keywords: [
    "Muhammad Awais",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "Pakistan",
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
