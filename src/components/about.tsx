import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { getAllSkills, type Skill } from "@/action/skill";
import { getSettings } from "@/action/cv";

const categoryLabels: Record<string, string> = {
  programming: "Programming",
  tool: "Tools",
  database: "Databases",
  other: "Other",
};

export const AboutSection = async () => {
  const [skills, settings] = await Promise.all([getAllSkills(), getSettings()]);
  const heroImage = settings.heroImageUrl || "/og-image.png";

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || "other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section
      id="about"
      className="md:px-[7vw] lg:px-[10vw] mt-10 z-20 max-w-[100rem] mx-auto items-center justify-center flex"
    >
      <div className="w-full px-7 py-5 md:p-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-700">About Me</h2>

        <div className="flex justify-start items-start gap-10 flex-col md:flex-row">
          <div className="flex flex-col items-center">
            <Image
              priority
              src={heroImage}
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
            <h3 className="font-bold text-gray-700 text-2xl my-3">
              Zahra Maulida Kurnia
            </h3>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-lg">
                <FaLocationDot className="text-thirdy text-sm" />
              </div>
              <p className="text-xs font-semibold text-slate-800">
                Bekasi City, West Java, Indonesia
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 flex items-center justify-center bg-primary rounded-lg">
                <MdEmail className="text-thirdy text-sm" />
              </div>
              <Link
                href="mailto:zahramaulida254@gmail.com"
                className="text-sm text-slate-800 font-semibold"
              >
                zahramaulida254@gmail.com
              </Link>
            </div>

            <div className="mb-6">
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
              <h4 className="font-semibold text-gray-700 mb-2">
                Related Skills
              </h4>
              {Object.entries(groupedSkills).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    {categoryLabels[category] || category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <div
                        key={skill.name}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
