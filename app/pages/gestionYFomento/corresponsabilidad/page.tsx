"use client"
import BasicLayout from '@/app/layouts/BasicLayout'
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaidIcon from '@mui/icons-material/Paid';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import WorkIcon from '@mui/icons-material/Work';
import LayoutFomento from '@/app/layouts/LayoutFomento';

import { BaseForm } from '@/app/components/General/BaseForm';
import { formInfoPorCedula } from '@/app/types/salud/servicios/informacion/formsInformacion';
import { actividades } from './interface/actividades.interface';
import { apiActividadCorresponsabilidad } from '@/app/api/GestionFomento/corresponsabilidad/actividad_corresponsabilidad';
import { horasPendientes } from './interface/horasPendientes.interface';
import { apiHorasCorresponsabilidad } from '@/app/api/GestionFomento/corresponsabilidad/horas_corresponsabilidad';


export default function Corresponsabilidad() {

    //1. que una persona pueda consultar sus actividades de corresponsabilidad
    const [paramsConsultarActividades, setParamsConsultarActividades] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2. change handler
    const handleChgConsultarCorresp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParamsConsultarActividades({
            ...paramsConsultarActividades, [e.target.name]: e.target.value
        })
    }

    //3. data holders
    const [actividadesCorresponsabilidad, setActividadesCorresponsabilidad] = React.useState<actividades[] | null>(null)

    //4. submit handlers.
    const handleConsultaActividadesCorr = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiActividadCorresponsabilidad.getActividadPersona(paramsConsultarActividades.cedula).then((response) => {
            setActividadesCorresponsabilidad(response.data)
            console.log(actividadesCorresponsabilidad)
        }).catch((Error) => {
            console.log(`${Error} : No es posible consultar actividades.`)
        })
    }


    //1.
    const [paramsConsultarHoras, setParamsConsultarHoras] = React.useState<formInfoPorCedula>({
        cedula: 0
    })

    //2.
    const handleChgHoras = (e : React.ChangeEvent<HTMLInputElement>) => {
        setParamsConsultarHoras({
            ...paramsConsultarHoras, [e.target.name] : e.target.value
        })
    }

    //3.
    const [horasCorresponsabilidad, setHorasCorresponsabilidad] = React.useState<horasPendientes[] | null> (null);
    
    //4.
    const hanldeConsultarHoras = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        apiHorasCorresponsabilidad.getHorasUser(paramsConsultarHoras.cedula).then((response) => {
            setHorasCorresponsabilidad(response.data);
            console.log(horasCorresponsabilidad)
        }).catch((Error) => {
            console.log(`${Error} : No se puede consultar horas de corresponsabilidad.`)
        })
    }


    return (
        <LayoutFomento>
            <p>Tres componentes para verificar horas faltantes y actividades realizadas y otro pa subir actividades realizadas.</p>

            <Grid container
                component='main'
                alignItems='center'
                justifyContent='center'
                direction='column'
                spacing={5}
                sx={{ width: '100%' }}>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Mi corresponsabilidad'
                        children={
                            <>
                                <TextField name='cedula' onChange={handleChgConsultarCorresp} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>

                        }

                        children3={
                            <>

                                {
                                    actividadesCorresponsabilidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%" }}>

                                            {
                                                // corActividades!.map(() => (
                                                //     <Grid item xs={3}>

                                                //     </Grid>
                                                // ))

                                            }
                                        </Grid>

                                    ) : null}
                            </>
                        }
                        submit={handleConsultaActividadesCorr}
                    ></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: '75%' }}
                >

                    <BaseForm title='Horas Pendientes'
                        children={
                            <>
                                <TextField name ='cedula' onChange={handleChgHoras} placeholder='Cédula' />
                            </>
                        }

                        children2={
                            <Button type='submit' variant="contained" sx={{ color: "black", bgcolor: "#E74C3C" }} endIcon={<SearchIcon />}>Consultar</Button>
                        }

                        children3={
                            <>

                                {
                                    horasCorresponsabilidad !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                        <Grid container
                                            component="div"
                                            justifyContent="center"
                                            alignItems="center"
                                            direction="row"
                                            spacing={1}
                                            sx={{ height: "100%" }}>

                                            {
                                                // corHoras!.map((convocatoria) => (
                                                //     <Grid item xs={3}>

                                                //     </Grid>
                                                // ))

                                            }
                                        </Grid>

                                    ) : null}
                            </>
                        }
                        submit={hanldeConsultarHoras}
                    ></BaseForm>

                </Grid>

            </Grid>
        </LayoutFomento>
    )
}