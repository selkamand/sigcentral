import { faLink, faWrench } from "@fortawesome/free-solid-svg-icons"
import { faToolbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ScarCardProps {
    title: string;
    measurement: string;
    description: string;
    experiment: string;
    hrefPaper: string;
    hrefTool: string;
    toolname: string
}

export function ScarCard({ title, measurement, description, experiment, hrefPaper, hrefTool = "", toolname = "" }: ScarCardProps) {

    let wrenchColour = "text-green-800"
    if (hrefTool.length == 0) {
        wrenchColour = "text-red-800"
        toolname = "No tooling available"
    }

    return (
        <div className="flex flex-col bg-white w-full h-96 border-r-2 border-4 border-gray-200 rounded-lg shadow items-center hover:shadow-2xl hover:scale-110 transition duration-100 hover:border-8 hover:border-sc-blue">
            <h3 className="text-xl text-center font-semibold pt-2">{title}</h3>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>
            <p className="pt-0 font-bold text-sm">Measurement</p>
            <p className="pt-2 text-center">{measurement}</p>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>
            <p className="pt-0 font-bold text-sm">Description</p>
            <p className="text-center pt-2 text-sm lg:text-md">
                {description}
            </p>
            <div className="hidden xl:block">
                <hr className="h-px my-2 w-full bg-gray-200"></hr>
                <p className="pt-0 text-center font-bold text-sm">Experiment <a href={hrefPaper} target="_blank"><FontAwesomeIcon icon={faLink} className="text-sm" /></a></p>
                <p className="text-center pt-0 px-1 text-xs">
                    {experiment}
                </p>
            </div>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>
            <div className="grid grid-cols-2 gap-2">
                <div className=" bg-green-100 text-green-800 text-center text-xs font-medium px-2.5 py-0.5 rounded">Pan-Cancer</div>
                <div className=" bg-blue-100 text-blue-800 text-center text-xs font-medium px-2.5 py-0.5 rounded">DNA</div>
            </div>
            <hr className="h-px mt-2 w-full bg-gray-200"></hr>
            <div className="grid grid-cols-2 gap-2 mt-0">
                <div>
                    <span className="text-black text-xs font-bold">Sensitivity: </span>
                    <span className=" bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded">High</span>
                </div>
                <div>
                    <span className="text-black text-xs font-bold">Specificity: </span>
                    <span className=" bg-red-100 text-red-800 text-xs font-medium px-1.5 py-0.5 rounded">Low</span>
                </div>
            </div >
            <hr className="h-px mt-2 w-full bg-gray-200"></hr>
            <div>
                {/* <span className="text-black text-xs font-bold">Tool: </span> */}
                <span className="text-m font-medium px-1.5 py-0.5 rounded">
                    < span className="relative group" >
                        <a href={hrefTool} target="_blank">
                            <FontAwesomeIcon icon={faWrench} className={`text-m ${wrenchColour}`} />
                        </a>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            {toolname}
                        </span>
                    </span >
                </span>
            </div>
            {/* <a href={hrefTool} target="_blank"><FontAwesomeIcon icon={faWrench} className={`text-m ${wrenchColour}`} /></a> */}

        </div >
    )
}