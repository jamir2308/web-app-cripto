import { Box, Button, Grid, Typography } from '@mui/material'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TagIcon from "@mui/icons-material/Tag";
import Link from 'next/link'
import React from 'react'
import { CardIcon } from '../card/Icon';
import { CardDetails, WraperItems } from './Index.styles';
import { ChangeArrowIndicator } from './ChangeArrowIndicator';
import { Coin } from '@/app/models/ProductModel';

function Index(coin : Coin) {
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    <Typography variant="h3" color="#90b2b9">
                        Detalles de la Moneda
                    </Typography>
                    <Typography variant="caption">
                        {coin.name} ({coin.symbol})
                    </Typography>
                </Box>
                <Link href='/dashboard/products'>
                    <Button variant="text" fullWidth>Volver</Button>
                </Link>
            </Box>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <WraperItems>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={2.4}
                            justifyContent="center"
                            textAlign="justify"
                        >
                            <CardDetails $bgColor="white">
                                <Box>
                                    <Typography variant="h5" mb={2}>
                                        Precio USD
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <AttachMoneyIcon fontSize="small" />
                                        {coin.price_usd}
                                    </Typography>
                                </Box>
                            </CardDetails>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={2.4}
                            justifyContent="center"
                            textAlign="justify"
                        >
                            <CardDetails $bgColor="white">
                                <Box>
                                    <Typography variant="h5" mb={2}>
                                        Ranking
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        mt={1}
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <TagIcon fontSize="small" />
                                        {coin.rank}
                                    </Typography>
                                </Box>
                            </CardDetails>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={2.4}
                            justifyContent="center"
                            textAlign="justify"
                        >
                            <CardDetails $bgColor="white">
                                <Box>
                                    <Typography variant="h5" mb={2}>
                                        Capitalización
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <AttachMoneyIcon fontSize="small" />
                                        {coin.market_cap_usd}
                                    </Typography>
                                </Box>
                            </CardDetails>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={2.4}
                            justifyContent="center"
                            textAlign="justify"
                        >
                            <CardDetails $bgColor="white">
                                <Box>
                                    <Typography variant="h5" mb={2}>
                                        Volumen (24h)
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <AttachMoneyIcon fontSize="small" />
                                        {coin.volume24}
                                    </Typography>
                                </Box>
                            </CardDetails>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={2.4}
                            justifyContent="center"
                            textAlign="justify"
                        >
                            <CardDetails $bgColor="white">
                                <Box>
                                    <Typography variant="h5" mb={2}>
                                        Oferta Circulante
                                    </Typography>
                                    <Typography variant="caption" mt={1}>
                                        {coin.csupply}
                                    </Typography>
                                </Box>
                            </CardDetails>
                        </Grid>
                    </WraperItems>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    container
                    spacing={4}
                    direction="row"
                    flexWrap="wrap"
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        justifyContent="center"
                        textAlign="justify"
                    >
                        <CardDetails>
                            <Box>
                                <Typography variant="h5" color="black">
                                    Cambio 1h
                                </Typography>
                                <ChangeArrowIndicator value={coin.percent_change_1h} />
                            </Box>
                            <CardIcon value={coin.percent_change_1h} />
                        </CardDetails>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        justifyContent="center"
                        textAlign="justify"
                    >
                        <CardDetails>
                            <Box>
                                <Typography variant="h5">Cambio 24h</Typography>
                                <ChangeArrowIndicator value={coin.percent_change_24h} />
                            </Box>
                            <CardIcon value={coin.percent_change_24h} />
                        </CardDetails>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        justifyContent="center"
                        textAlign="justify"
                    >
                        <CardDetails>
                            <Box>
                                <Typography variant="h5">Cambio 7d</Typography>
                                <ChangeArrowIndicator value={coin.percent_change_7d} />
                            </Box>
                            <CardIcon value={coin.percent_change_7d} />
                        </CardDetails>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Index