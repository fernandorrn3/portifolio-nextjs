import { ElementorBuilderContext } from '../../contextElementorBuilder/elementorbuilderContext';
import { useContext, useState } from 'react';
import { createElement } from 'react';
import { useDispatch } from 'react-redux';
import nextId from "react-id-generator";
import { addItem } from '../../../../../reducer/elementosReducers';
import Image from 'next/image';
export function Item() {
    const dispatch = useDispatch()
    const elementos = useContext(ElementorBuilderContext)

    const criarItem = () => {
        const idElemento = nextId('item-');
        if (elementos.containerSelect != null) {
            elementos.setIdItem(prevState => {
                return [
                    ...prevState,
                    idElemento
                ]
            })

            const adiciona = {
                id: idElemento,
                containerSelect: elementos.containerSelect,
                paiSelect: elementos.itemSelect,
                filhos: [],
                classes: 'flex flex-row min-h-min overflow-auto border-transparent border-0 p-2 hover:border-dashed hover:border-2 hover:border-indigo-600 w-full',
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
                    nome: 'item',
                    id: idElemento,
                },
            }

            dispatch(addItem(adiciona))

        } else {
            alert('selecione um container')
        }
    }

    return (

        <div className='m-1 w-full bg-slate-700'>

            <div className='flex flex-col justify-center hover:cursor-pointer h-20'
                onClick={criarItem}>
                <Image
                    src={'/internal.png'}
                    width={35}
                    height={35}
                    objectFit="contain"
                />
                <div className='self-center'><p className=' text-cyan-50'>Item</p></div>
            </div>

        </div>
    )
}







