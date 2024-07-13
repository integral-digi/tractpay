import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { ContentProvider } from "../app/context/ContentContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tractpay | Simplifying your financial transactions",
  description: "Clash Ultra Next JS Gaming Template",
};

const roboto = Roboto_Flex({ subsets: ['latin'] });

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={roboto.className}>
          <ContentProvider>
            {children}
          </ContentProvider>
        </body>
      </html>
  );
}
