import { ScarCard } from "../../components/ScarCard";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Modality, Sensitivity, Specificity } from "@/app/enums";
import { MutSigCard } from "@/app/components/MutSigCard";

config.autoAddCss = false

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-20">
            <h2 className="flex flex-row flex-nowrap items-center mt-2 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-sc-white text-sc-blue">
                    Methyltransferase
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            <p>
                Cancers often have dysregulated methylomes due to dysfunctional activities of the methyltransferases:
                <ol className="list-decimal list-inside my-2 pl-6">
                    <li><strong>DNMT1</strong>: Methyltransferase important for maintenance of methylation marks & de novo methylation particularly of retrotransposons. Overexpression is linked to poor prognosis in many cancer types. </li>
                    <li><strong>DNMT3A</strong>: Methyltransferase important for dev novo methylation, particularly at major-satelllite repeats and for allele specific imprinting during gametogenesis. Often mutated in Leukaemia</li>
                    <li><strong>DNMT3B</strong>: Methyltransferase important in de novo methylation, particularly  in early embryonic development and minor satellite repeat methylation</li>
                </ol>
            </p>
            <hr className="w-full my-4" />
            <dl className="w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 dark:text-gray-400">
                        Class
                    </dt>
                    <dd className="text-lg font-semibold">Endogenous</dd>
                </div>
                <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 dark:text-gray-400">
                        Subtypes
                    </dt>
                    <dd className="text-lg font-semibold">
                        DNMT1 | DNMTA | DNMT3B
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
                {/* Methyltransferase Dysfunction */}
                <ScarCard
                    title="CpG flanking sequence preferences"
                    measurement="Proportion of methylated CpGs in R882/WT preferred contexts"
                    description="DNMT3A R882H and similar mutations change the CpG flanking sequence preferences."
                    experiment="Libraries containing CpG in 10nt random context were exposed to mutant/WT methyltransferases then bisulfite sequenced."
                    hrefPaper="https://doi.org/10.1093/nar/gkz911"
                    hrefTool=""
                    sensitivity={Sensitivity.Unknown}
                    specificity={Specificity.Unknown}
                    sensitivityTooltip={"Yet to be systematically evaluated"}
                    specificityTooltip={"Yet to be systematically evaluated"}
                    biomarkerOf={"DNMT3A R88H"}
                    disease={"Pan-Cancer"}
                    diseaseMondoCode={"MONDO:0004992"}
                    toolName=""
                    modality={Modality.METHYLATION}>
                </ScarCard>

            </div>


            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Mechanistic Insights
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>

            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Links to Other Aetiologies
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            <h2 className="flex flex-row flex-nowrap items-center mt-16 mb-4">
                <span className="flex-grow block border-t border-black"></span>
                <span className="flex-none block mx-4 px-4 py-2.5 text-2xl rounded leading-none font-medium bg-black text-white">
                    Related Mutational Signatures
                </span>
                <span className="flex-grow block border-t border-black"></span>
            </h2>
            {/* <MutSigCard signature="ID8" database="COSMIC Human Cancer Database" aetiology="DSB repair by NHEJ / TOP2A mutation" href="https://cancer.sanger.ac.uk/signatures/id/id8/" hrefTool="https://github.com/selkamand/sigstash" toolName="sigstash"></MutSigCard> */}
        </main >
    );
}
