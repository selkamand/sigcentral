import { ScarCard } from "../../components/ScarCard";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-20">
            <h2 className="flex flex-row flex-nowrap items-center mt-2 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-sc-white text-sc-blue">
                    Radiotherapy
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            <p>
                Cancer patients are exposed to ionizing radiation at several times throughout their cancer journey:
                <ol className="list-decimal list-inside my-2 pl-6">
                    <li><strong>Diagnostic Radiography</strong>: Used in imaging scans to help diagnose and monitor tumours</li>
                    <li><strong>Radiotherapy</strong>: Tumours are exposed to high energy X-rays (usually photon beams) to kill (or prevent division) of tumour cells</li>
                </ol>
            </p>
            <hr className="w-full my-4" />
            <dl className="w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 dark:text-gray-400">
                        Class
                    </dt>
                    <dd className="text-lg font-semibold">Mutagenic</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 dark:text-gray-400">
                        Subtypes
                    </dt>
                    <dd className="text-lg font-semibold">
                        Photon | Proton | Electron
                    </dd>
                </div>
            </dl>

            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Multiomic Scars
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            {/* <h2 className="pt-4"><b>Scars</b></h2> */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
                <ScarCard toolname="raDNA" title="High Indel Burden" measurement="INDEL / SBS ratio" description="Higher number of INDELS. Driven by a an increased burden of deletions, not insertions." experiment="Analysis of 12 radiation-associated tumours from 3 cancer types compared to radiation-naive tumours" hrefPaper="https://www.nature.com/articles/ncomms12605" hrefTool="https://github.com/selkamand/radna"></ScarCard>
                <ScarCard toolname="raDNA" title="High Deletion Burden" measurement="Deletion / Insertion ratio" description="Higher number of small deletions (1-100bp) particularly in reagions of microhomology" experiment="Analysis of 12 radiation-associated tumours from 3 cancer types compared to radiation-naive tumours" hrefPaper="https://www.nature.com/articles/ncomms12605" hrefTool="https://github.com/selkamand/radna"></ScarCard>
                <ScarCard toolname="raDNA" title="Topography Agnostic Deletions" measurement="Genome-wide deletion distribution and topographical features" description="Radiation induced deletions appear uniformally across the genome irregardless of replication timing and chromotin structure (unlike most other exogenous mutagens)." experiment="Analysis of 12 radiation-associated tumours from 3 cancer types compared to radiation-naive tumours" hrefPaper="https://www.nature.com/articles/ncomms12605" hrefTool="https://github.com/selkamand/radna"></ScarCard>
                <ScarCard toolname="raDNA" title="Increased balanced inversions" measurement="Any balanced inversions present" description="Balanced inversions, a rare type of rearrangement, were present in 92% (11/12) radiation-associated tumours but only 15% of radiation naïve tumours." experiment="Analysis of 12 radiation-associated tumours from 3 cancer types compared to radiation-naive tumours" hrefPaper="https://www.nature.com/articles/ncomms12605" hrefTool="https://github.com/selkamand/radna"></ScarCard>
            </div>


            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Mechanistic Insights
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            <p>
                There are 3 different ways radiation damages the genome:
                <ul className="list-inside list-disc">
                    <li><b>Direct Damage</b>: Double Stranded Breaks</li>
                    <li><b>Indirect Damage</b>: ROS generated leading to DNA damage</li>
                    <li><b>Repair</b>: NHEJ repair induces indels at sites of radiation-induced breaks</li>
                </ul>

                <br />
                The presence of topography agnostic deletions strongly suggests that, as one might expect, radiation can permeate and damage even densely packed heterochromatin which other exogenous mutagens may have more difficulty gaining access to. Although this raises the question of how are DNA repair enzymes accessing this DNA to repair it?

                <br /><br />
                The increased rate of balanced inversions is also interesting. Most mechanisms that cause inversions (breakage-fusion-bridge, chromothripsis and chromoplexy) lead to unbalanced inversions (inversion is accompanied by a CN change). HR defective Breast cancers show a similar trend.
            </p>

            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Links to Other Aetiologies
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            <div className="p-4">
                <p>
                    Several radiation-associated genomic scars closely resemble those induced by non-homologous end-joining (NHEJ) repair. This strong resemblance suggests that what we are observing is likely the result of NHEJ repair of radiation-induced damage. Consequently, radiation-associated scars are quite similar to homologous recombination deficiency (HRd) signatures, as NHEJ is upregulated as a fallback mechanism when HR is compromised.
                </p>
                <p className="mt-4">
                    This raises an important question: why does radiation-induced damage seem to be preferentially repaired by NHEJ instead of the more efficient HR pathway?
                </p>
                <p className="mt-4">
                    Furthermore, in distinguishing radiation-induced damage from other HR signatures, the lack of topography agnostic distribution of deletions should, in theory, be specific to radiation.
                </p>
            </div>

        </main >
    );
}
