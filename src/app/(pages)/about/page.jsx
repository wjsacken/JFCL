import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
export const runtime = 'edge';

export const metadata = {
  title: {
		default: "About",
	},
  description: AppData.settings.siteDescription,
}

const About = () => {
  return (
    <>
      <PageBanner pageTitle={"About us"} breadTitle={"About"} bgImage={"/img/photo/12.jpg"} />
      <section>
          <div className="container mil-p-120-60">
              <div className="row justify-content-between">
                  <div className="col-lg-12">
                      <div className="mil-publication">
                        <pre><em>*Each case is different and must be evaluated on its individual merits. Prior results do not guarantee a similar result can be achieved in future cases.</em></pre>
                        <br/>
                        <p>The law firm of Wallace &amp; Graham of Salisbury and the Rhine Law Firm of Wilmington, both with extensive experience in environmental, cancer, and toxic tort litigation, have teamed up to bring justice to U.S. Marines and their families who drank contaminated water at Camp Lejeune from 1953-1987.</p>
                        <p>Our firms’ collective body of legal experience includes the largest mass<em>&nbsp;</em>and individual tort verdicts* in North Carolina history; decades of experience handling chemical and toxic exposure cancer cases; decades of experience handling class and mass claims to success*; a reputation and firm culture for never selling out and always putting our clients’ best interests first; years of litigation on behalf of Camp Lejeune military families; and a local presence near Camp Lejeune.</p>
                        <br/>
                        <h2><strong>RELEVANT BACKGROUND | WALLACE &amp; GRAHAM, P.A.</strong></h2>
                        <br/>
                        <h3><strong><em>Disease/Cancer Litigation</em></strong></h3>
                        <p>Established in 1981 by Mona Lisa Wallace, our firm has concentrated in occupational disease and complex civil litigation in North Carolina and South Carolina, having represented over 100,000 clients throughout those states.&nbsp; Our firm was at the forefront of the asbestos litigation in North Carolina in the 1980s and 1990s and has continued for decades to actively litigate thousands of workers’ compensation, mass and toxic tort, and product liability claims involving workers exposed to dangerous chemicals, asbestos, silica, radiation, chemical poisonings, and other occupational and product-related claims.&nbsp;&nbsp; Our firm has litigated disease cases related to industrial exposures, benzene exposure associated with the development of leukemia and other blood diseases, exposures to PCE and TCE, exposure to coal tar pitch associated with development of lung, skin, bladder and kidney cancers, exposures to carbon monoxide associated with the development of Parkinson’s disease, and exposures to other dangerous chemicals.&nbsp; We have built a strong network of experts in these areas across the state and nationwide.</p>
                        <p>Our firm maintains four departments devoted to litigating chemical, disease, and cancer claims, spread across three buildings, led by attorney/partner Bill Graham.&nbsp; We medically monitor employees across numerous plants and regions to allow for early detection of cancers.&nbsp; We help our clients know where in North Carolina to obtain access to the best cancer care and treatment. We have four decades of proprietary work product data devoted to product ID and work histories as it relates to chemical and asbestos product exposures.&nbsp; We have relationships with key experts nationwide as it relates to chemical and asbestos exposures and pathology.&nbsp; Our cancer and other latent-disease litigation continues to be the largest percentage of our practice, with hundreds of active cases in litigation.&nbsp; We have handled a mass volume of clients, claims, litigations, settlements and files for our cancer and disease practice.</p>
                        <p>In 2019, Bill Graham and co-counsel, Jessica Dean of Dean Omar Branham and Shirley, obtained the largest North Carolina asbestos wrongful death verdict in North Carolina history: $32.7 million* for compensatory-only damages, on behalf of our client who died of mesothelioma.&nbsp; The verdict was upheld by the Fourth Circuit.</p>
                        <p>In 2020, Mona Lisa and Bill and their families were the lead donors to establish the Wallace Cancer Institute in partnership with Novant Health in order to expand state-of-the-art cancer care for North Carolina’s Piedmont region.&nbsp; Bill Graham currently serves as the board chair of the Novant Health Rowan Medical Center Foundation.&nbsp; Moreover, our firm’s charitable arm,&nbsp;<em>Wallace &amp; Graham Gives</em>, donates thousands of dollars annually to support the cause of early cancer detection and prevention.</p>
                        <p>Representing individuals suffering from cancer and other latent diseases is our firm’s passion and what we have concentrated in for 40+ years.&nbsp;</p>
                        <p>&nbsp;</p>
                        <h3><strong><em>Class and Mass Tort Litigation</em></strong></h3>
                        <p>Mona Lisa Wallace and John Hughes lead our firm’s complex civil department.&nbsp; Over the past 25 years, our complex civil litigation team has had tremendous success* in mass and class claims in North Carolina and nationwide involving predatory lending, consumer protection, ERISA, LMRA, consumer fraud, fair debt collection practices, toxic torts, and environmental litigation to include groundwater contamination issues related to coal ash, ethanol and petrochemicals, resulting in millions of dollars* in recoveries for victims.</p>
                        <p>We are known for professionally and ethically handling and successfully resolving* consumer and other class actions in the State and the region over the last several decades.&nbsp; We have succeeded* under the most challenging circumstances with court approvals in the state and federal courts including the EDNC.</p>
                        <p>We are known nationally and statewide for taking on complex and difficult civil cases in a variety of areas.&nbsp; Most recently, in 2021-2022, our firm filed suit to level health care costs in the State of North Carolina, filing two&nbsp;class actions which have made national news against two of the largest hospital chains in North Carolina - HCA/Mission Health and Vidant Health - alleging the chains are operating an unregulated monopoly in the western and eastern North Carolina resulting in inflated healthcare costs for citizens, and are otherwise overcharging healthcare consumers.&nbsp; Our complaints provide a deep dive into hospital and insurance markets and the effects of consolidation and the corporate for-profit practice of medicine on health care costs.&nbsp; Notably, our claims, which are pending, have received public,&nbsp;<em>bipartisan</em>&nbsp;support from North Carolina’s Republican State Treasurer Dale Folwell and North Carolina’s Democratic Attorney General Josh Stein, who have supported the lawsuit and filed amicus briefing in support of our litigation.</p>
                        <p>In March 2022, Wallace &amp; Graham filed suit against TeamHealth - one of the nation&apos;s largest suppliers of outsourced healthcare staffing for Emergency Departments and hospitals (employing 18,000 in 47 states) - alleging they violated civil RICO by engaging in medical bill upcoding.</p>
                        <p>&nbsp;</p>
                        <h3><strong><em>Environmental Litigation / EDNC Trial Experience</em></strong></h3>
                        <p>Our firms have an excellent litigation reputation in the EDNC.&nbsp; From 2013 through 2020, Wallace &amp; Graham, alongside co-counsel, litigated five jury trials in an environmental mass tort action in the Eastern District of North Carolina, resulting in a record-setting jury verdict for $473.5 million* in&nbsp;<em>Artis et al. v. Murphy-Brown</em>, LLC, No. 7:14-CV-237-BR (E.D.N.C.) (verdict dated Aug. 3, 2018).&nbsp; The claims were tried in four- to five-week trials, pursuant to a case management order, in the Eastern District, primarily under Judge Earl Britt, resulting in verdicts totaling $549.5 million* and, ultimately, a confidential settlement amount on behalf of all filed claimants.&nbsp; The cases made headlines, won awards for the trial team and led to a key precedent in the area,&nbsp;<em>McKiver et al. v. Murphy-Brown, LLC</em>, No. 19-1019, 980 F.3d 937 (4<sup>th</sup>&nbsp;Cir. 2020).</p>
                        <p>Our historic work and success on these cases has received national attention and has been featured in a feature-length documentary,&nbsp;The Smell of Money, and in a book,&nbsp;<u>Wastelands, The True Story of Farm Country on Trial</u>, by Corban Addison (foreword by John Grisham), with a release date of June 7, 2022.&nbsp;&nbsp;For our years of litigation against Smithfield Foods, W&amp;G was awarded the Trial Lawyer of the Year award by national nonprofit, Public Justice, in 2020.</p>
                        <p>Wallace &amp; Graham has experience specifically in the field of water contamination.&nbsp; Our firm successfully* represented neighborhoods of claimants whose private well water had become contaminated with vanadium and other heavy metals in the recent Duke coal ash litigation.&nbsp; We worked very closely with academics at Duke, UNC and NC State in that litigation as well as in the hog litigation in which a relevant issue concerned the waterborne spread of germs and odor constituents.&nbsp; W&amp;G also recently represented a local Lexington community who encountered issues with alleged water contamination from a pipeline.&nbsp; We filed in federal court and successfully* and confidentially resolved.&nbsp;</p>
                        <p>&nbsp;</p>
                        <h3><strong><em>Military Housing Litigation | Fort Bragg and Camp Lejeune</em></strong></h3>
                        <p>Since 2020, Wallace &amp; Graham and Rhine Law Firm have spent a significant amount of time helping military veterans and their families in Fort Bragg and Camp Lejeune who were injured in their quality of life as a result of untenable housing conditions which caused many military families to have to live in slumlord conditions with babies and young children in unsafe and unclean dwellings under base housing privatization.&nbsp;</p>
                        <p><strong><em>Fort Bragg, North Carolina.</em></strong>&nbsp;&nbsp;On August 31, 2020, W&amp;G and Rhine, along with co-counsel,&nbsp;filed a 94-page complaint against military housing giant, Corvias Group, on behalf of soldiers and their families of the United States Army stationed at Fort Bragg, North Carolina who leased inadequate housing on-base from privatized landlord Corvias.&nbsp; Our complaint alleges Corvias knowingly leased substandard homes to military service members and conspired to conceal harmful environmental and structural housing defects, with fraud in their work order system, compounded by grossly inadequate repairs and maintenance services.&nbsp;</p>
                        <p><strong><em>Camp Lejeune, North Carolina.</em></strong>&nbsp; In September 2020, W&amp;G and Rhine filed a sister class action to the Bragg case, which is also pending in the EDNC before Judge Dever.&nbsp; Like those at Bragg, the military families at Lejeune were forced to endure unacceptable and intolerable living conditions at Camp Lejeune due to Lend Lease and Winn Management’s failure to provide basic safe and clean housing and honest and fair landlord services.&nbsp; In a 70-page lawsuit, we alleged the defendants’ prioritized profits over tenants leading to abhorrent conditions including cockroaches, filth, vermin, leaks, water intrusion, mold and mildew, failing appliances and fixtures, ineffective maintenance, inadequate repairs and poor customer service.&nbsp; The complaint alleges defendants wholly violated their promises to improve quality of life for service members and their families and to assume the responsibility for the military family resident’s housing at Camp Lejeune, having done neither while allowing housing at the base to deteriorate to unacceptable and unhealthy levels.</p>
                        <p>&nbsp;</p>
                        <h2><strong>JOEL RHINE TRIAL EXPERIENCE</strong></h2>
                        <p>Joel Rhine has practiced and tried cases in eastern NC generally and the EDNC specifically for 30 years.&nbsp; He has decades of experience in complex litigation, including catastrophic personal injury and wrongful death cases, construction accidents and defects, trucking accidents, products liability, class actions and mass torts.&nbsp; After law school, Mr. Rhine went to work in Big Law, practicing with Hunton &amp; Williams.&nbsp; Among numerous matters, he worked on two nuclear power plant construction cases, primarily dealing with experts.&nbsp; He left Hunton &amp; Williams and moved to Wilmington in 1991 and by the age of 30 had obtained an eight-figure verdict* in the EDNC, the largest verdict in New Hanover County history at the time.&nbsp; His practice progressed steadily from there, recovering hundreds of millions* for his clients.&nbsp; Also relevant to trial experience in the region, Mr. Rhine gained a national reputation in the EIFS or Synthetic Stucco fiasco, described by an assistant attorney general as “the largest consumer problem ever to hit North Carolina.”&nbsp; Mr. Rhine filed the first EIFS case and obtained the first multi-million-dollar verdict* against a manufacturer. After Mr. Rhine’s team obtained this EIFS verdict, cases settled nationwide, giving thousands of homeowners the funds they needed to repair their homes.&nbsp;</p>
                        <p>After EIFS, Mr. Rhine has handled cases throughout the United States and locally.&nbsp; He is best known for his work with scientists and engineers and his presentations on this work are well received in legal seminars.</p>
                        <p>Mr. Rhine’s recent results include a multimillion-dollar award* to three Plaintiffs injured in the Florida International University Pedestrian Bridge Collapse; obtaining the largest settlement ($24 million) in the Chinese Drywall litigation in New Orleans (during which his team handled over 700 cases); and numerous catastrophic collapse cases, including obtaining a $750,000 jury award in Brunswick County right before COVID.&nbsp; Mr. Rhine’s experience in handling the Oak Island Beach bridge collapse cases was very helpful in prosecuting other collapsed deck, railing and bridge claims.&nbsp; Mr. Rhine also obtained a $9 million verdict in a multi-fatality parasailing death case off Brunswick County beaches; a $3.1 million recovery in a bus collision case that occurred Virginia; and a $2 million local trucking case.&nbsp; Mr. Rhine was class counsel and obtained a settlement in excess of $25 million against Pella Windows in the North District of Illinois (<em>Eubank, et al v. Pella Corporation and Pella Windows and Doors).</em>&nbsp;He likewise served as co-lead counsel in&nbsp;<em>Finerman et al v. Marriott Ownership Resorts, Inc, and International Cruise &amp; Excursion Gallery</em>&nbsp;in the Middle District of Florida, which settled for over $16.5 million. This year he resolved a wrongful death case against the City of Charlotte and American Airlines for the death of a ramp worker who was killed when his tug struck a piece of luggage on a dark tarmac. The case was expert-driven as the case depended on proving the airport’s lighting was inadequate and failed to meet standards. This week, Mr. Rhine finished a wrongful death settlement of a 26-year-old who, after being paralyzed and enduring over 30 surgeries, finally succumbed to his injuries, leaving a wife and two children.</p>
                        <p>The Rhine Law Firm’s present caseload includes:</p>
                        <ol className="rineOl">
                        <li>Representing the State of North Carolina against Chemours and DuPont in PFAS/Gen X litigation.</li>
                        <li>Representing sexual abuse class actions against the New Hanover County Board of Education.&nbsp; One of these cases involves Michael Kelly, a science teacher who preyed upon more than a dozen young male students for over 20 years and pled guilty to 59 counts of sexual abuse.&nbsp; This case will be tried in September and is the most widely covered litigation in Southeastern North Carolina.&nbsp;</li>
                        <li>Numerous construction defect claims.</li>
                        <li>Numerous construction accident claims.</li>
                        <li>Numerous residential elevator crash injury cases.</li>
                        <li>Numerous class actions including representing gas station owners against the Colonial Pipeline for damages suffered when the Colonial Pipeline shut down due to a ransomware attack on its computer system.&nbsp;</li>
                        <li>Class actions on behalf of military families living in substandard housing units managed by private companies at Camp Lejeune and other bases.</li>
                        <li>Numerous data breach and other class actions throughout the country.</li>
                        </ol>
                        <p>Mr. Rhine has been repeatedly recognized as a leader in the legal profession. He is on the incoming North Carolina Advocates for Justice slate of Board of Governors.&nbsp; North Carolina Lawyers Weekly included him in their inaugural Power List for Personal injury lawyers.&nbsp;&nbsp; He has been named a “Super Lawyer” for over a decade and has been chosen as one of North Carolina’s Top 100 for several years.&nbsp; He is listed among the nation’s “Best Lawyers,” National Trial Lawyers Top 100, Business North Carolina’s Legal Elite; he holds an AV rating on Martindale Hubbell. Rhine Law Firm is ranked as a Tier 1 Best Firm by U.S. News.</p>
                        <p>&nbsp;</p>
                        <pre><em>*Each case is different and must be evaluated on its individual merits. Prior results do not guarantee a similar result can be achieved in future cases.</em></pre> 
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};
export default About;