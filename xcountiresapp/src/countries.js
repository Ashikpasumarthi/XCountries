import React from 'react'
import { useEffect, useState } from 'react';
import { CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Typography, Card } from '@mui/material';
export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    console.log(countries)
    useEffect(() => {
        async function getCountries() {
            setIsFetching(true);
            try {
                let response = await fetch("https://xcountries-backend.azurewebsites.net/all");
                if (!response.ok) throw new Error("Failed to fetch products");
                let data = await response.json();
                console.log(data);
                setCountries(data);

            }
            catch (error) {
                console.error(error);
            } finally {
                setIsFetching(false); // ✅ Set fetching to false when done
            }
        }
        getCountries();
    }, [])

    return (
        <>
            <div>countries</div>
            {
                isFetching ? (
                    <div>
                        <CircularProgress />
                        <h3>Loading Products</h3>
                    </div>
                ) :
                    (
                        <Grid container rowSpacing={5} columnSpacing={2} style={{ width: "100%", justifyContent: "center" }}>
                            {
                                countries.map((item) => {
                                    return (
                                        <Grid item key={item.abbr} xs={12} sm={6} md={4} justifyContent='center'>
                                            <Card sx={{
                                                width: "15rem",
                                                height: "15rem"
                                            }} className='hello'>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        image={item.flag}
                                                        alt={item.name}
                                                        style={{ width: "11rem", height: "8rem", margin: "1rem auto" }}
                                                        justifyContent="center"
                                                    />
                                                    <CardContent>
                                                        <Typography variant="h6" align="center">
                                                            {item.name}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    )
            }
        </>
    )
}
