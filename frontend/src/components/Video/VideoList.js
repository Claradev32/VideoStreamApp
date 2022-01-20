import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Link} from 'react-router-dom'

export default function VideoList() {
    return (
        <Container>
            <Grid container spacing={2} marginTop={2}>

                <Grid item xs={12} md={4}>
                    <CardActionArea component="a" href="#">
                        <Card sx={{ display: 'flex' }}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    <Link to="" style={{ textDecoration: "none", color: "black" }}></Link>
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                   
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                image=""
                                alt="alt"
                            />
                        </Card>
                    </CardActionArea>
                </Grid>
            </Grid>
        </Container >
    );
}
