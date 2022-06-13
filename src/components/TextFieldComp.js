import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TextFieldComp = () => {

  const handleChange = () => {

  }

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <TextField 
        onChange={handleChange}
        variant="outlined"
        label="Amount of questions"
        type="number"
        size="small"/>
      </FormControl>
    </Box>
  )
}

export default TextFieldComp