import React, { Suspense } from "react";
import AppData from "@data/app.json";


import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import CoresSection from "@components/sections/Cores";
export const runtime = 'edge';
export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {

  return (
    <>
      <HeroOneSection />
      <AboutSection />
      <IdeasSection />
      <CoresSection />
    </>
  );
};
export default Home1;
