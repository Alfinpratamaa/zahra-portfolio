import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Zahra Maulida Kurnia",
  description:
    "A Data scientiest based on bekasi, Indonesia. Have a great passion in data analysis, data visualization, and machine learning.",
  keywords: [
    "Data Scientist",
    "Data Analysis",
    "Data Visualization",
    "Machine Learning",
    "Python",
    "R",
    "SQL",
    "Tableau",
    "Power BI",
    "Bekasi",
    "Indonesia",
  ],
  authors: [{ name: "Zahra Maulida Kurnia", url: "https://zakurnia.me" }],
  openGraph: {
    title: "Zahra Maulida Kurnia",
    description:
      "A Data scientiest based on bekasi, Indonesia. Have a great passion in data analysis, data visualization, and machine learning. Passionate about turning data into actionable insights and driving business growth through data-driven decision making.",
    url: "https://zakurnia.me",
    siteName: "Zahra Maulida Kurnia",
    images: [
      {
        url: "https://zakurnia.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zahra Maulida Kurnia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
