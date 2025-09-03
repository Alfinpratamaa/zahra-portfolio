import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const skills = [
  { name: "Python", icon: "/python.png" },
  { name: "Pandas", icon: "/pandas.png" },
  { name: "Numpy", icon: "/numpy.png" },
  { name: "Rapid Miner", icon: "/rapid-miner.png" },
  { name: "Mysql", icon: "/mysql.png" },
];

const workExperiences = [
  {
    title: "Secretary",
    organization: "Himpunan Mahasiswa Departemen Matematika",
    period: "2023 - 2024",
    description:
      "Responsible for administrative tasks and documentation of organizational activities",
  },
  {
    title: "Member",
    organization: "Himpunan Mahasiswa Departemen Matematika",
    period: "2022 - 2023",
    description:
      "Active participant in departmental events and academic activities",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="md:px-[7vw] lg:px-[10vw] mt-10 z-20 max-w-[100rem] mx-auto items-center justify-center flex"
    >
      <div className="w-full px-7 py-5 md:p-10">
        <h2 className="text-4xl font-bold mb-6 text-secondary">About Me</h2>

        {/* INI BAGIAN YANG DIUBAH */}
        <div className="flex justify-start items-start gap-10 flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <Image
              priority
              src={"/og-image.png"}
              alt="Zahra Maulida Kurnia"
              width={400}
              height={400}
              className="rounded-[50] mb-6"
            />
            <div className="flex items-center gap-3 text-thirdy text-3xl justify-center">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/zahramaulidak"
                aria-label="Visit my LinkedIn profile (opens in a new tab)"
              >
                <FiLinkedin />
              </Link>
              <Link
                target="_blank"
                href="https://wa.me/6282113905090"
                aria-label="Contact me on WhatsApp (opens in a new tab)"
              >
                <FaWhatsapp />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/zhrmaulidaaa"
                aria-label="Follow me on Instagram (opens in a new tab)"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-w-md">
            {/* From text-gray-400 to a darker text-gray-700 */}
            <h3 className="font-bold text-gray-700 text-2xl my-3">
              Zahra Maulida Kurnia
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-lg">
                <FaLocationDot className="text-thirdy text-sm" />
              </div>
              {/* From text-secondary to a darker, compliant color like text-slate-800 */}
              <p className="text-xs font-semibold text-slate-800">
                Bekasi City, West Java, Indonesia
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-lg">
                <MdEmail className="text-thirdy text-sm" />
              </div>
              {/* Also changed text-secondary here */}
              <Link
                href="mailto:zahramaulida254@gmail.com"
                className="text-sm text-slate-800 font-semibold"
              >
                zahramaulida254@gmail.com
              </Link>
            </div>

            <div className="mb-6">
              {/* From text-gray-400 to text-gray-700 */}
              <h4 className="font-semibold text-gray-700 mb-1">My Education</h4>
              <div className="flex justify-between text-xs leading-tight">
                <p>
                  Majoring in Mathematics,
                  <br /> Universitas Indonesia
                </p>
                <p className="text-xs whitespace-nowrap pl-4">
                  2022 – present (Final Year)
                </p>
              </div>
            </div>

            <div className="mb-6">
              {/* From text-gray-400 to text-gray-700 */}
              <h4 className="font-semibold text-gray-700 mb-2">
                Related Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-primary rounded-lg p-3 text-xs text-pink-700 w-20 h-20"
                  >
                    <div className="w-8 h-8 flex items-center justify-center mb-1">
                      <Image
                        draggable={false}
                        alt={`${skill.name} logo icon`}
                        className="max-w-full max-h-full object-contain"
                        height={32}
                        src={skill.icon}
                        width={32}
                      />
                    </div>
                    <span className="text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work/Organization Experience Section */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-secondary">
            Work & Organization Experience
          </h3>
          <div className="space-y-6">
            {workExperiences.map((experience, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="font-bold text-lg text-secondary">
                      {experience.title}
                    </h4>
                    <p className="text-gray-400 font-semibold">
                      {experience.organization}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {experience.description}
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 md:text-right mt-2 md:mt-0 whitespace-nowrap">
                    {experience.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
