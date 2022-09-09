import { Stack, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from 'react';
import { ImageInfo } from '../interfaces/ImageInfo.interface';
import CarouselArrowButton from './CarouselArrowButton';

type Props = {
  images: ImageInfo[];
}

const ImageCarousel = (props: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onClickArrowImage = (direction: 'back' | 'forward',) => {
    direction === 'forward' ? setCurrentImageIndex(currentImageIndex + 1) : setCurrentImageIndex(currentImageIndex - 1)
  }

  return props.images.length > 0 ? (
    <Stack
      sx={{
        background: `url(${props.images[currentImageIndex!].src})`,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position:"relative",
        width:"80%",
        height: 400,
      }}
    >
      <CarouselArrowButton direction='back' disabled={currentImageIndex < 1} onClick={onClickArrowImage} />
      <CarouselArrowButton direction='forward' disabled={currentImageIndex === props.images.length - 1} onClick={onClickArrowImage} />
    </Stack>
  ) : (
    <Typography variant="h5">No hay imagenes que mostrar</Typography>
  )
}

export default ImageCarousel