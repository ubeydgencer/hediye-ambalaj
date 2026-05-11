import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hediye Ambalaj | Beylikdüzü, İstanbul",
  description: "İstanbul Beylikdüzü'nde profesyonel hediye ambalaj ve matbaa hizmetleri. Özel tasarım kutu, kurdele, poşet ve daha fazlası. 5★ Google puanı.",
  keywords: "hediye ambalaj, ambalaj, matbaa, beylikdüzü, istanbul, özel kutu, kurdele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
