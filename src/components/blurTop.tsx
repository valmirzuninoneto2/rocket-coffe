import Image from "next/image"
import ImageBlurTop from "../assets/blur-2.png"
export function BlurTop(){
    return(
            <div className="invisible lg:visible absolute left-90% top-0 z-0">
                <Image src={ImageBlurTop} alt="" width={600} height={400} />
            </div>
    )
}