import React, { Component } from 'react';
import {Card,Image,Button} from 'semantic-ui-react';

const ObvCard=({title,name,image,sum}) =>(
  <Card>
  <Image src={image} />
  <Card.Content>
    <Card.Header>{title}</Card.Header>
    <Card.Meta>{name}</Card.Meta>
  </Card.Content>
  <Card.Content extra>
    <a>

      {sum}
    </a>
  </Card.Content>
  <Button
         attached='bottom'
         content='ADD TO CART'

       />
</Card>
);

export default ObvCard;
//export default App;
