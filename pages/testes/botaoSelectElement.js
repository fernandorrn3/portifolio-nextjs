import { useContext, useEffect } from "react";
import { ContextCriador } from "./criadorElementoContext";

export default function SelectElement(props) {

    const elementos = useContext(ContextCriador)



    const selecionarElemento = (e) => {


        const procura = elementos.elementoCriado.find(item => item.id == e.target.id)
        e.target.checked ? props.setConteudoSelect(procura) : props.setConteudoSelect(null)
        const addBorda = 'border-slate-900  border-4'
        const removeBorda = 'border-transparent border-0'

        props.setElementoCriado(elementos.elementoCriado.map((item) => {



            if (item.id == e.target.id) {
                const addClass = e.target.checked ? item.classes.replace(removeBorda, addBorda) : item.classes.replace(addBorda, removeBorda)
                return { ...item, classes: addClass }

            } else {
                return item

            }

        }))



    }


    const selectTexto = (e) => {

        const procura = elementos.textoCriado.find(item => item.id == e.target.id)
        e.target.checked ? props.setTextoSelect(procura) : props.setTextoSelect(null)

        const addBorda = 'border-emerald-600 border-4'
        const removeBorda = 'border-transparent border-0'
        const selecionarH1 = [...elementos.elementoCriado]

        const artwork = selecionarH1.map((el) => {
            const novosFilhos = el.filhos.map((il) => {
                const filhoDo = il.filhos.map((ul) => {
                    if (ul.id == e.target.id) {
                        const addClass = e.target.checked ? ul.classes.replace(removeBorda, addBorda) : ul.classes.replace(addBorda, removeBorda)
                        return { ...ul, classes: addClass }

                    } else {
                        return ul
                    }
                })
                return { ...il, filhos: filhoDo }
            })
            return { ...el, filhos: novosFilhos }
        })


        props.setElementoCriado(artwork)


    }

    const selectItem = (e) => {

        const procura = elementos.itemCriado.find(item => item.id == e.target.id)
        e.target.checked ? props.setItemSelect(procura) : props.setItemSelect(null)

        const addBorda = 'border-emerald-600 border-4'
        const removeBorda = 'border-transparent border-0'
        const selecionarItem = [...elementos.elementoCriado]
        const artwork = selecionarItem.map((el) => {

            const novos = el.filhos.map((il) => {
                if (il.id == e.target.id) {
                    const addClass = e.target.checked ? il.classes.replace(removeBorda, addBorda) : il.classes.replace(addBorda, removeBorda)
                    return { ...il, classes: addClass }
                } else {
                    return il
                }
            })

            return { ...el, filhos: novos }
        })


        props.setElementoCriado(artwork)

    }

    const selecionarImagem = (e) => {

        const pegaElementos = [...elementos.elementoCriado]
        const addBorda = 'border-emerald-600 border-4'
        const removeBorda = 'border-transparent border-0'

        const artwork = pegaElementos.map((el) => {
            const novosFilhos = el.filhos.map((il) => {
                const filhoDo = il.filhos.map((ul) => {
                    if (ul.id == e.target.id) {
                        const addClass = e.target.checked ? ul.classes.replace(removeBorda, addBorda) : ul.classes.replace(addBorda, removeBorda)
                        return { ...ul, classes: addClass }

                    } else {
                        return ul
                    }
                })
                return { ...il, filhos: filhoDo }
            })
            return { ...el, filhos: novosFilhos }
        })

        /*
        const selectImg = pegaElementos.map((el) => {
            const novos = el.filhos.map((il) => {
                if (il.id == e.target.id) {
                    const addClass = e.target.checked ? il.classes.replace(removeBorda, addBorda) : il.classes.replace(addBorda, removeBorda)
                    return { ...il, classes: addClass }

                } else {
                    return il
                }
            })
            return { ...el, filhos: novos }
        })
        */
        props.setElementoCriado(artwork)
    }

    return (

        <div className='flex flex-col'>
            {elementos.elementoCriado.length != 0 &&
                <div className="m-2">
                    <div className="text-base m-1"><h1>Selecionar Box</h1></div>
                    <div className="flex flex-wrap mt-2">

                        {elementos.elementoCriado.map((el) => {
                            return (
                                <div className="m-1">


                                    <input type={'checkbox'} id={el.botao.id} onClick={selecionarElemento} value={el.botao.nome} className='gruposbotao' />
                                    <label for={el.botao.id}>{el.botao.nome}</label><br />

                                </div>
                            )
                        })}
                    </div>
                </div>
            }

            {elementos.itemCriado.length != 0 &&

                <div className="m-2">
                    <div className="text-base m-1"><h1>Selecionar Item</h1></div>
                    <div className="flex flex-wrap mt-2">

                        {elementos.itemCriado.map((el) => {
                            return (
                                <div className="m-1">


                                    <input type={'checkbox'} id={el.botao.id} onClick={selectItem} value={el.botao.nome} className='gruposbotao' />
                                    <label for={el.botao.id}>{el.botao.nome}</label><br />

                                </div>
                            )
                        })}
                    </div>
                </div>
            }


            {elementos.textoCriado.length != 0 &&
                <div className="m-2">
                    <div className="text-base m-1"><h1>Selecionar texto</h1></div>
                    <div className="flex flex-wrap mt-2">
                        {elementos.textoCriado.map((el) => {
                            return (
                                <div className="m-1">

                                    <input type={'checkbox'} id={el.botao.id} onClick={selectTexto} value={el.botao.nome} className='gruposbotao' />
                                    <label for={el.botao.id}>{el.botao.nome}</label><br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            {elementos.imagemCriada.length != 0 &&
                <div className="m-2">
                    <div className="text-base m-1"><h1>Selecionar imagem</h1></div>
                    <div className="flex flex-wrap mt-2">
                        {elementos.imagemCriada.map((el) => {
                            return (
                                <div className="m-1">

                                    <input type={'checkbox'} id={el.botao.id} value={el.botao.nome} onClick={selecionarImagem} className='gruposbotao' />
                                    <label for={el.botao.id}>{el.botao.nome}</label><br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            }

        </div>


    )
}



