import * as React from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const onBtnRemoveClick = () => {
    dispatch();
  };

  const { name, price, popularity, avatar, category, id } = product;
  return (
    <Card>
      <CardMedia sx={{ height: 160 }} image={avatar} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Price:{price}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          category:{category}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          popularity:{popularity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onBtnRemoveClick}>
          remove from cart
        </Button>
        <NavLink to={`/products/${id}`}>Learn More</NavLink>
      </CardActions>
    </Card>
  );
}
