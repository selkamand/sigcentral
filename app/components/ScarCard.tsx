"use client";
import { faLink, faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modality, Sensitivity, Specificity } from "../enums";
import { Tooltip } from 'react-tooltip'


// Map sensitivity / Specificity types to colour schemes
const sensitivityColourMap: { [key in Sensitivity]: string } = {
    [Sensitivity.Low]: "bg-red-100 text-red-800",
    [Sensitivity.Moderate]: "bg-blue-100 text-blue-800",
    [Sensitivity.High]: "bg-green-100 text-green-800",
    [Sensitivity.Unknown]: "bg-gray-100 text-gray-800"
};



// specificity colour map is the exact same as above
const specificityColourMap: { [key in Specificity]: string } = {
    [Specificity.Low]: "bg-red-100 text-red-800",
    [Specificity.Moderate]: "bg-blue-100 text-blue-800",
    [Specificity.High]: "bg-green-100 text-green-800",
    [Specificity.Unknown]: "bg-gray-100 text-gray-800"
};



interface ScarCardProps {
    title: string;
    measurement: string;
    biomarkerOf: string;
    disease: string;
    modality: Modality;
    diseaseMondoCode: string;
    description: string;
    experiment: string;
    hrefPaper: string;
    hrefTool: string;
    toolName: string;
    sensitivity: Sensitivity;
    specificity: Specificity;
    sensitivityTooltip: string;
    specificityTooltip: string;
}

export function ScarCard({
    title,
    measurement,
    description,
    disease,
    diseaseMondoCode,
    biomarkerOf,
    modality,
    experiment,
    hrefPaper,
    hrefTool = "",
    toolName = "",
    sensitivity,
    specificity,
    sensitivityTooltip = "",
    specificityTooltip = ""
}: ScarCardProps) {

    const colorSensitivity = sensitivityColourMap[sensitivity];
    const colorSpecificity = specificityColourMap[specificity];
    const uniqueSensitivityTooltipId = `sensitivity-tooltip-${title}`;
    const uniqueSpecificityTooltipId = `specificity-tooltip-${title}`;
    const uniqueToolTooltipId = `tool-tooltip-${title}`

    let wrenchColour = "text-green-800"
    let wrenchCircleHover = "hover:bg-green-200"
    let toolPrefix = "Identify using"
    if (hrefTool.length == 0) {
        wrenchColour = "text-red-800"
        wrenchCircleHover = "hover:bg-red-200"
        toolName = "No tool available"
        toolPrefix = ""
    }

    return (
        <div className="group relative flex z-1 hover:z-40 flex-col bg-white w-full border-r-2 border-4 border-gray-200 rounded-lg shadow items-center hover:shadow-2xl hover:scale-110 transition duration-100 hover:border-8 hover:border-sc-blue">
            <h3 className="text-xl text-center font-semibold pt-2">{title}</h3>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>

            {/* Measurement */}
            <p className="pt-0 font-bold text-sm">Measurement</p>
            <p className="pt-2 text-center">{measurement}</p>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>

            {/* Description */}
            <p className="pt-0 font-bold text-sm">Description</p>
            <p className="text-center pt-2 text-sm lg:text-md">
                {description}
            </p>

            {/* Experiment (hidden when small) */}
            <div className="hidden xl:block">
                <hr className="h-px my-2 w-full bg-gray-200"></hr>
                <p className="pt-0 text-center font-bold text-sm">Experiment <a href={hrefPaper} target="_blank"><FontAwesomeIcon icon={faLink} className="text-sm" /></a></p>
                <p className="text-center pt-0 px-1 text-xs">
                    {experiment}
                </p>
            </div>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>

            <div className="grid grid-cols-3 gap-x-2 gap-y-1 pt-2">
                <div className=" bg-white text-black text-center text-xs font-bold px-2.5 py-0.5 rounded">Disease</div>
                <div className=" bg-white text-black text-center text-xs font-bold px-2.5 py-0.5 rounded">Modality</div>
                <div className=" bg-white text-black text-center text-xs font-bold px-2.5 py-0.5 rounded">Biomarker Of</div>
                <div className=" bg-white text-black border-2 border-black border-dotted text-center text-xs font-medium px-2.5 py-0.5 rounded">{disease}</div>
                <div className=" bg-white text-black border-2 border-black border-dotted text-center text-xs font-medium px-2.5 py-0.5 rounded">{modality}</div>
                <div className=" bg-white text-black border-2 border-black border-dotted text-center text-xs font-medium px-2.5 py-0.5 rounded">{biomarkerOf}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-4">
                <div className=" bg-white text-black text-center text-xs font-bold px-2.5 py-0.5 rounded">Sensitivity</div>
                <div className=" bg-white text-black text-center text-xs font-bold px-2.5 py-0.5 rounded">Specificity</div>
                <span data-tooltip-id={uniqueSensitivityTooltipId} className={`${colorSensitivity} text-xs hover:border-solid border-dashed border-2 border-black font-medium text-center px-1.5 py-0.5 rounded`}>{sensitivity}</span>
                <span data-tooltip-id={uniqueSpecificityTooltipId} className={`${colorSpecificity} text-xs hover:border-solid border-dashed border-2 border-black font-medium text-center px-1.5 py-0.5 rounded`}>{specificity}</span>
            </div>
            <div className="py-4"></div>
            {/* Tool Link: Wrench in Circle */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center transform translate-y-1/2">
                <div data-tooltip-id={uniqueToolTooltipId} className={`flex items-center justify-center w-10 h-10 bg-white border-4 rounded-full duration-100 group-hover:border-4 group-hover:border-sc-blue ${wrenchCircleHover}`}>
                    <span className="text-m font-medium px-1.5 py-0.5 rounded">
                        < span className="relative group/tool text-center" >
                            <a href={hrefTool} target="_blank">
                                <FontAwesomeIcon icon={faWrench} className={`text-m ${wrenchColour}`} />
                            </a>
                        </span >
                    </span>
                </div>
            </div>
            <div>
            </div>
            {/* Tooltips */}
            <Tooltip id={uniqueSensitivityTooltipId} place="bottom" data-tooltip-position-strategy="absolute" content={sensitivityTooltip} />
            <Tooltip id={uniqueSpecificityTooltipId} place="bottom" data-tooltip-position-strategy="absolute" content={specificityTooltip} />
            <Tooltip id={uniqueToolTooltipId} place="bottom" data-tooltip-position-strategy="absolute" content={`${toolPrefix} ${toolName}`} border="4px solid black" style={{ backgroundColor: "white", color: "black" }} />
        </div >
    )
}