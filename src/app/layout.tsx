import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptPay – Get Paid Faster Without Chasing Clients",
  description:
    "PromptPay helps freelancers and small businesses get paid faster by automating invoice follow-ups via email and WhatsApp. No stress, no awkward conversations.",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PromptPay – Get Paid Faster Without Chasing Clients",
    description:
      "Automate invoice reminders with PromptPay. Email & WhatsApp follow-ups that help freelancers and small businesses get paid faster.",
    images: ["/og-image.png"],
    url: "https://prompt-pay-l1cq.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://prompt-pay-l1cq.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PromptPay",
              operatingSystem: "All",
              applicationCategory: "FinanceApplication",
              description:
                "PromptPay helps freelancers and small businesses get paid faster by automating invoice follow-ups via email and WhatsApp.",
              url: "https://prompt-pay-l1cq.vercel.app",
              creator: {
                "@type": "Person",
                name: "Tinuz",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <header>
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">
                    PromptPay
                  </span>
                </div>
                <div className="hidden sm:flex sm:space-x-8">
                  <a
                    href="#features"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    How it Works
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
