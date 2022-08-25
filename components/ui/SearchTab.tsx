import React, {ChangeEvent, useContext} from "react";
import {FormControl, Input} from "@chakra-ui/react";
import {SearchContext} from "../../store/search-store";

const SearchTab: React.FC = () => {
    const searchCtx = useContext(SearchContext);

    const handleInputChange = (event: ChangeEvent) => {
        searchCtx.debounce(event.target.value);
    }

    return <FormControl w={{base: '70%', md: '50%'}} m={{base: '2rem 0 0 0', md: '2rem 0'}}>
        <Input placeholder='Search...' onChange={handleInputChange} />
    </FormControl>
}

export default SearchTab;