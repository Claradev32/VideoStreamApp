import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function Video() {
    return (
        <Container>
            <Grid item xs={12} md={12} marginTop={2}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: 1 }}>
                            <video autoPlay controls width='200'>
                                
                            </video>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
            <Grid container spacing={2} marginTop={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary">
                        Created by:
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" color="primary">
                        Created: 
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5">
                       
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
