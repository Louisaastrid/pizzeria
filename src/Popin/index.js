import { arrayOf, node, bool, string, func, shape } from "prop-types";
import React from "react";
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
export default function Popin({ open, titre, children, actions, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{titre}</DialogTitle>
      <DialogContent>
        <DialogContent id="alert-dialog-description">{children}</DialogContent>
      </DialogContent>
      <DialogActions>
        {actions.map(({ label, onClick, primary }) => (
          <Button
            key={label}
            color={primary ? "primary" : "secondary"}
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}

Popin.propTypes = {
  open: bool,
  titre: string,
  children: node.isRequired,
  actions: arrayOf(
    shape({
      label: string,
      onClick: func,
    })
  ),
  onClose: func,
};

Popin.defaultProps = {
  open: false,
  titre: null,
  actions: [],
  onClose: Function.prototype,
};
