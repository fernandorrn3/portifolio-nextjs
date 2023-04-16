
import { useDispatch } from "react-redux";
import { addContainer } from "../../../../../reducer/elementosReducers";
import { ElementorBuilderContext } from "../../contextElementorBuilder/elementorbuilderContext";
import { useContext } from "react";
import { createElement } from "react"
import nextId from "react-id-generator";
import Image from 'next/image'

export function Container() {

    const elementos = useContext(ElementorBuilderContext)




    const dispatch = useDispatch()
    const criarContainer = (e) => {
        const idElemento = nextId();
        //let exclusivo = (Math.random() + 1).toString(36).substring(7);  
        const adiciona = {
            id: idElemento,
            tipo: 'container',
            filhos: [],
            classes: 'flex min-h-min overflow-auto border-transparent border-0 p-2 hover:border-dashed hover:border-2 hover:border-indigo-600',
            elemento: function () {
                return createElement
                    ('div',
                        {
                            id: this.id,
                            children: this.filhos.map((el) => {
                                return el.elemento()
                            }),
                            className: this.classes,
                        },
                    )
            },
            botao: {
                nome: 'container',
                id: idElemento,
            },
        }

        dispatch(addContainer(adiciona))

        /*elementos.setContainer(prevState => {
            return [...prevState, adiciona]
        })*/
    }

    return (
        <div className='m-1 w-full bg-slate-700'>

            <div className='flex flex-col justify-center hover:cursor-pointer h-20 '
                onClick={criarContainer}>
                    <Image
                        src={'/container.png'}
                        width={35}
                        height={35}
                        objectFit="contain"
                    />
                <div className='self-center'><p className=" text-cyan-50">container</p></div>
            </div>

        </div>
    )

}

