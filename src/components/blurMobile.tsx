import Image from "next/image"
import ImageBlurMobile from "../assets/blur-mobile.png"
export function BlurMobile(){
    return(
        <div className="absolute visible lg:invisible bottom-0 m-margin w-full left-1/2 transform -translate-x-1/2 ">
                <Image src={ImageBlurMobile} alt="" width={1100} height={500} />
        </div>
        
        )
}