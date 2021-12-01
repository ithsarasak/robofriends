import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card key={i} name={user.name} email={user.email} />
        );
      })}
    </>
  );
};

export default CardList;
