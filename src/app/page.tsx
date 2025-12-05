"use client";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Qualities from "@/components/Qualities";
import Skills from "@/components/Skills";
import Study from "@/components/Study";
import Ui from "@/components/Ui";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0c0a09] text-white py-6 px-6 md:px-16">
        <Header />
        <WorkSection />
        <Experience />
        <Skills />
        <Study />
        <Qualities />
        <Ui />
      </div>
    </>
  );
}
