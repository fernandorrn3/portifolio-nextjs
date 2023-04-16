import { useContext } from "react"
import { ElementorBuilderContext } from "../contextElementorBuilder/elementorbuilderContext"
import { useSelector } from "react-redux"
export default function Elementoscriados() {
    const elementos = useContext(ElementorBuilderContext)
    const procura = useSelector(el => el.elementosReducers.elementos)
    console.log(procura)
    return (
        <div>
            <h1>elementos Criados</h1>
            {procura.map((el) => {
                return (
                    <div>
                        {el.elemento()}
                    </div>

                )
            })}
        </div>
    )
}


