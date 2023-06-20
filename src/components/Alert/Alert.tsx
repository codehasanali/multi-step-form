import React, { forwardRef, Ref, SyntheticEvent } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

interface AlertComponentProps {
  type: "success" | "info" | "warning" | "error";
  text: string;
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup = forwardRef(function Alert(
  props: AlertProps,
  ref: Ref<HTMLDivElement>
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert: React.FC<AlertComponentProps> = (props) => {
  const handleConfirmClose = (
    _: Event | SyntheticEvent<MouseEvent, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      props.set(false);
      return;
    }
  };

  return (
    <React.Fragment>
      <Snackbar
        open={props.open}
        onClose={handleConfirmClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Popup severity={props.type} sx={{ width: "100%" }}>
          {props.text}
        </Popup>
      </Snackbar>
    </React.Fragment>
  );
};

export default Alert;
