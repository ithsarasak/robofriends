import React from "react";
import { Text } from '@chakra-ui/react';

const Card = ({ name, email }) => {
  return (
    <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${email + name}200x200`} />
        <div>
          <Text fontSize='md' fontWeight="bold" color="#14274E">{name}</Text>
          <Text fontSize='md'color="#14274E">{email}</Text>
        </div>
    </div>
  );
};

export default Card;
