import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import Dropzone from "../components/Dropzone";
import { AppContext } from "../context/AppContext";
import { ImageInfo } from "../interfaces/ImageInfo.interface";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {};

const UploadPage = (props: Props) => {
  const { state, uploadImages } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [files, setFiles] = useState<{ file: File | null; src: string }[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddFile = (file: ImageInfo) => {
    setFiles((prevFiles) => {
      return [...prevFiles, file];
    });
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => {
      const aux = [...prevFiles];
      aux.splice(index, 1);
      return aux;
    });
  };

  const onClickUpload = () => {
    uploadImages(files);
    handleClose();
  };

  const onClickArrowImage = (direction: 'back' | 'forward',) => {
    direction === 'forward' ? setCurrentImageIndex(currentImageIndex + 1) : setCurrentImageIndex(currentImageIndex - 1)
  }

  return (
    <Stack marginY={4} alignItems="center" gap={4}>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Subir Imagenes
      </Button>
      {state.images.length > 0 ? (
        <Stack
          sx={{
            background: `url(${state.images[currentImageIndex!].src})`,
            backgroundSize: "contain",
            position:"relative",
            width:"80%",
            height: 400,
          }}
        >
          <IconButton
            sx={{ position: "absolute", left: -40, top: "calc(50% - 51px)" }}
            disabled={currentImageIndex < 1}
            onClick={() => onClickArrowImage('back')}
          >
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={{ position: "absolute", right: -40, top: "calc(50% - 51px)" }}
            disabled={currentImageIndex === state.images.length - 1}
            onClick={() => onClickArrowImage('forward')}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Stack>
      ) : (
        <Typography variant="h5">No hay imagenes que mostrar</Typography>
      )}
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Subir imagenes</DialogTitle>
        <DialogContent>
          <Dropzone
            files={files}
            onUploadFiles={handleAddFile}
            onRemoveFile={handleRemoveFile}
          />
          <Button variant="contained" fullWidth onClick={onClickUpload}>
            Subir
          </Button>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default UploadPage;
