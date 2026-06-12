
import ProfilePhoto from "../Images/Profile_photo.jpg"
import SunglasesImage from "../Images/Sunglass_photo.jpg"

interface blackandWhite{
    isBlack : Boolean
}
export function Profile(props : blackandWhite){
    return(
        <div className="w-full flex">
            <div className={`md:w-70 md:h-70 transition-transform duration-300 hover:scale-110 hover:cursor-pointer  h-40 w-40 md:ml-50 ml-20 md:mt-20 mt-10`}>
               { props.isBlack === true &&  <img  className="p-2 rounded-full" src={ProfilePhoto}/>}
               { props.isBlack === false &&  <img  className="p-2 rounded-full" src={SunglasesImage}/>}
            </div>
        </div>
    )
}