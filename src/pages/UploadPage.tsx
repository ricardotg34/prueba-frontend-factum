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
import ImageCarousel from "../components/ImageCarousel";

const UploadPage = () => {
  const { state, uploadImages } = useContext(AppContext);
  const [open, setOpen] = useState(false);
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

  return (
    <Stack marginY={4} alignItems="center" gap={4}>
      <Button variant="contained" fullWidth onClick={handleClickOpen}>
        Subir Imagenes
      </Button>
      <ImageCarousel images={state.images} />
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
