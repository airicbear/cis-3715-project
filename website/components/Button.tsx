import { Stack, Button } from "@chakra-ui/react";

const button_ = () => {
   return (
   <Stack direction='row' spacing={4} align='center'>
       <Button colorScheme='gray' variant='solid'   height='48px' width='100px' >
         Predict
       </Button>
       <Button colorScheme='gray' variant='solid'   height='48px' width='100px'>
         Clear
       </Button>
   </Stack>
   )
}
export default button_;
