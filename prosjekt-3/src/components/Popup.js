import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <div>
      <Dialog open={openPopup} maxWidth="md">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography style={{ flexGrow: 1, fontFamily: "Futura", color:'#35281e' }} variant="h6" component="div">
              {title}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              X
            </Button>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
