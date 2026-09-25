import { useState } from "react";
import { Navbar } from "../Components/UI/Navbar";
import { Hero } from "../Components/UI/Hero";
import { ProjectCard } from "../Components/UI/ProjectCard";
import LinkShare from "../Components/Images/Link_share.png";
import couseSeling from "../Components/Images/course-selling.png";
import todooo from "../Components/Images/TodoList.png"
import { Contact } from "../Components/UI/Contact";
import { Certifications } from "../Components/UI/Certification";
import { Footer } from "../Components/UI/Footer";


export function Home(){
    const [isWhiteBg , setIsWhiteBg] = useState(true);

    return(
        <>
            <div className={`min-h-screen w-full overflow-x-hidden ${isWhiteBg ? "bg-[#050505] text-white" : "bg-white text-black"}`}>
                    <Navbar isWhiteBg={isWhiteBg} setIsWhiteBg={setIsWhiteBg}/>
                    <Hero isDark={isWhiteBg} />
                    <div className="flex w-full justify-center px-4">
                        <h2 className="text-center font-mono font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            <span className={isWhiteBg ? "text-white" : "text-black"}>"</span>

                            <span className="text-[#E5B80B]">Pressure is Privilege</span>

                            <span className={isWhiteBg ? "text-white" : "text-black"}>"</span>
                        </h2>
                    </div>

                   <div id="project" className="mt-24 md:mt-32">
                          <div className="mx-auto max-w-7xl md:px-10 px-5">
                               <h2 className="text-4xl font-author text-violet-700 font-extrabold sm:text-5xl md:text-6xl">Projects</h2>
                               <div className="mt-10 sm:mt-12 md:mt-15">
                                    <ProjectCard 
                                        projectName='Save link'
                                        GithubRepo='https://github.com/lucky8492/Brainly'
                                        TrynowLink='#'
                                        imageUrl={LinkShare} 
                                        teckStack={["Typecipt" ,"JavaScript" , "ReactJs" , "MongoDB" , "Expressjs" ,"Tailwindcss"]}
                                        isBlack={isWhiteBg}
                                        content="Developed a web platform that allows users to organize and store important resources such as links, tweets, YouTube videos, and articles in one centralized place. The application enables users to easily add, manage, and access their saved content, helping them keep useful information structured and accessible. Users can also share their entire collection of saved content with others through a shareable link.Users can also share their entire collection of saved content with others through a shareable link Users can also share their entire collection of saved content with others through a shareable link"  />
                               </div>
                               <div className="mt-10 sm:mt-12 md:mt-15">
                                    <ProjectCard 
                                        projectName='Course-selling website'
                                        GithubRepo='https://github.com/lucky8492/Course-selling-website' 
                                        TrynowLink='https://course-selling-website-xi-orcin.vercel.app/'
                                        imageUrl={couseSeling} 
                                         teckStack={["JavaScript" , "ReactJs" , "MongoDB" , "Expressjs" , "Tailwindcss"]}
                                        isBlack={isWhiteBg}
                                        content="Developed a full-stack course selling platform where users can sign up, log in, browse available courses, and purchase them. The application also includes a separate admin interface that allows administrators to manage courses through complete Create, Read, Update, and Delete (CRUD) operations. The system integrates a responsive frontend with RESTful APIs to enable smooth communication between the client and server, along with secure authentication for both users and admins."  />
                               </div>
                               <div className="mt-10 sm:mt-12 md:mt-15">
                                    <ProjectCard 
                                        projectName='Todo'
                                        GithubRepo='https://github.com/lucky8492/Todo.Express' 
                                        TrynowLink='#'
                                        imageUrl={todooo} 
                                         teckStack={["JavaScript" , "ReactJs" , "MongoDB" , "Expressjs" , "Tailwindcss"]}
                                        isBlack={isWhiteBg}
                                        content="Developed a full-stack Todo application that allows users to sign up, log in, and manage their personal tasks efficiently. The platform enables users to create, view, update, and delete tasks, helping them organize their daily activities in a structured way. The application integrates a responsive frontend with backend APIs and includes authentication to ensure that each user can securely access and manage their own tasks."  />
                               </div>
                                                                
                          </div>
                   </div>

                   <div id="certificate" className="">
                   <Certifications isBlack={isWhiteBg}/>
                   </div>
                  <div id="contact" className="">
                   <Contact isBlack={isWhiteBg} />
                 </div>
                 <div>
                    <Footer isBlack={isWhiteBg}/>
                 </div>
          
            </div>
        </>
    )
}