import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';

const MainFooter = () => {
  return (
    <Box w="100%">
      <Divider orientation="horizontal" w="30%" m="2em auto" />
      <Text textAlign="center" marginBottom="2em">
        tboba &bull; 2022
      </Text>
    </Box>
  );
};

export default MainFooter;
