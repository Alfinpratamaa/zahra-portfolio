import { BgCustom } from "@/components/bg-custom";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <BgCustom className="h-120" />
      <section
        id="home"
        className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden p-20 gap-10 px-4 sm:px-6 md:px-[7vw] lg:px-[10vw] max-w-[100rem] mx-auto "
      >
        {/* Bagian Heading + Button */}
        <div className="flex-1 relative z-10 px-4 sm:px-8 lg:px-20 text-center lg:text-left mb-8 lg:mb-0 order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight lg:leading-24 text-secondary">
            Hello, <br className="hidden lg:block" /> I am
            <br className="hidden lg:block" /> Zahra
          </h1>

          {/* Button khusus desktop */}
          <button className="hidden lg:inline-block mt-8 lg:mt-12 px-6 sm:px-8 lg:px-10 cursor-pointer py-3 sm:py-4 lg:py-5 rounded-2xl bg-primary text-black font-semibold shadow hover:bg-pink-200 transition">
            DOWNLOAD CV
          </button>
        </div>

        {/* Bagian Deskripsi */}
        <div className="flex-1 max-w-md text-gray-600 relative z-10 px-4 sm:px-6 lg:mr-32 lg:border-l border-secondary lg:pl-10 text-center lg:text-left order-2">
          <p className="text-sm sm:text-base">
            A data scientist based on Bekasi, Indonesia. Have a great passion in
            data analysis, data visualization, and machine learning. Passionate
            about turning data into actionable insights and driving business
            growth through data-driven decision making.
          </p>
        </div>

        {/* Button khusus mobile */}
        <div className="block lg:hidden order-3 relative z-10">
          <Link
            href="/cv_zahra.pdf"
            className="mt-8 px-6 sm:px-8 cursor-pointer py-3 sm:py-4 rounded-2xl bg-primary text-black font-semibold shadow hover:bg-pink-200 transition"
          >
            DOWNLOAD CV
          </Link>
        </div>
      </section>
    </>
  );
}
