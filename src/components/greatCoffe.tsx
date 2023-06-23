import Image from "next/image"
import ImageCoffe from "../assets/rocket-coffee.png"
export function Main(){
    return(
        <div>
            <div className="relative">
                <h1 className="text-textColor text-center justify-center mt-14  text-[80px] font-bold">Great Coffe</h1>
                <h1 className="text-textColor text-opacity-18 blur text-center justify-center mt-[-7rem]  text-[80px] font-bold">Great Coffe</h1>
                <h1 className="text-shadow text-button text-center justify-center mt-[-2.5rem] text-[80px] font-bold">{"<Great Code/>"}</h1>
                <h1 className="text-shadow blur text-opacity-18 text-button text-center justify-center mt-[-7rem] text-[80px] font-bold">{"<Great Code/>"}</h1>
            </div>
            <div className=" absolute bottom-0 m-margin  left-1/2 transform -translate-x-1/2 ">
                <Image src={ImageCoffe} alt="" width={790} height={906}/>
                
            </div>
        </div>
        )
}