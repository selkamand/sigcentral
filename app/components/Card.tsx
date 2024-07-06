import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRadiation } from '@fortawesome/free-solid-svg-icons';

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