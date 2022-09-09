import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useState } from "react";
import Dropzone from "../components/Dropzone";
import { ImageInfo } from "../interfaces/ImageInfo.interface";

type Props = {};

const UploadPage = (props: Props) => {
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
      return [
        ...prevFiles,
        file
      ];
    });
  }

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => {
      const aux = [...prevFiles];
      aux.splice(index, 1);
      return aux;
    });
  };

  return (
    <Stack marginY={4}>
      <Button variant="contained" onClick={handleClickOpen}>
        Subir Imagenes
      </Button>
      <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Subir imagenes</DialogTitle>
        <DialogContent>
          <Dropzone files={files} onUploadFiles={handleAddFile} onRemoveFile={handleRemoveFile} />
          <Button variant="contained" fullWidth>
            Subir
          </Button>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};

export default UploadPage;
