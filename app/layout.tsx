import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Nav from "./(layout)/Nav";
import { Lang } from "./context/LangToggleContext";
import Footer from "./(layout)/Footer";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";

const Font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janasevaa",
  description: "Janasevaa for India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <Lang>
          <ClientOnly>
            <RegisterModal />
            <LoginModal />
            <Nav />
          </ClientOnly>
          {children}
          <Footer />
        </Lang>
      </body>
    </html>
  );
}
