import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { inter } from "./styles/font";


export const metadata: Metadata = {
  title: "Cripto App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
