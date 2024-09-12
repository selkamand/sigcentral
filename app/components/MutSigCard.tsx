"use client";
import { faLink, faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modality, Sensitivity, Specificity } from "../enums";
import { Tooltip } from 'react-tooltip'
import Image from "next/image";


interface MutSigCardProps {
    signature: string;
    database: string;
    aetiology: string;
    href: string;
    hrefTool: string;
    toolName: string;
}

export function MutSigCard({
    signature,
    database = "COSMIC Human Cancer Signatures",
    href,
    hrefTool,
    aetiology
}: MutSigCardProps) {

    let wrenchColour = "text-green-800"
    let wrenchCircleHover = "hover:bg-green-200"

    return (
        <div className="group relative flex z-1 hover:z-40 flex-col bg-white w-full border-r-2 border-4 border-gray-200 rounded-lg shadow items-center hover:shadow-2xl hover:scale-110 transition duration-100 hover:border-8 hover:border-sc-blue">
            <h3 className="text-xl text-center font-semibold pt-2">{signature}</h3>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>

            {/* Measurement */}
            <p className="pt-0 font-bold text-sm">Database</p>
            <p className="pt-2 text-center">{database}</p>
            <hr className="h-px my-2 w-full bg-gray-200"></hr>

            {/* Description */}
            <p className="pt-0 font-bold text-sm">Aetiology</p>
            <p className="text-center pt-2 text-sm lg:text-md">
                {aetiology}
            </p>

            {/* <Image
                src="https://cog.sanger.ac.uk/cosmic-signatures-production/images/v3.2_ID8_PROFILE_GA_GRCh37_n6Tne4s.original.jpg"
                alt="Mutation Catalogue (ID83)"
                width={500}
                height={500}
            /> */}
            <div className="py-4"></div>
            {/* Tool Link: Wrench in Circle */}
            <div className="absolute inset-x-0 bottom-0 flex justify-center transform translate-y-1/2">
                <div className={`flex items-center justify-center w-10 h-10 bg-white border-4 rounded-full duration-100 group-hover:border-4 group-hover:border-sc-blue ${wrenchCircleHover}`}>
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

        </div >
    )
}