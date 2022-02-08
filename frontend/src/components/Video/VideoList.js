import * as React from 'react'
import Typography from '@mui/material/Typography'
import {Container} from '@mui/material'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function VideoList({setIsLoggedIn}) {
    const [videos, setVideos] = React.useState([])
    const navigate = useNavigate()
    React.useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem('token')
                const {data} = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/video`, {
                    headers: ({
                        Authorization: 'Bearer ' + token
                    })
                })
                setVideos(data)

            } catch {
                setIsLoggedIn(false)
                navigate('/')
            }
        }

        fetchData()
    }, [navigate, setIsLoggedIn])
    return (
        <Container>
            <Grid container spacing={2} marginTop={2}>

                {videos.map((video) => {
                    return <Grid item xs={12} md={4} key={video._id}>
                        <CardActionArea component="div" href="#">
                            <Link to={`/video/${video._id}`} style={{textDecoration: "none", color: "black"}}>
                                <Card sx={{display: 'flex'}}>
                                    <CardContent sx={{flex: 1}}>
                                        <Typography component="h2" variant="h5">
                                            {video.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            Uploaded at {video.uploadDate}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        sx={{width: 160, display: {xs: 'none', sm: 'block'}}}
                                        image={`${process.env.REACT_APP_API_ENDPOINT}/${video.coverImage}`}
                                        alt="alt"
                                    />
                                </Card>
                            </Link>
                        </CardActionArea>
                    </Grid>
                })}
            </Grid>
        </Container>
    )
}
