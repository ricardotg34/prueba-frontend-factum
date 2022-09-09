import { Stack, Typography, Box, IconButton } from '@mui/material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from '@mui/icons-material/Delete';
import { ImageInfo } from '../interfaces/ImageInfo.interface';

type Props = {
  files: ImageInfo[],
  onUploadFiles: (files: ImageInfo) => void;
  onRemoveFile: (index: number) => void;
}

const Dropzone = (props: Props) => {

  const dropHandler: React.DragEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === "file") {
          const file = ev.dataTransfer.items[i].getAsFile();
          if (
            ["image/png", "image/jpg", "image/jpeg"].some(
              (item) => item === file?.type
            )
          ) {
            var reader = new FileReader();
            reader.onload = function (e) {
              props.onUploadFiles({ file, src: e!.target!.result as string })
            };
            reader.readAsDataURL(file as File);
          }
        }
      }
    }
    removeDragData(ev);
  };

  const dragOverHandler: React.DragEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
  };

  function removeDragData(ev: React.DragEvent<HTMLDivElement>) {
    console.log("Removing drag data");
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  }

  return (
    <>
      <Stack
            sx={(theme) => ({
              border: `1px dashed ${theme.palette.grey[900]}`,
              borderRadius: 2,
              backgroundColor: "grey.200",
              color: "grey.800",
              width: "100%",
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            })}
            component="div"
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
          >
            <Typography variant="h4" color="grey.800">
              Arrastra una imagen aquì
            </Typography>
            <CloudUploadIcon fontSize="large" />
          </Stack>
          <Box display="flex" gap={4} marginY={2}>
            {props.files.map((item, i) => (
              <Box
                sx={{
                  background: `url(${item.src})`,
                  width: 150,
                  height: 150,
                  backgroundSize: "contain",
                  position: 'relative',
                  right: -30
                }}
                onClick={() => props.onRemoveFile(i)}
              >
                <IconButton size="small" color="primary" sx={{ position: 'absolute', right: -30 }}>
                  <DeleteIcon color="inherit" />
                </IconButton>
              </Box>
            ))}
          </Box>
    </>
  )
}

export default Dropzone