import React, { useRef } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { X } from "lucide-react";
import { TnCButton } from "../ui/button/button";

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    maxWidth: "768px",
    position: "absolute",
    backgroundColor: "white",
    border: "none",
    borderRadius: "10px",
    // boxShadow: theme.shadows[4],
    // padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
  backdrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(19, 57, 94, 0.1)",
  },
  parentContainer: {
    position: "relative",
    overflow: "hidden",
  },
}));

const BaseModal = ({
  open,
  onClose,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const classes = useStyles();
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} className={classes.parentContainer}>
      <Modal
        open={open}
        onClose={onClose}
        className={classes.modal}
        container={() => parentRef.current}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        slotProps={{
          backdrop: {
            classes: {
              root: classes.backdrop,
            },
          },
        }}
      >
        <Box className={`${classes.paper} ${className}`}>
          <TnCButton variant="normal">
            <X
              className="absolute top-3 right-3 cursor-pointer"
              onClick={onClose}
            />
          </TnCButton>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default BaseModal;
