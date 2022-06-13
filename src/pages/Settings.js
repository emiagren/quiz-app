import { Button } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp"

export const Settings = () => {

  const handleSubmit = e => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Quiz App</h2>
      <SelectField label="Category"/>
      <SelectField label="Difficulty"/>
      <SelectField label="Type"/>
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button variant="contained" type="submit" fullWidth>Get started</Button>
      </Box>
    </form>
  )
}

export default Settings