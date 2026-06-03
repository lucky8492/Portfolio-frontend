

interface buttonIdx{
   text : string
}

export function Buttonss(props :buttonIdx){
   return(
       <div>
          <div className={`border  text-black w-fit h-fit  flex justify-center rounded-4xl  m-2 hover:bg-gray-50 hover: cursor-pointer`}>
                <div className={`text-gray-600 font-author font-medium p-2 whitespace-nowrap  `}>
                    {props.text}
                </div>
          </div>

       </div>
   )
}