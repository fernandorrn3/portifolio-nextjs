import Elementos from "./elementos"
import BotoesCriador from "./botoesCriadorElement";
import { useState } from "react"
import SelectElement from "./botaoSelectElement";
import React from 'react';
import { ContextCriador } from "./criadorElementoContext";
import { useRef } from "react";
import EditarElemento from "./editarElemento";
import { useEffect } from "react";
import TextoFormater from "./createBar/textFormater/textFormater";
import Box from "./createBar/boxBar/boxBar";
export default function EditorBuild() {
    const elements = []
    const [elementoCriado, setElementoCriado] = useState([])
    const [textoCriado, setTextoCriado] = useState([])
    const [textoSelect, setTextoSelect] = useState()
    const [conteudoSelect, setConteudoSelect] = useState(null)
    const [imagemCriada, setImagemCriada] = useState([])
    const [item, setItemCriado] = useState([])
    const [itemSelect, setItemSelect] = useState()
    const [visivel, setvisivel] = useState('hidden')
    const container = useRef(null)
    const result = useRef()


    const addUp = () => {
        console.log(elementoCriado)
        function getMembers(list) {
            list.forEach(function (item) {
                console.log(item.label);
                if (item.children) {
                    getMembers(item.children)
                }
            });
        }

        var members = [{ label: 'label1', children: [{ label: 'label21', children: [{ label: 'label30' }] }, { label: 'label22' }] }, { label: 'label2' }, { label: 'label3' }];

        getMembers(members);


    }

    useEffect(() => {
        if (elementoCriado.length != 0) {

            setvisivel('w-full border border-gray-900 m-2')
        } else {


            setvisivel('hidden')
        }
    })

    const addFilho = (e) => {
        const procuraFilho = elementoCriado.find(item => item.id == 2)
        elements.push(procuraFilho.elemento())
        setElementoCriado(elementoCriado.map(item => {
            if (item.id == 1) {
                const novoItem = [...item.filhos, elements]
                return { ...item, filhos: novoItem }
            } else {
                return item
            }
        }))


    }


    const pegandoRef = (e) => {

        result.current.innerHTML = container.current.innerHTML

    }

    return (
        <ContextCriador.Provider value={{
            elementoCriado: elementoCriado,
            conteudoSelect: conteudoSelect,
            textoCriado: textoCriado,
            textoSelect: textoSelect,
            imagemCriada: imagemCriada,
            itemCriado: item,
            itemSelect: itemSelect,
            setElementoCriado: setElementoCriado,
            setItemCriado:setItemCriado

        }}>
            <div className="flex flex-col border-4 border-rose-600  overflow-y-auto min-h-[200px]" >


                <div className="flex flex-row p-4 bg-[#F0FFFF] border border-emerald-500">
                    <div className="w-full border border-gray-900 m-2">

                        <BotoesCriador
                            elementosCriados={setElementoCriado}
                            textoCriado={setTextoCriado}
                            textosCriados={textoCriado}
                            setConteudoSelect={setConteudoSelect}
                            setImagemCriada={setImagemCriada}
                            setItemCriado={setItemCriado} />
                    </div>
                    <div className="w-full border border-gray-900 m-2">


                        <EditarElemento setElementoCriado={setElementoCriado} />

                    </div>
                    <div className={visivel}>
                        <SelectElement
                            setElementoCriado={setElementoCriado}
                            setConteudoSelect={setConteudoSelect}
                            setTextoSelect={setTextoSelect}
                            setTextoCriado={setTextoCriado}
                            setItemSelect={setItemSelect} />

                    </div>
                </div>
                <div className="w-full bg-teal-100 border border-emerald-900 p-4 flex flex-col">
                    <TextoFormater setTextoCriado={setTextoCriado} />
                    <Box/>
                    </div>
                   
                       
                    
                <div className="elementosCriados grow flex flex-col  p-4 border-4 border-slate-900" id="papai" ref={container}>

                    <Elementos />

                </div>
                <div ref={result}></div>
            </div>
        </ContextCriador.Provider >
    )
}