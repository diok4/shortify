import "./globals.css";
import { Roboto } from "next/font/google";
import ClientRoot from "./client-root";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Shortify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
