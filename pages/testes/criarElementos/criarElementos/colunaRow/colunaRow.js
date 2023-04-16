import { createElement } from 'react';
import { useDispatch } from 'react-redux';
import { ElementorBuilderContext } from '../../contextElementorBuilder/elementorbuilderContext';
import { addRow } from '../../../../../reducer/elementosReducers';
import { useContext, useState } from 'react';
import nextId from "react-id-generator";
import Image from 'next/image';

export function ColunaLayer() {
    const criarColuna = () =>{

    }
    return (
        <div className='m-1 w-full bg-slate-700 rounded-md'>

        <div className='flex flex-col justify-center hover:cursor-pointer h-20 '
            onClick={criarColuna}>
                <Image
                    src={'/column.png'}
                    width={35}
                    height={35}
                    objectFit="contain"
                />
            <div className='self-center'><p className=" text-cyan-50">coluna</p></div>
        </div>

    </div>
    )
}

export function RowLayer() {
    const elementos = useContext(ElementorBuilderContext)

    const addRows = (e) => {
        const idElemento = nextId('row-');
        if (elementos.containerSelect != null) {
            elementos.setIdRow(prevState =>{
                return[
                    ...prevState,
                    idElemento
                ]
            })
            
            const adiciona = {
                id: idElemento,
                containerSelect: elementos.containerSelect,
                paiSelect:elementos.rowSelect,
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
                    nome: 'row',
                    id: idElemento,
                },
            }

            dispatch(addRow(adiciona))

        } else {
            alert('selecione um container')
        }

    }

    return (
        <div className='m-1 w-full bg-slate-700'>

            <div className='flex flex-col justify-center hover:cursor-pointer h-20 '
                onClick={addRows}>
                    <Image
                        src={'/rows.png'}
                        width={35}
                        height={35}
                        objectFit="contain"
                    />
                <div className='self-center'><p className=" text-cyan-50">rows</p></div>
            </div>

        </div>
    )
}