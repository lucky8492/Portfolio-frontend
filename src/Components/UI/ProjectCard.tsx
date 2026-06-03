import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

interface CardProps{
   imageUrl :  string,
   TrynowLink :string,
   GithubRepo :string,
   projectName : string,
   content :  string 
   isBlack : boolean
} 


export function ProjectCard( props : CardProps){
    function handleClick(){

    }
   return(
       <div>
            <div className={`md:flex ${props.isBlack ?"text-white":"text-black"
            }`}>
                 <div className="m-5 rounded-3xl w-fit">
                     <img className=" border-4 border-black rounded-2xl h-50 w-50 md:h-100 md:w-100" src={props.imageUrl}/>
                     
                 </div>
                 <hr className= "border-2 md:h-110 m-3 md:ml-10 border-purple-700"></hr>
                 <div>
                    <div className="m-5 text-4xl font-author font-bold ">{props.projectName}</div>
                    <div className="m-5 text-2xl  font-mono max-w-220  wrap-break-word">{props.content}</div>
                    <div className="flex">
                    <a href={props.TrynowLink}  className="m-2 ml-5 text-2xl font-bold font-mono flex hover:cursor-pointer hover:text-purple-800">Try Now <GoArrowUpRight className="m-1"/>  </a>
                    <a href={props.GithubRepo} className="m-2 ml-5 text-2xl font-bold font-mono flex hover:cursor-pointer hover:text-purple-800 ">GitHub<FaGithub className="m-1"/></a>
                    </div>
                 </div> 
            </div>
       </div>
   )
}