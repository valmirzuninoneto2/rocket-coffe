import Image from "next/image"
import ImageCoffe from "../assets/rocket-coffee.png"
export function Main(){
    return(
        <div className="justify-center flex-col">
            
            <div className="mt-[86px] sm:mt-[70px] justify-center flex m-auto flex-col w-10/12 lg:hidden">
                <p className=" m-auto text-white text-center text-[30px] font-semibold tracking-wide">
                O café que fará seu código decolar para o próximo nível.
                </p>
                <button className="mt-[88px] sm:mt-[70px] md:py-5 md:px-5 lg:hidden z-10 m-auto text-center bg-transparent cursor-pointer md:hover:bg-button hover:bg-button transition-all font-medium border-button border text-sm text-textColor flex items-center rounded-md py-3 px-4">
                        PEGAR MEU CAFÉ
                </button>
            </div>
            
            <div className="relative ">
                <h1 className="text-textColor text-center justify-center mt-20 sm:mt-[2rem] md:mt-14 text-[45px] sm:text-[60px] md:text-[80px] font-bold">Great Coffe</h1>
                <h1 className="text-textColor text-opacity-18 blur text-center justify-center mt-[-4rem] sm:mt-[-5rem] md:mt-[-7rem] text-[50px] sm:text-[60px] md:text-[80px] font-bold">Great Coffe</h1>
                <h1 className="text-shadow text-button text-center justify-center mt-[-1.5rem] sm:mt-[-2rem] md:mt-[-2.5rem] text-[45px] sm:text-[60px] md:text-[80px] font-bold">{"<Great Code/>"}</h1>
                <h1 className="text-shadow blur text-opacity-18 text-button text-center justify-center mt-[-4rem] sm:mt-[-5rem] md:mt-[-7rem] text-[50px] sm:text-[60px] md:text-[80px] font-bold">{"<Great Code/>"}</h1>
            </div>
            <div className="w-[400px] absolute bottom-0 m-margin  left-1/2 transform -translate-x-1/2 ">
                <Image src={ImageCoffe} alt="" width={790} height={906}/>
                
            </div>
        </div>
        )
}