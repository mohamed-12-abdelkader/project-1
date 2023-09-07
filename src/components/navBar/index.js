import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Form from "../form";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useMyContext } from "@/context/ProjectContext";
function Navbar() {
  const { open, setOpen } = useMyContext();

  const [scrolling, setScrolling] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `fixed top-0 w-full transition-all duration-300 ${
    scrolling ? "bg-blue-500" : "bg-transparent"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="flex">
        <div className="container mx-auto py-4 ml-5">
          <h1>logo</h1>
        </div>
        <div className="m-5">
          <Button onClick={handleClickOpen}>+</Button>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <h1 className="text-black">Form</h1>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Form />
      </Dialog>
    </nav>
  );
}

export default Navbar;
