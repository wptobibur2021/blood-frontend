import React, { useRef } from "react";
import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import axios from "axios";
import useNotification from "../../../Hooks/useNotification";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../../Hooks/appURL";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Update = ({ open, handleClose, donner }) => {
  const { successNotify } = useNotification();
  const name = useRef();
  const address = useRef();
  const mobile = useRef();
  const lastDonate = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      name: name.current.value,
      address: address.current.value,
      mobile: mobile.current.value,
      last: lastDonate.current.value,
      userId: donner._id,
    };
    try {
      axios.put(APP_URL + `/api/update-donner`, newData).then((res) => {
        if (res.data) {
          successNotify("Doner update successfully");
          e.target.reset();
          handleClose();
          navigate("/dashboard/list-donors");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ border: 0 }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          sx={{ mb: 3 }}
          variant="h6"
          component="h2"
        >
          You can update {donner.name} information.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Name of blood donor"
              type="text"
              defaultValue={donner.name}
              sx={{ width: "100%" }}
              inputRef={name}
              required={true}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Blood Group"
              type="text"
              defaultValue={donner.group}
              sx={{ width: "100%" }}
              disabled
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="How many months ago did you give blood?"
              type="text"
              sx={{ width: "100%" }}
              inputRef={lastDonate}
              required={true}
              defaultValue={donner.last}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              inputRef={mobile}
              label="Mobile No"
              type="number"
              sx={{ width: "100%" }}
              required={true}
              defaultValue={donner.mobile}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Current address"
              type="text"
              sx={{ width: "100%" }}
              inputRef={address}
              defaultValue={donner.address}
              required={true}
            />
          </Box>
          <Button variant="contained" type="submit">
            Update Now
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default Update;
