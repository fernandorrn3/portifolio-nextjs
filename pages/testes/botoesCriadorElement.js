import { createElement } from "react";
import { useContext } from "react";
import { ContextCriador } from "./criadorElementoContext";
import Image from "next/image";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from "react";


export default function BotoesCriador(props) {
    const elementos = useContext(ContextCriador)



    const criarBox = (e) => {

        let exclusivo = (Math.random() + 1).toString(36).substring(7);

        const adiciona = {
            id: exclusivo,
            filhos: [],
            classes: 'flex min-h-min overflow-auto border-transparent border-0 p-2 ',
            tagElemento: e.target.name,

            elemento: function () {
                return createElement
                    (this.tagElemento,
                        {
                            id: this.id, children: this.filhos.map((el) => {
                                return el.elemento()
                            }), className: this.classes
                        },
                    )
            },
            botao: {
                nome: 'Box',
                id: exclusivo,
                estado: false

            },


        }

        console.log(adiciona)
        props.elementosCriados(prevState => {
            return [...prevState, adiciona]
        })


    }

    const criarItem = (e) => {
        let exclusivo = (Math.random() + 1).toString(36).substring(7);
        if (elementos.conteudoSelect != null) {
            const adiciona = {

                id: exclusivo,
                filhos: [],
                classes: 'min-h-min overflow-auto border-transparent border-0 p-2 w-full',
                name: e.target.name,
                elemento: function () {
                    return createElement(
                        this.name,
                        {
                            id: this.id, className: this.classes, children: this.filhos.map((el) => {
                                return el.elemento()
                            })
                        }
                    )
                },
                botao: {
                    nome: 'Item',
                    id: exclusivo,
                    estado: false

                },
            }

            props.elementosCriados(elementos.elementoCriado.map((el) => {
                if (el.id == elementos.conteudoSelect.id) {
                    const novo = [...el.filhos, adiciona]
                    return { ...el, filhos: novo }
                }
                else{
                    return el
                }
            }))

            props.setItemCriado(prevState => {
                return [...prevState, adiciona]
            })
        } else {
            alert('selecione 1 box')
        }

    }

  




    const criarImagem = (e) => {
        if (elementos.itemSelect != null) {
            let exclusivo = (Math.random() + 1).toString(36).substring(7);
            /*   const imagem = <Image src={'/siginimg.jpg'} layout='fill' />
             
               const adiciona = {
                   id: exclusivo,
                   filhos: imagem,
                   tagElemento: e.target.name,
                   classes: 'relative w-40 h-40 ',
                   elemento: function () {
                       return createElement(
                           'div',
                           {
                               id: this.id,
                               children: this.filhos,
                               className: this.classes
                           }
                       )
                   }
               }*/

            const adiciona = {
                id: exclusivo,
                tagElemento: e.target.name,
                classes: 'w-40 h-40 float-left border-transparent border-0 object-cover	',
                elemento: function () {
                    return createElement(
                        'img',
                        {
                            id: this.id,
                            src: '/siginimg.jpg',
                            className: this.classes
                        }
                    )
                },
                botao: {
                    nome: 'imagem',
                    id: exclusivo,
                    estado: false
                }
            }

            props.elementosCriados(elementos.elementoCriado.map((el) => {
                const filhos = el.filhos.map((il) => {
                    if (il.id == elementos.itemSelect.id) {
                        const novo = [...il.filhos, adiciona]
                        return { ...il, filhos: novo }
                    }else{
                        return il
                    }
                })               
                    return {...el,filhos:filhos}                
            }))

            props.setImagemCriada(prevState => {
                return [...prevState, adiciona]
            })

        }
        else {
            alert('selecione 1 item')
        }
    }

    return (
        <div className="flex  flex-col ">
            <div className="m-2">
                <div>
                    <h1 className="text-base m-1">Criar Caixas</h1>
                </div>

                <div className="flex mt-2">

                    <Button variant="contained" size="small" onClick={criarBox} name={'div'} className="buttonCriarElemento m-1">
                        Box
                    </Button>


                    <Button variant="contained" onClick={criarItem} size="small" name={'div'} className="buttonCriarElemento m-1">
                        item
                    </Button>

                </div>
            </div>
         

            <div className="m-2">
                <div>
                    <h1 className="text-base m-1">Criar imagem</h1>
                </div>

                <div className="flex mt-2">
                    <Button className="buttonCriarElemento m-1" variant="contained" size="small" name={'img'} onClick={criarImagem}>
                        imagem
                    </Button>
                </div>

            </div>

        </div>
    )
}

