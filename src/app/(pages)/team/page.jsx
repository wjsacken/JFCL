import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedTeamData } from "@library/team";

import PageBanner from "@components/PageBanner";
import RecruitSection from "@components/sections/Recruit";

const TeamMasonry = dynamic( () => import("@components/TeamMasonry"), { ssr: false } );

export const metadata = {
  title: {
		default: "Team",
	},
  description: AppData.settings.siteDescription,
}

async function Team() {
  const team = await getAllTeam();
  
  return (
    <>
      <PageBanner width="1300" height="300" pageTitle={"Attorneys"} bgImage={"/img/photo/12.jpg"} />
         
      {/* team */}
      <section>
        <div className="container mil-p-120-60">
            <div className="mil-background-grid mil-softened" />

            <Suspense fallback={<div>Loading...</div>}>
                <TeamMasonry team={team} categories={AppData.team.categories} />
            </Suspense>
        </div>
      </section>
      {/* team end */}

      <RecruitSection />
    </>
  );
};
export default Team;

async function getAllTeam() {
  const allTeam = getSortedTeamData();
  return allTeam;
}