import { getAllProjects } from "@/action/project";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Analisis Prediksi Harga Saham",
    description:
      "Proyek machine learning untuk memprediksi pergerakan harga saham menggunakan algoritma LSTM dan Random Forest. Mengolah data historis saham dan indikator teknikal untuk memberikan prediksi yang akurat dengan tingkat akurasi 85%.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Sistem Rekomendasi E-Commerce",
    description:
      "Membangun sistem rekomendasi produk menggunakan collaborative filtering dan content-based filtering. Menganalisis pola perilaku konsumen dan preferensi untuk meningkatkan penjualan hingga 30% melalui personalisasi rekomendasi.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    title: "Analisis Sentimen Media Sosial",
    description:
      "Mengembangkan model NLP untuk menganalisis sentimen publik terhadap brand di media sosial. Menggunakan teknik text preprocessing, feature extraction, dan deep learning untuk klasifikasi sentimen dengan akurasi 92%.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

type Project = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  startDate: string;
  endDate?: string;
  isOngoing: boolean;
  link: string;
};

export default async function ProjectSection() {
  const projects: Project[] = await getAllProjects();

  return (
    <section
      id="projects"
      className="md:px-[7vw] px-10 pb-20 lg:px-[10vw] my-10 max-w-[100rem] mx-auto flex flex-col"
    >
      <h2 className="text-2xl sm:text-3xl text-start font-bold text-gray-800 mb-12">
        Projects
      </h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`flex flex-col items-center gap-6 lg:gap-12 lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                priority
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                Visit Project →
              </Link>

              <div className="mt-2 text-xs text-gray-500">
                {project.isOngoing
                  ? "Ongoing"
                  : `Finished: ${new Date(
                      project.endDate ?? ""
                    ).toLocaleDateString()}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
