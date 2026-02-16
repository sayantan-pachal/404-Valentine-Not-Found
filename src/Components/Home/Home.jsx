import React from "react";

// Home page sections
import HomeIntro from "./Parts/HomeIntro";
import HomeWork from "./Parts/HomeWork";
import HomeEdu from "./Parts/HomeEdu";

// Contact form section
import ContactForm from "../Contact/Containers/ContactForm";

export default function Home() {
  return (
    // Main wrapper with light/dark gradient background
    <div
      className="bg-[linear-gradient(180deg,#fff7e6,#ffe6cc)] dark:bg-[linear-gradient(180deg,#0f1724,#05060a_60%)]"
      role="main"
      aria-label="Main content of the home page"
    >
      {/* Intro / Hero section */}
      <HomeIntro />

      {/* Work / Projects section */}
      <HomeWork />

      {/* Education section */}
      <HomeEdu />

      {/* Contact section */}
      <section
        id="contact"
        className="p-[40px_120px] max-[900px]:p-[20px_40px] text-white"
      >
        <ContactForm />
      </section>
    </div>
  );
}
