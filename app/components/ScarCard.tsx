import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ScarCardProps {
    title: string;
    measurement: string;
    description: string;
    experiment: string;
    href: string;
}

export function ScarCard({ title, measurement, description, experiment, href }: ScarCardProps) {

    return (
        <div className="flex flex-col bg-white w-full h-96 border-r-2 border-4 border-gray-200 rounded-lg shadow items-center hover:shadow-2xl hover:scale-110 transition duration-100 hover:border-8 hover:border-sc-red">
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
                <p className="pt-0 text-center font-bold text-sm">Experiment <a href={href} target="_blank"><FontAwesomeIcon icon={faLink} className="text-sm" /></a></p>
                <p className="text-center pt-0 px-1 text-xs">
                    {experiment}
                </p>
            </div>
            <div className="mt-auto mb-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">DNA</div>
        </div >
    )
}