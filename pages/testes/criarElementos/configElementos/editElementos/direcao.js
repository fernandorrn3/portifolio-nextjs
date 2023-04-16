import ToggleButton from '@mui/material/ToggleButton';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*<div className='flex flex-col p-2 bg-slate-200 rounded-md m-1'>
        
<div className='flex flex-row justify-around space-x-2 '>
    <ToggleButton value="flex-row" size="small"  className='w-6 h-6 self-center'>
        <AlignHorizontalCenterIcon />
    </ToggleButton>
    <ToggleButton value="flex-col" size="small" className='w-6 h-6 self-center'>
        <AlignVerticalCenterIcon />
    </ToggleButton>
</div>
</div>*/

export default function Direcao() {
    return (
        <div className='m-2'>


            <Accordion className='bg-slate-700'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">

                    <Typography>Direcao</Typography>

                </AccordionSummary>
                <AccordionDetails>

                    <div className='flex flex-row justify-around space-x-2 bg-slate-500 p-2'>
                        <ToggleButton value="flex-row" size="small" className='w-6 h-6 self-center'>
                            <AlignHorizontalCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="flex-col" size="small" className='w-6 h-6 self-center'>
                            <AlignVerticalCenterIcon />
                        </ToggleButton>

                    </div>
                </AccordionDetails>
            </Accordion>

        </div>

    )
}