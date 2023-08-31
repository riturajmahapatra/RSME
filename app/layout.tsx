import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Nav from "./(layout)/Nav";
import { Lang } from "./context/LangToggleContext";
import Footer from "./(layout)/Footer";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";

const Font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janasevaa",
  description: "Janasevaa for India",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={Font.className}>
        <Lang>
          <ToasterProvider />
          <Nav />

          {children}
          <Footer />
        </Lang>
      </body>
    </html>
  );
}
