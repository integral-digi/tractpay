import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ContentProvider } from "../app/context/ContentContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tractpay | Simplifying your financial transactions",
  description: "Experience the convenience and efficiency of Tractpay today. Whether you're an individual looking to streamline personal finances or a business in need of a reliable payment solution",
};

const roboto = Outfit({ subsets: ['latin'] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`dark:bg-slate-900 ${roboto.className}`}>
          <ContentProvider>
            {children}
          </ContentProvider>
        </body>
      </html>
  );
}
