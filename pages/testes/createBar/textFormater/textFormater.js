import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import TitleIcon from '@mui/icons-material/Title';
import { ContextCriador } from '../../criadorElementoContext';
import { useContext } from 'react';
import { useState } from 'react';
import { createElement } from "react";

export default function TextoFormater(props) {
    const elementos = useContext(ContextCriador)
    const [formats, setFormats] = useState(() => []);
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const criarTexto = (e) => {
      
        const formatos = formats.map((el)=>{
            return el
        }).join(' ')
        
      
        if (elementos.itemSelect != null) {


            let exclusivo = (Math.random() + 1).toString(36).substring(7);

            const adiciona = {
                id: exclusivo,
                filhos: [],
                tagElemento: e.target.name,
                classes: 'text-black border-transparent border-0 ' + formatos,
                elemento: function () {
                    return createElement(this.tagElemento,
                        { id: this.id, children: this.filhos, contentEditable: 'plaintext-only', className: this.classes }
                    )
                },

                botao: {
                    nome: 'botao H1',
                    id: exclusivo,
                    estado: false

                }

            }

            props.setTextoCriado(prevState => {
                return [...prevState, adiciona]
            })

            elementos.setElementoCriado(elementos.elementoCriado.map((el) => {
                const filhos = el.filhos.map((il) => {
                    if (il.id == elementos.itemSelect.id) {
                        const novo = [...il.filhos, adiciona]
                        return { ...il, filhos: novo }
                    } else {
                        return il
                    }
                })
                return { ...el, filhos: filhos }
            }))
        }
        else {
            alert('selecione um item')
        }
    }

    return (
       
            <div>
               
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormat}
                    aria-label="text formatting">
                        
                    <ToggleButton value="font-bold" aria-label="bold" size="small" >
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic" size="small" >
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined" size="small" >
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton aria-label="color" size="small" onClick={handleClick} aria-describedby={id}>
                        <TitleIcon />
                        <ArrowDropDownIcon />
                        <Popper id={id} open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} className='flex flex-col'>

                                        <Button onClick={criarTexto} name='h1' variant="text" className='text-3xl'>
                                            h1- titulo
                                        </Button>

                                        <Button variant="text" className='text-2xl'>h2- titulo</Button>
                                        <Button variant="text" className='text-xl'>h3- titulo</Button>
                                        <Button variant="text" className='text-lg'>h4- titulo</Button>
                                        <Button variant="text" className='text-base'>h5- titulo</Button>
                                        <Button variant="text">p- Paragrafo</Button>
                                    </Box>
                                </Fade>
                            )}
                        </Popper>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

       
    )
}