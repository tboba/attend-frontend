import React from "react";
import {FormControl, Input} from "@chakra-ui/react";

const SearchTab: React.FC = () => {
    return <FormControl w='50%' m={{base: '2rem 0 0 0', md: '2rem 0'}}>
        <Input placeholder='Search...' />
    </FormControl>
}

export default SearchTab;