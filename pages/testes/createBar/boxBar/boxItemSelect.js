import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import ToggleButton from '@mui/material/ToggleButton';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import { useState } from 'react';
export default function SelectItemBox() {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <ToggleButton onClick={handleClick}>
            <PlaylistAddCheckRoundedIcon />
            <ArrowDropDownIcon />
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} className='flex flex-row'>
                            <div className='m-1'>
                                selecionar box
                            </div>

                            <div className='m-1'>
                                selecionar item
                            </div>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </ToggleButton>
    )


}