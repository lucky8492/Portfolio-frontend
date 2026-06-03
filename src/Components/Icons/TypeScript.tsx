import { IconBySize, type IconProps } from ".";


export function TypescriptLogo(prop : IconProps){
    return(
        <svg width="400" height="400" viewBox="0 0 400 400" 
         className={IconBySize[prop.size]}   xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="400" rx="52" fill="#3178C6"/>
            <rect x="56" y="156" width="108" height="22" fill="white"/>
            <rect x="100" y="156" width="22" height="132" fill="white"/>
            <text x="212" y="288" font-family="Arial, Helvetica, sans-serif"
                    font-weight="700" font-size="132" fill="white" text-anchor="middle">S
            </text>
        </svg>
    )
}