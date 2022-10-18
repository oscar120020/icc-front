import { Modal, Box } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const FormModal = ({ open, handleClose }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1000px",
          height: "90vh",
          backgroundColor: "white",
          padding: 2,
          overflow: "scroll",
        }}

      >
        
      </Box>
    </Modal>
  );
};
