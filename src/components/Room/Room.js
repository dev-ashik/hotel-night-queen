import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { FaBed } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import React from "react";
import "./Room.css";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const Room = ({ hotelData }) => {
  const { id, title, Description, image, bed, capacity, bedType, avatar, price } =
    hotelData;
    const history = useHistory();
    const handleRoomBook = (rid) =>{
        history.push(`/Book/${rid}`);
    }
  return (
    <Card sx={{ maxWidth: 345 }} className="roomCard">
      <CardHeader
        avatar={
          <Avatar className="roomAvatar" aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={title}
      />
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>

        <div className="cardFooter">
          <span className="cardFooterMarginRight">
            <FaBed className="icons" />
            <span className="cardBottomText">: <strong>{bed}</strong></span>
          </span>
          <span className="cardFooterMarginRight">
            <ImManWoman className="icons" />: <strong>{capacity}</strong>
          </span>
          <span className="cardFooterMarginRight">$: <strong>{price}</strong></span>
          <Link to={`/Book/${id}`}> 
            <butto className="BookButton">BOOK</butto>
          </Link>
            {/* <butto onClick={()=>handleRoomBook(id)} className="BookButton">BOOK</butto> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default Room;
