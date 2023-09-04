import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Nav from "./(layout)/Nav";
import { Lang } from "./context/LangToggleContext";
import Footer from "./(layout)/Footer";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import Head from "next/head";
import Link from "next/link";

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
          <div className=" bottom-10 z-10 fixed right-10 ">
            <Link href={"/Report"}>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-blue-900 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Report an Issue ?
              </button>
            </Link>
          </div>
          <Footer />
        </Lang>
      </body>
    </html>
  );
}
