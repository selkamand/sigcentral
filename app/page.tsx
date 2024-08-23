import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation, faScissors, faTimeline, faBezierCurve, faSun, faShieldHalved, faShieldVirus, faSyringe, faSmoking, faVirus, faDiagramNext, faWaveSquare, faXmarksLines, faHammer, faRotate, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import { Card } from "./components/Card";
import { Search } from "./components/Search";
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Metadata } from 'next'


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
        <Card title="APOBEC hyperactivity" text="Inflammatory stimuli hyperactivate endogenous mutagenic enzymes in immune cell or viral-infected cancers" icon={faShieldVirus} dna={true} rna={true} meth={false} />
        <Card title="Chemotherapy" text="Chemotherapy induces widespread genomic damage treatment-surviving cancer cells" icon={faSyringe} dna={true} rna={false} meth={false} />
        <Card title="Smoking" text="Tobacco smoke is highly mutagenic and leads to highly specific patterns of genomic damage in the lungs of smokers" icon={faSmoking} dna={true} rna={false} meth={false} />
        <Card title="Viruses" text="Oncogenic viruses can be detected from their nucleic acids in tumors or from immune-related genomic damage" icon={faVirus} dna={true} rna={true} meth={false} />
        <Card title="Defective Base Excision Repair" text="Failure to repair base lesions removed by specific glycosylases leads to their accumulation in the tumour genome" icon={faDiagramNext} dna={true} rna={false} meth={false} flipVertical={true} />
        <Card title="Leaky Checkpoints" text="Compromised cell-cycle checkpoints can no longer prevent replication of cells with genomic damage." icon={faWaveSquare} dna={true} rna={false} meth={false} />
        <Card title="ADAR activity" text="Hyperactive dsRNA editing enzyme ADAR1 mutates transcripts. Can have oncogenic or anti-cancer effects." icon={faXmarksLines} dna={false} rna={true} meth={true} />
        <Card title="NHEJ repair" text="Non-homologous end-join repair of DSB leaves behind a characteristic pattern of mutations." icon={faHammer} dna={true} rna={false} meth={false} />
        <Card title="TOP2A loss" text="Knockout of topoisomerases compromise torsional DNA stress relief, leading to accumulation of indels." icon={faRotate} dna={true} rna={false} meth={false} />
        <Card title="Sequencing" text="Failure to correct for systematic errors in omics-sequencing leads to accumulation of fake mutations in tumour samples." icon={faTriangleExclamation} dna={true} rna={false} meth={false} />
      </div>
    </main >
  );
}
