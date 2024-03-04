import React from "react";
import { Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RestaurantCard = ({ item, index }) => {
  // const navigate = useNavigate();

  const handleAddToFav = () => {
    console.log("hajbksdkaj");
  };

  return (
    <Card className="m-5 w-[18rem] productCart">
      <div
        className=""
        // onClick={navigate(`/restaurant/${item.city}/${item.name}/${item.id}`)}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover"
          src={item.imageUrl}
          alt=""
        />
        <div className="p-4 textPart lg:flex w-full justify-between ">
          <div className="space-y-1">
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-500 text-sm">
              {item.description.length > 40
                ? item.description.substring(0, 40) + "..."
                : item.description}
            </p>
          </div>
          <div className="">
            <IconButton onClick={handleAddToFav}>
              {true ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
