import type { Metadata } from "next";
import { Prosto_One } from "next/font/google";
import "./globals.css";

const font = Prosto_One({ subsets: ["latin"], weight: '400'});


export const metadata: Metadata = {
  title: "Южная Академия Бокса",
  description: "Южная Академия Бокса | South Box Academic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lobster&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Exo+2:ital,wght@0,100..900;1,100..900" rel="stylesheet"/>
        
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
