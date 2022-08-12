// import * as React from 'react';
import { useState } from 'react';
import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CustomButton from '../../components/Button/CustomButton';

export default function Form() {
    const [teste, setTeste] = useState('');
    console.log(teste)

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '400px' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='form-inputs'>

                <TextField
                    value={teste}
                    onChange={(e) => setTeste(e.target.value)}
                    required
                    id="standard-required"
                    label="Nome do produto"
                    defaultValue=" "
                    variant="standard"
                />


                <div className='div-numbers'>

                    <TextField
                        id="standard-number"
                        label="Preço"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="standard-number"
                        label="Estoque"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Un</InputAdornment>,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                </div>

                <TextField
                    id="standard-description"
                    label="Descrição do Produto"
                    defaultValue=" "
                    variant="standard"
                />

                <TextField
                    id="standard-helperText"
                    label="Imagem"
                    defaultValue=" "
                    variant="standard"
                />
            </div>
            <div className='form-buttons'>

                <CustomButton action='cancelar' type='reset'></CustomButton>
                <CustomButton action='Adicionar Produto' ></CustomButton>

            </div>
        </Box >
    );
}