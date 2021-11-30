import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export const FormGen = ({ id, label, type, handleChange }) => {
  return (
    <FormControl id={id} isRequired>
      <FormLabel pl="30%">{label}</FormLabel>
      <Input width="40%" focusBorderColor="#14274E" variant="outline" type={type} placeholder={label} onChange={handleChange}/>
    </FormControl>
  );
}