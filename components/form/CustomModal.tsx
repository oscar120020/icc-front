import { Modal, Box } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: JSX.Element | JSX.Element[]
}

export const CustomModal = ({ open, handleClose, children }: Props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal"
      sx={{}}
    >
      <Box
        sx={{
          width: "500px",
          maxWidth: "90%",
          backgroundColor: "white",
          borderRadius: 2,
          overflow: 'hidden',
          outline: 'none'
        }}

      >
        {children}
      </Box>
    </Modal>
  );
};
