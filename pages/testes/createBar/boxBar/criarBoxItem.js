import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { ContextCriador } from '../../criadorElementoContext';
import { createElement } from 'react';

export default function CriarBoxItem(props) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const elementos = useContext(ContextCriador)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

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
        elementos.setElementoCriado(prevState => {
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

            elementos.setElementoCriado(elementos.elementoCriado.map((el) => {
                if (el.id == elementos.conteudoSelect.id) {
                    const novo = [...el.filhos, adiciona]
                    return { ...el, filhos: novo }
                }
                else {
                    return el
                }
            }))

            elementos.setItemCriado(prevState => {
                return [...prevState, adiciona]
            })
        } else {
            alert('selecione 1 box')
        }

    }
    return (
        <div>
            
            <ToggleButton onClick={handleClick}>
                <AddBoxRoundedIcon />
            
                <ArrowDropDownIcon />
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} className='flex flex-col'>
                            <Button variant="text" name='div' onClick={criarBox}>Criar Box</Button>
                            <Button variant="text" name='div' onClick={criarItem}>Criar item</Button>
                            </Box>
                        </Fade>
                    )}
                </Popper>
            </ToggleButton>
        </div>

    )
}