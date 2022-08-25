import React from 'react';
import { Box, Flex, Image, Divider, useMediaQuery } from '@chakra-ui/react';
import EventItemContent from './EventItemContent';
import EventItemMobileView from './EventItemMobileView';
import { useRouter } from 'next/router';

const EventItem: React.FC<{ id: string; name: string; description: string; image: string; address: string }> = ({
  id,
  name,
  description,
  image,
  address,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const router = useRouter();

  const handleItemClick = async () => {
    await router.push(`/details/${id}`);
  };

  return (
    <Box>
      {!isMobile ? (
        <Flex
          m="1rem 0"
          maxH="8rem"
          borderWidth="1px"
          borderRadius="1em"
          overflow="hidden"
          flexGrow="1"
          cursor="pointer"
          onClick={handleItemClick}
        >
          <Flex flex="1">
            <Image src={image} alt={name} fit="contain" />
          </Flex>
          <Divider orientation="vertical" h="80%" m="auto 1em" />
          <EventItemContent name={name} address={address} description={description} />
        </Flex>
      ) : (
        <EventItemMobileView name={name} image={image} address={address} handleItemClick={handleItemClick} />
      )}
    </Box>
  );
};
export default EventItem;
