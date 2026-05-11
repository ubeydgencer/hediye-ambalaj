"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "İletişim", href: "#iletisim" },
];

const SERVICES = [
  {
    icon: "🎁",
    title: "Hediye Kutuları",
    desc: "Her ölçü ve tasarımda özel hediye kutuları. Marka baskılı, pencereli veya sade seçenekler.",
  },
  {
    icon: "🎀",
    title: "Kurdele & Fiyonk",
    desc: "Ambalajınızı tamamlayan renkli kurdele ve fiyonk çeşitleri. Toptan ve perakende.",
  },
  {
    icon: "🛍️",
    title: "Hediye Poşetleri",
    desc: "Kağıt ve karton hediye poşetleri. Logo baskılı veya hazır desen seçenekleri.",
  },
  {
    icon: "🖨️",
    title: "Matbaa Hizmetleri",
    desc: "Özel baskı, kesim ve şekillendirme. Küçük ölçekten büyük sipariş miktarlarına kadar.",
  },
  {
    icon: "📦",
    title: "Karton Ambalaj",
    desc: "Ürün koruma ve sunum için özel tasarım karton ambalaj çözümleri.",
  },
  {
    icon: "✨",
    title: "Özel Tasarım",
    desc: "Markanıza özel tasarım ve üretim. Konseptten teslimata kadar tam destek.",
  },
];

const REASONS = [
  { number: "5★", label: "Google Puanı" },
  { number: "15+", label: "Yıllık Deneyim" },
  { number: "1000+", label: "Mutlu Müşteri" },
  { number: "Hızlı", label: "Teslimat" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: "#FAF7F2", color: "#1a1a1a" }}>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C9A84C" }}>
              Hediye Ambalaj
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+905068639233"
              className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Bizi Arayın
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <div className="w-5 h-0.5 bg-stone-700 mb-1" />
            <div className="w-5 h-0.5 bg-stone-700 mb-1" />
            <div className="w-5 h-0.5 bg-stone-700" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-stone-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+905068639233"
              className="text-sm font-semibold px-4 py-2 rounded-full text-white text-center"
              style={{ backgroundColor: "#C9A84C" }}
            >
              Bizi Arayın
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-6 min-h-[90vh]"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2416 50%, #1a1a1a 100%)",
          color: "#FAF7F2",
        }}
      >
        <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>
          Beylikdüzü · İstanbul
        </p>
        <h1
          className="text-5xl md:text-7xl mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          Her Hediyeyi
          <br />
          <span style={{ color: "#C9A84C" }}>Özel Kılan</span>
          <br />
          Ambalaj
        </h1>
        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-10 leading-relaxed">
          Özel tasarım kutular, kurdeleler, poşetler ve matbaa hizmetleriyle
          ürünlerinizi fark yaratan bir sunuma kavuşturun.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#iletisim"
            className="px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#C9A84C" }}
          >
            Bizimle İletişime Geçin
          </a>
          <a
            href="#hizmetler"
            className="px-8 py-4 rounded-full font-semibold border border-stone-500 text-stone-200 transition-colors hover:border-stone-300"
          >
            Hizmetlerimiz
          </a>
        </div>

        {/* Stars */}
        <div className="mt-16 flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl" style={{ color: "#C9A84C" }}>★</span>
            ))}
          </div>
          <span className="text-stone-400 text-sm">Google'da 5.0 puan</span>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" className="py-24 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>
              Hakkımızda
            </p>
            <h2
              className="text-4xl md:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Ambalajda
              <br />Güvenilir Adres
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              İstanbul Beylikdüzü, 3. Matbaacılar Sanayi Sitesi&apos;nde faaliyet gösteren
              Hediye Ambalaj; yılların verdiği tecrübeyle özel tasarım ambalaj ve
              matbaa hizmetleri sunmaktadır.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Bireysel müşterilerden kurumsal firmalara kadar her ölçekte siparişi
              titizlikle üretip zamanında teslim ediyoruz. Google&apos;da aldığımız 5★
              puan, müşteri memnuniyetine verdiğimiz önemin en güzel kanıtıdır.
            </p>
            <a
              href="tel:+905068639233"
              className="inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#C9A84C" }}
            >
              📞 0506 863 92 33
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {REASONS.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#F0EBE0" }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
                >
                  {r.number}
                </div>
                <div className="text-sm text-stone-600 font-medium">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="py-24 px-6" style={{ backgroundColor: "#F0EBE0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>
              Hizmetler
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Neler Sunuyoruz?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section id="neden-biz" className="py-24 px-6" style={{ backgroundColor: "#1a1a1a", color: "#FAF7F2" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>
            Neden Biz?
          </p>
          <h2
            className="text-4xl md:text-5xl mb-12"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Farkımızı Hissedeceksiniz
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Kaliteli Malzeme",
                desc: "Dayanıklı, estetik ve çevre dostu malzemelerle üretim yapıyoruz.",
              },
              {
                title: "Özel Tasarım",
                desc: "Markanıza veya isteğinize göre sıfırdan tasarım imkânı sunuyoruz.",
              },
              {
                title: "Hızlı Teslimat",
                desc: "Siparişlerinizi kararlaştırılan sürede eksiksiz teslim ediyoruz.",
              },
              {
                title: "Uygun Fiyat",
                desc: "Küçük ya da büyük sipariş fark etmez, rekabetçi fiyatlar sunuyoruz.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 border border-stone-700"
                style={{ backgroundColor: "#2d2416" }}
              >
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: "#C9A84C" }} />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="py-24 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "#C9A84C" }}>
              İletişim
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Bize Ulaşın
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  label: "Adres",
                  value: "Yakuplu Mah. 3.Matbaacılar San. Sit. No:211, 34524 Beylikdüzü/İstanbul",
                  href: "https://maps.app.goo.gl/HGvU1YYPcR9dwtYz5",
                },
                {
                  icon: "📞",
                  label: "Telefon",
                  value: "0506 863 92 33",
                  href: "tel:+905068639233",
                },
                {
                  icon: "🌐",
                  label: "Website",
                  value: "hediyeambalaj.com",
                  href: "https://hediyeambalaj.com",
                },
                {
                  icon: "🕐",
                  label: "Çalışma Saatleri",
                  value: "Pazartesi – Cumartesi: 08:30 – 18:00",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-medium text-stone-800 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-stone-800">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="tel:+905068639233"
                className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105 w-full sm:w-auto"
                style={{ backgroundColor: "#C9A84C" }}
              >
                📞 Hemen Arayın
              </a>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-full min-h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.56!2d28.6756885!3d41.0038371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1e9685aff45%3A0xd058e2d25bad8df2!2sHediye%20Ambalaj!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hediye Ambalaj Konum"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/905068639233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp ile iletişime geçin"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center text-sm text-stone-400 border-t border-stone-200"
        style={{ backgroundColor: "#FAF7F2" }}
      >
        <p style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C", fontWeight: 600 }}>
          Hediye Ambalaj
        </p>
        <p className="mt-1">© {new Date().getFullYear()} Tüm hakları saklıdır.</p>
        <p className="mt-1">Yakuplu Mah. 3.Matbaacılar San. Sit. No:211, Beylikdüzü/İstanbul</p>
      </footer>
    </div>
  );
}
