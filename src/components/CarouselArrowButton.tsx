import React, { PropsWithChildren } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  disabled?: boolean;
  direction: "back" | "forward";
  onClick: (dir: "back" | "forward") => void;
};

const CarouselArrowButton = (props: PropsWithChildren<Props>) => {
  return (
    <IconButton
      sx={{
        position: "absolute",
        ...(props.direction === 'back' ? { left: -60 } : { right: -60 }),
        top: "calc(50% - 51px)",
      }}
      disabled={props.disabled}
      onClick={() => props.onClick(props.direction)}
    >
      {props.direction === "back" ? (
        <ArrowBackIosIcon fontSize="large" />
      ) : (
        <ArrowForwardIosIcon fontSize="large" />
      )}
    </IconButton>
  );
};

export default CarouselArrowButton;
