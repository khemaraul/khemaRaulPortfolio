import About from "@/components/about";
import Contact from "@/components/contact";
import ConvertToPDF from "@/components/convertToPDF";
import Intro from "@/components/intro";
import ResumeBackup from "@/components/resume-backup";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <ResumeBackup />
      <Contact />
      {/* <ConvertToPDF /> */}
    </main>
  );
}
