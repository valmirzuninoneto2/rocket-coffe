import { LogoMobile } from "./logoMobile"
import { LogoDesktop } from "./logoDesktop"
import { OpenMenuIcon } from "./iconOpenMenu"

export function Header() {
    return (

        <header className="relative w-screen  text-align ">
            
            <nav id="nav" className="z-[1000] w-full tracking-wide text-textColor font-manrope text-md font-normal px-2 lg:justify-between lg:w-screen lg:flex lg:items-center lg:pt-12 xl:pl-rightMenu xl:pr-leftMenu lg:pl-8 lg:pr-8 ">
                <div className="flex p-4 justify-between items-center  bg-background md:bg-transparent border-b border-solid border-border lg:border-none lg:p-0">
                    <LogoMobile/>
                    <LogoDesktop/>
                    <OpenMenuIcon/>

                </div>
               <div>
               <ul id="ul" className="z-[-1] w-full lg:flex lg:static absolute left-0 bg-background lg:bg-transparent  lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="my-8 mx-8 lg:mx-8  hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="my-8 mx-8 lg:mx-8 hover:text-gray-400 cursor-pointer">Menu</li>
                    <li className="my-8 mx-8 lg:mx-8 hover:text-gray-400 cursor-pointer">Recompensas</li>
                    <li className="my-8 mx-8 lg:mx-8 hover:text-gray-400 cursor-pointer">Gift Cards</li>
                    <li className="my-8 mx-8 lg:mx-8 hover:text-gray-400 cursor-pointer">Lojas</li>
                    
                </ul>
               </div>
                
                <button className="lg:inline-flex  z-10 bg-transparent cursor-pointer hover:bg-button transition-all hidden font-medium border-button border text-sm text-textColor col-span-7  items-center justify-center rounded-md lg:px-9 py-3">
                    PEGAR MEU CAFÉ
                </button>
            </nav>
        </header>
    )
}