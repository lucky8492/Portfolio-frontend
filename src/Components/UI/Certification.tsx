import { useRef, useState } from "react"
import DeloitteCertificate from "../Images/Deloitte.jpg"
import CMDBCertificate from "../Images/CMDB.jpg"
import UnstopCertificate from "../Images/Unstop.jpg"
import AzureCertificate from "../Images/Microsof_Azure.png"

interface Certificate {
    name: string
    issuer: string
    image: string
}

interface CertificationsProps {
    isBlack: boolean
}

const certificates: Certificate[] = [
    {
        name: "Deloitte job simulaion",
        issuer: "Deloitte",
        image: `${DeloitteCertificate}`
    },
    {
        name: "Certified Implementation Specialist ",
        issuer: "Service Now",
        image: `${CMDBCertificate}`
    },
    {
        name: "Talent Park",
        issuer: "Unstop",
        image:`${UnstopCertificate}`
    },
    {
        name: "Microsoft Azure",
        issuer: "Microsoft",
        image:`${AzureCertificate}`
    },
    
]


const doubled = [...certificates, ...certificates]

export function Certifications({ isBlack }: CertificationsProps) {
    const trackRef = useRef<HTMLDivElement>(null)
    const [paused, setPaused] = useState(false)

    return (
        <div className={`w-full mt-10 px-10 md:px-50 py-16 transition-colors duration-300 overflow-hidden
            ${isBlack ? "bg-black text-white" : "bg-white text-black"}`}>

            {/* Heeeeading */}
            <div className="mb-12">
                <h2 className="font-author font-light text-5xl md:text-7xl">
                    My <span className="font-extrabold italic text-violet-700">Certifications</span>
                </h2>

            </div>

          
            <div
                className="relative  mt-20 w-full overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
               
                <div className={`absolute left-0 top-0 h-full w-24 z-10 pointer-events-none
                    ${isBlack
                        ? "bg-gradient-to-r from-black to-transparent"
                        : "bg-gradient-to-r from-white to-transparent"}`} />


                <div className={`absolute right-0 top-0 h-full w-24 z-10 pointer-events-none
                    ${isBlack
                        ? "bg-gradient-to-l from-black to-transparent"
                        : "bg-gradient-to-l from-white to-transparent"}`} />

                <div
                    ref={trackRef}
                    className="flex gap-6"
                    style={{
                        animation: `scroll 25s linear infinite`,
                        animationPlayState: paused ? "paused" : "running",
                        width: "max-content"
                    }}
                >
                    {doubled.map((cert, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-64 rounded-2xl m-2  overflow-hidden border transition-all duration-200
                                hover:scale-105 hover:cursor-pointer
                                ${isBlack
                                    ? "bg-gray-950 border-gray-800"
                                    : "bg-gray-50 border-gray-200 shadow-2xs"}`}
                        >
                           
                            <div className="w-full h-40 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            
                            <div className="p-4">
                                <p className={`font-author font-semibold text-lg leading-tight
                                    ${isBlack ? "text-white" : "text-black"}`}>
                                    {cert.name}
                                </p>
                                <p className={`font-mono text-xs mt-1
                                    ${isBlack ? "text-gray-400" : "text-gray-500"}`}>
                                    {cert.issuer}
                                </p>
                              
                                <div className="mt-3 h-0.5 w-10 bg-violet-700 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS animation */}
            <style>{`
                @keyframes scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

        </div>
    )
}