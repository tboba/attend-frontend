import React from "react";
import {Box, Button, FormControl, FormLabel, Input, Textarea} from "@chakra-ui/react";

const AddEvent: React.FC = () => {
    return (
        <FormControl m='1em' display='flex' w='60%' p='1.5em' flexDir='column' borderRadius='6px' border='1px solid grey'>
            <Box m='1em'>
                <FormLabel>Event Name</FormLabel>
                <Input type='text' required/>
            </Box>
            <Box m='1em'>
                <FormLabel>Address</FormLabel>
                <Input type='text' required/>
            </Box>
            <Box m='1em'>
                <FormLabel>Image URL</FormLabel>
                <Input type='url' required/>
            </Box>
            <Box m='1em'>
                <FormLabel htmlFor='description'>Event Description</FormLabel>
                <Textarea
                ></Textarea>
            </Box>
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
            >Add Event</Button>
        </FormControl>
    );
}

export default AddEvent;