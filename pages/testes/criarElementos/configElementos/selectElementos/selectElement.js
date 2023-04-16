import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ElementorBuilderContext } from '../../contextElementorBuilder/elementorbuilderContext';

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function SelectElementos() {

    const dispatch = useDispatch()
    const container = useSelector(item => item.elementosReducers.elementos)
    const elementos = useContext(ElementorBuilderContext)

    const containerSelect = (e) => {
        const selecionarElemento = {
            addBorda: 'border-slate-900  border-4',
            removeBorda: 'border-transparent border-0',
            id: e.target.id,
            checado: e.target.checked,
            tipoElemento: 'container'
        }

        e.target.checked ? elementos.setContainerSelect(e.target.id) : elementos.setContainerSelect(null)

        //adicionei uma row
        //seleciona o elemento pai que a row sera inserida
        //mostrar o container que o row esta inserida

        /*const addBorda = 'border-slate-900  border-4'
        const removeBorda = 'border-transparent border-0'
        e.target.checked ? elementos.setBoxSelect(e.target.id) : elementos.setBoxSelect(null)
        const adicionaBorda = selecionaBox.map((el) => {
            if (el.id == e.target.id) {
                const addClass = e.target.checked ? el.classes.replace(removeBorda, addBorda) : el.classes.replace(addBorda, removeBorda)
                return { ...el, classes: addClass }
            } else {
                return el
            }
        })
        elementos.setBoxCriado(adicionaBorda)*/
    }


    const selecionaRow = (e) => {
        const selecionarElemento = {
            addBorda: 'border-slate-900  border-4',
            removeBorda: 'border-transparent border-0',
            id: e.target.id,
            checado: e.target.checked,
            tipoElemento: 'row'
        }
        e.target.checked ? elementos.setItemSelect(e.target.id) : elementos.setItemSelect(null)

    }


    /*const selectItem = elementos.itemCriado.map((el) => {   
        
        return (

            <FormGroup>
                <FormControlLabel
                    control={<Checkbox size='small' id={el.id}
                        onClick={itemSelect} />}
                    label="item" />

            </FormGroup>


        )
    })*/

    //filhos tem id1,id2,id3,id4


    const selectBox = container.map((el) => {
        return (
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox size='small' id={el.id}
                        onClick={containerSelect} />}
                    label="container" />
            </FormGroup>
        )
    })

    const selectRow = elementos.idItem.map((el) => {
        return (
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox size='small' id={el}
                        onClick={selecionaRow} />}
                    label="Row" />
            </FormGroup>
        )
    })

    return (
        <div>
            <div>
                <p className="text-lg">select elementos</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-wrap'>
                    {selectBox}
                </div>
                <div className='flex flex-wrap'>
                    {selectRow}
                </div>
            </div>
        </div>
    )
}

