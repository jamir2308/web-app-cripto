import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { StyledBox } from './Index.styles';
import { CryptoConverterProps } from '@/app/models/ProductModel';

const CryptoConverter: React.FC<CryptoConverterProps> = ({ priceUsd }) => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState<number | string>('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = event.target.value;
    setAmount(inputAmount);
    const conversion = parseFloat(inputAmount) / parseFloat(priceUsd);
    setConvertedAmount(!isNaN(conversion) ? conversion.toFixed(8) : '');
  };

  return (
    <StyledBox>
      <Typography variant="h6" gutterBottom>
        Convertidor de USD a BTC
      </Typography>
      <TextField
        label="Cantidad en USD"
        variant="outlined"
        type="number"
        value={amount}
        onChange={handleAmountChange}
        margin="normal"
      />
      <Typography variant="body1">
        {amount && `equivale a ${convertedAmount} BTC`}
      </Typography>
    </StyledBox>
  );
};

export default CryptoConverter;
