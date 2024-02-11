import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "../../styles/globals.css";

const cocoSharpTrial = localFont({
  src: [
    {
      style: 'normal',
      weight: '400',
      path: "../vendor/fonts/CocoSharp-Regular-trial.otf",
    },
    {
      style: 'normal',
      weight: '900',
      path: "../vendor/fonts/CocoSharp-Bold-trial.otf",
    },
  ]
})

export const metadata: Metadata = {
  title: "BGP AUTO",
  description: "Сайт автосервиса BGP auto. Сar service BGP AUTO. Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cocoSharpTrial.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
