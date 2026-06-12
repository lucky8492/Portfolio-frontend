import { type values, stringSize, logoSize } from "./index"

export function Model(prop: values) {

    return (
        <span className="inline-flex align-middle">
            <span className="rounded-xl border p-1 w-fit h-fit inline-flex justify-center border-dashed bg-gray-300">
                <span className="inline-flex items-center">
                   { prop.logo &&  <span className="p-1">
                        <img
                            src={prop.logo}
                            className={logoSize[prop.sizeOfLogo]}
                        />
                    </span>}

                    <span
                        className={`text-gray-600 font-mono mt-2 mr-1 ml-1 whitespace-nowrap ${stringSize[prop.sizeOfText]}`}
                    >
                        {prop.text}
                    </span>

                </span>

            </span>

        </span>
    )
}