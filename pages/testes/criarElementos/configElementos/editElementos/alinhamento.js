import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleButton from '@mui/material/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function Alinhamento() {
    return (
        <div className='m-2'>
            <Accordion className='bg-slate-700'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Alinhamento</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-around space-x-2 bg-slate-500 p-2'>
                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/align-left.png" className='w-5 h-5' />
                            </ToggleButton>

                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/align-center.png" className='w-5 h-5' />
                            </ToggleButton>

                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/align-right.png" className='w-5 h-5' />
                            </ToggleButton>
                        </div>
                        <div className='flex flex-row justify-around space-x-2 bg-slate-500 p-2'>
                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/ios-glyphs/30/null/insert-white-space.png" className='w-5 h-5' />
                            </ToggleButton>

                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/fluency-systems-filled/48/null/around-corner.png" className='w-5 h-5' />
                            </ToggleButton>

                            <ToggleButton value="flex-col" size="small" className='self-center'>
                                <img src="https://img.icons8.com/external-others-pike-picture/50/null/external-evenly-mayonnaise-spice-sauce-others-pike-picture-2.png" className='w-5 h-5' />
                            </ToggleButton>
                        </div>
                    </div>



                </AccordionDetails>
            </Accordion>

        </div>
    )
}