import { Button, CircularProgress, Typography } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp"
import useAxios from "../hooks/useAxios"

export const Settings = () => {

  const { response, error, loading } = useAxios({ url: "/api_category.php"});
 
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }else if (error) {
    return (
      <Typography mt={20} variant="h2" color="red">
        Something went wrong...
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" }
  ]

  const typeOptions = [
    { id: "multiple", name: "Multiple choice"},
    { id: "boolean", name: "True or false"},
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Quiz App</h2>
      <SelectField options={response.trivia_categories} label="Category"/>
      <SelectField options={difficultyOptions} label="Difficulty"/>
      <SelectField options={typeOptions} label="Type"/>
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button variant="contained" type="submit" fullWidth>Get started</Button>
      </Box>
    </form>
  )
}

export default Settings