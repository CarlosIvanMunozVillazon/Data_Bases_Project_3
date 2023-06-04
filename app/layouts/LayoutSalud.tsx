"use client"

import React, { Children } from 'react'
import { Breadcrumbs, Button, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'
import { BasicNavbar } from '@/app/components/General/BasicNavbar';

type saludLayoutProps = {
    children: React.ReactNode
}


export default function LayoutSalud({ children }: saludLayoutProps) {

    //Health Secction layout
    return (
        <>
            <BasicNavbar backgroundColor='Teal' pageName='Salud'>
                {/*Menu elements within the toggle drawer.*/}
                <Typography variant="h6" fontWeight='bold' textAlign="center">Servicios</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/citasDisponibles'>
                        <Typography variant="body1" textAlign="center">Citas disponibles</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/misCitas'>
                        <Typography variant="body1" textAlign="center">Mis citas</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/cancelarCita'>
                        <Typography variant="body1" textAlign="center">Cancelar cita</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/agendarCita'>
                        <Typography variant="body1" textAlign="center">Agendar cita</Typography>
                    </Link>

                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/servicios/resultadosCita'>
                        <Typography variant="body1" textAlign="center">Resultados de citas</Typography>
                    </Link>

                </IconButton>
                <Typography variant="h6" fontWeight='bold' textAlign="center">Trámites</Typography>
                <Divider />

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/estadoIncapacidad'>
                        <Typography variant="body1" textAlign="center">Estado de Incapacidad</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/modificarIncapacidad'>
                        <Typography variant="body1" textAlign="center">Modificar Incapacidad</Typography>
                    </Link>
                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/estadoAtencionSalud'>
                        <Typography variant="body1" textAlign="center">Estado de Atenciones</Typography>
                    </Link>

                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/modificarAtenciones'>
                        <Typography variant="body1" textAlign="center">Modificar Atenciones</Typography>
                    </Link>

                </IconButton>

                <IconButton>
                    <Link underline='hover' color='GrayText' href='/pages/salud/tramites/miPerfildeRiesgo'>
                        <Typography variant="body1" textAlign="center">Mi pérfil de riesgo</Typography>
                    </Link>

                </IconButton>

            </BasicNavbar>

            <Grid
                container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: "100%", mt: 1 }}
                spacing={2}
                maxHeight="xl"
            >

                <Grid item>


                    <Stack direction="row"
                        justifyContent="left"
                        alignItems="left"
                        spacing={8}
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="text.primary" href="/pages/actividadFisica">
                                Actividad Física & Deporte
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/gestionYFomento"
                            >
                                Gestión & Fomento Socioeconómico
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                href="/pages/salud"
                            >
                                Salud
                            </Link>
                        </Breadcrumbs>

                    </Stack>
                </Grid>

            </Grid>

            {children}


        </>
    )
}