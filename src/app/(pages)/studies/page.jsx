import React, { Suspense }  from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";
const ProjectsMasonry = dynamic( () => import("@components/ProjectsMasonry"), { ssr: false } );
import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";
export const runtime = 'edge';
export const metadata = {
  title: {
		default: "About",
	},
  description: AppData.settings.siteDescription,
}

async function About() {
    const projects = await getAllProjects();
  return (
    <>
      <PageBanner pageTitle={"Studies"} breadTitle={"About"} bgImage={"/img/photo/12.jpg"} />
      <section>
          <div className="container mil-p-120-60">
              <div className="row justify-content-between">
                  <div className="col-lg-12">
                        <div className="mil-publication">
                            <Suspense fallback={<div>Loading...</div>}>
                                <ProjectsMasonry projects={projects} />
                            </Suspense>
                        </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};
export default About;

async function getAllProjects() {
    const allProjects = getSortedProjectsData();
    return allProjects;
  }