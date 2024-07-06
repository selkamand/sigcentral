import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation, faScissors, faTimeline, faBezierCurve, faSun, faShieldHalved, faShieldVirus, faSyringe, faSmoking, faVirus, faDiagramNext, faWaveSquare, faXmarksLines, faHammer, faRotate, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export function Card({ title = "title", icon = faRadiation, text = "Some sample text", dna = false, rna = false, meth = false, flipVertical = false, flipHorizontal = false }) {
  const trueCol = "text-sc-black"
  const falseCol = "text-sc-white"

  let flipClass = `${flipVertical ? 'pb-4 rotate-180' : 'pt-4'} ${flipHorizontal ? 'fa-flip-horizontal' : ''}`;
  return (
    <div className="flex flex-col bg-white w-full h-80 border-r-2 border-4 border-gray-200 rounded-lg shadow items-center hover:shadow-2xl hover:scale-110 transition duration-100 hover:border-8 hover:border-sc-red">
      <h3 className="text-xl text-center font-semibold uppercase pt-2">{title}</h3>
      <FontAwesomeIcon icon={icon} className={`text-4xl ${flipClass}`} />
      <p className="pt-6 px-3 text-center">
        {text}
      </p>
      <div className="flex flex-row mt-auto pb-2">
        <div className={`px-2 font-semibold text-l ${dna ? trueCol : falseCol}`}>DNA</div>
        <div className={`px-2 font-semibold text-l ${rna ? trueCol : falseCol}`}>RNA</div>
        <div className={`px-2 font-semibold text-l ${meth ? trueCol : falseCol}`}>METH</div>
      </div>
    </div>
  )
}

export function Search() {
  return (
    <div className="flex flex-col items-center pt-10">
      <p className="font-semibold pb-1">Search by Tumorigenic Process</p>
      <form className="w-9/12 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm bg-sc-blue text-sc-white"
            placeholder="e.g. APOBEC / RAG / Chemotherapy "
            required={false}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-sc-white text-sc-red hover:bg-white hover:text-sc-red   focus:ring-4 focus:outline-none  focus:bg-sc-red font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>)

}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20">
      <div>
        <Image
          src="/sigsim_hex.jpeg"
          width={200}
          height={200}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
      <div className="w-screen"><Search></Search></div>
      <div className="grid grid-cols-4 pt-10 gap-8 w-screen place-items-center px-60">
        <Card title="Radiotherapy" text="Directly damages DNA. Common in CNS tumours" icon={faRadiation} dna={true} rna={true} meth={false} ></Card>
        <Card title="Recombination" text="Endogenous recombination enzymes (RAGs) are hyperactivated in immune cancers" icon={faScissors} dna={true} rna={true} meth={false} ></Card>
        <Card title="Methytransferase" text="Global methylation disrupted by DNMT3A dysfunction. Common in Leukaemia." icon={faTimeline} dna={false} rna={true} meth={true}  ></Card>
        <Card title="Spliceosome" text="Spliceosome dysfunction leads to widespread abberant isoform creation" icon={faBezierCurve} flipVertical={true} dna={false} rna={true} meth={false} ></Card>
        <Card title="Ultraviolet Radiation" text="Exposure to UV induces very specific patterns of mutations in DNA. Causes melanoma and perhaps some blood cancers" icon={faSun} dna={true} rna={false} meth={false} ></Card>
        <Card title="Mismatch Repair deficiency" text="Failure to repair small mutations leads to their accumulation in the tumour genome" icon={faShieldHalved} dna={true} rna={false} meth={false} ></Card>
        <Card title="Homologous Repair Deficiency" text="Failure to repair large double-stranded breaks leads to their accumulation in the tumour genome" icon={faShieldHalved} dna={true} rna={false} meth={false} flipHorizontal={true} />
        <Card title="APOBEC" text="Inflammatory stimuli hyperactivate endogenous mutagenic enzymes in immune cell or viral-infected cancers" icon={faShieldVirus} dna={true} rna={true} meth={false} />
        <Card title="Chemotherapy" text="Chemotherapy induces widespread genomic damage treatment-surviving cancer cells" icon={faSyringe} dna={true} rna={false} meth={false} />
        <Card title="Smoking" text="Tobacco smoke is highly mutagenic and leads to highly specific patterns of genomic damage in the lungs of smokers" icon={faSmoking} dna={true} rna={false} meth={false} />
        <Card title="Viruses" text="Oncogenic viruses can be detected from their nucleic acids in tumors or from immune-related genomic damage" icon={faVirus} dna={true} rna={true} meth={false} />
        <Card title="Defective Base Excision Repair" text="Failure to repair base lesions removed by specific glycosylases leads to their accumulation in the tumour genome" icon={faDiagramNext} dna={true} rna={false} meth={false} flipVertical={true} />
        <Card title="Leaky Checkpoints" text="Compromised cell-cycle checkpoints can no longer prevent replication of cells with genomic damage." icon={faWaveSquare} dna={true} rna={false} meth={false} />
        <Card title="ADAR" text="Hyperactive dsRNA editing enzyme ADAR1 mutates transcripts. Can have oncogenic or anti-cancer effects." icon={faXmarksLines} dna={false} rna={true} meth={true} />
        <Card title="NHEJ repair" text="Non-homologous end-join repair of DSB leaves behind a characteristic pattern of mutations." icon={faHammer} dna={true} rna={false} meth={false} />
        <Card title="TOP2A loss" text="Knockout of topoisomerases compromise torsional DNA stress relief, leading to accumulation of indels." icon={faRotate} dna={true} rna={false} meth={false} />
        <Card title="Sequencing" text="Failure to correct for systematic errors in omics-sequencing leads to accumulation of fake mutations in tumour samples." icon={faTriangleExclamation} dna={true} rna={false} meth={false} />
      </div>
    </main >
  );
}
