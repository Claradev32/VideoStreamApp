import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar({isLoggedIn}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [video, setVideo] = React.useState("");
    const [cover, setCover] = React.useState("");
    const [title, setTitle] = React.useState("")


    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("video", video);
        formData.append("cover", cover);
        const token = localStorage.getItem('token');
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/video`, formData, {
            headers: ({
                Authorization: 'Bearer ' + token
            })
        })
        handleClose()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <a href={`/`} style={{ textDecoration: "none", color: "white" }}>Streamly</a>
                    </Typography>
                    {isLoggedIn &&
                        <>
                            <Search>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            </Avatar>
                            <div>
                                <Button variant="contained" onClick={handleOpen}>Add New</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
                                                <label>Video Title:</label>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="title"
                                                    name="title"
                                                    autoFocus
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />
                                                <label>Select Video:</label>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="video"
                                                    name="video"
                                                    autoFocus
                                                    type="file"
                                                    onChange={(e) => setVideo(e.target.files[0])}
                                                />
                                                <label>Select Cover Image:</label>
                                                <TextField
                                                    autoFocus
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    name="coverImage"
                                                    type="file"
                                                    id="coverImage"
                                                    onChange={(e) => setCover(e.target.files[0])}
                                                />
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Upload
                                                </Button>
                                            </Box>
                                        </Typography>
                                    </Box>
                                </Modal>
                            </div>

                        </>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
