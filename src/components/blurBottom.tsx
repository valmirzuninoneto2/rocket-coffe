import Image from "next/image"
import ImageBlurBottom from "../assets/blur-1.png"
export function BlurBottom(){
    return(
        <div className="absolute right-90% bottom-0">
                <Image src={ImageBlurBottom} alt="" width={700} height={500} />
        </div>
        
        )
}