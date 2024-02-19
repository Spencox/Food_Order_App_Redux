import React from "react";
import { Card, Image } from 'react-bootstrap'

const ItemCard = (props) => {
  console.log(props.itemName)
  return (
    <Card as="div" border="white" className="p-3 my-3 rounded">
      {props.itemName == "cuisine" && <Image variant="top" src={props.item.image} width={100} height={100} className="mx-auto d-block" style={{ borderRadius: '10px 25px' }} />}
      {props.itemName == "category" && <Image variant="top" src={props.item.image} width={100} height={100} roundedCircle className="mx-auto d-block" />}
      {props.itemName == "restaurant" && <Image variant="top" src={props.item.image} width={150} height={150} className="mx-auto d-block" style={{ borderRadius: '5px 25px' }} />}
      <Card.Text as="p" className="mx-auto d-block"><strong>{props.item.name}</strong></Card.Text>
    </Card>

  )
};

export default ItemCard;
