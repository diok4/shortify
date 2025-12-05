import { Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/widgets/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div className="flex">
          <NavBar />
          <main className="w-full bg-blue-50 h-screen py-3 px-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
