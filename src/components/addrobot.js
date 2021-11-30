import { Button } from "@chakra-ui/react";
import { FormGen } from './formgen';

export const AddRobots = ({ handleFirst, handleLast, handleEmail, handleSubmit }) => {
  return (
  <form onSubmit={handleSubmit}>
    <FormGen id="first-name" label="First name" type="text" handleChange={handleFirst}/>
    <FormGen id="last-name" label="Last name" type="text" handleChange={handleLast} />
    <FormGen id="email" label="Email" type="email" handleChange={handleEmail}/>
    <Button spacing={4} mt={4} bg='blue.700' color="white" type='submit'>Add</Button>
  </form>
  );
};
