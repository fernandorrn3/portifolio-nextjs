import { ElementorBuilderContext } from "./contextElementorBuilder/elementorbuilderContext"
import BoxItem from "./criarElementos/boxItem/boxEitem"
import Elementoscriados from "./elementosCriados/elementosCriados"
import { SectionTabsMobile } from "./configElementos/configBar"
import { useState } from "react"
import SelectElementos from "./configElementos/selectElementos/selectElement"
import BarraCriarElementos from "./criarElementos/barraElementos"
import { SectionTabDesk } from "./configElementos/configBar"

export default function ElementorBuilder(props) {
    const [containerSelect, setContainerSelect] = useState(null)
    const [itemSelect, setItemSelect] = useState(null)
    const [idItem, setIdItem] = useState([])


    return (
        <ElementorBuilderContext.Provider value={{
            containerSelect: containerSelect,
            setContainerSelect: setContainerSelect,
            itemSelect, itemSelect,
            setItemSelect, setItemSelect,
            idItem: idItem,
            setIdItem: setIdItem
        }}>

            <div className="bg-[#2B3640]">
                <div className="sm:hidden medio:hidden">
                    <MobileVersao />
                </div>
                <div className="smm:hidden grande:hidden">
                    <TabletDesktopVersao />
                </div>

                <div className="hidden medio:flex flex-col">
                    <MobileMedio />
                </div>
                <div className="hidden grande:flex flex-col">
                <PcgAnd4k/> 
                </div>
            </div>
        </ElementorBuilderContext.Provider>
    )
}

function MobileVersao() {
    return (
        <div className="flex-col">
            <div className="w-full">
                <SectionTabsMobile />
            </div>
            <div className="min-h-screen">
                <Elementoscriados />
            </div>
        </div>
    )
}

function TabletDesktopVersao() {
    return (
        <div className="flex flex-row min-h-screen">
            <div className="w-[25%]  p-2 m-2 bg-slate-600">
                <BarraCriarElementos />
            </div>

            <div className="w-[45%] m-2 bg-slate-600">
                <Elementoscriados />
            </div>
            <div className="w-[30%]  flex flex-col p-2 m-2 bg-slate-600">
                <SectionTabDesk />
            </div>
        </div>
    )
}


function MobileMedio() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row ">
                <div className="w-[50%] p-2 m-2 bg-slate-600 ">
                    <BarraCriarElementos />

                </div>

                <div className="w-[50%]  flex flex-col p-2 m-2 bg-slate-600">
                    <SectionTabDesk />
                </div>
            </div>
            <div className="min-h-screen p-2 m-2 bg-slate-600">
                <Elementoscriados />
            </div>
        </div>
    )

    }
    

    function PcgAnd4k(){
        return(
            <div className="flex flex-row  min-h-screen">
            <div className="w-[20%]  p-2 m-2 bg-slate-600">
                <BarraCriarElementos />
            </div>

            <div className="w-[50%]  p-2 m-2 bg-slate-600">
                <Elementoscriados />
            </div>
            <div className="w-[30%] flex flex-col  p-2 m-2 bg-slate-600">
                <SectionTabDesk />
            </div>
        </div> 
        )
    }