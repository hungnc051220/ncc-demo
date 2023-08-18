import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AuthContext from "@/providers/auth-context";
import ToasterContext from "@/providers/toast-context";
import Overlay from "@/components/overlay";
import getCurrentUser from "./actions/getCurrentUser";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trung tâm chiếu phim quốc gia",
  description: "Phát triển bởi HungNC",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${font.className} scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-slate-800`}
      >
        <AuthContext>
          <ToasterContext />
          <Navbar />
          {children}
          <Footer />
          <Overlay currentUser={currentUser}/>
        </AuthContext>
      </body>
    </html>
  );
}
