import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import EditIcon from "@material-ui/icons/Edit";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  Button: {
    width: "1px",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={`${classes.root} space-between`}>
      <div className="aling-item-center">
        {" "}
        <h6>Organissation Code</h6>
        <span>SVIUU</span>
      </div>
      <div className="aling-item-center">
        <h6 style={{ marginRight: "20px" }}>Megha Thakur</h6>
        <Avatar
          alt="megha"
          variant="rounded"
          onClick={handleClick}
          src="https://avatars1.githubusercontent.com/u/57290930?s=400&u=e38fcb2c6dca1aa49d33ff6fadd9872e44f22b97&v=4"
          className={classes.rounded}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div className="d-flex justify-content-between p-2">
            <MenuItem onClick={handleClose}>Edit landing page</MenuItem>{" "}
            <span style={{ padding: "4px" }} className="rounded blue">
              <EditIcon />
            </span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <MenuItem onClick={handleClose}>Edit institude details </MenuItem>
            <span style={{ padding: "4px" }} className="rounded blue">
              <EditIcon />
            </span>
          </div>
          <div className="d-flex justify-content-between p-2">
            <MenuItem onClick={handleClose}>Logout from platform </MenuItem>
            <span
              style={{ padding: "4px", backgroundColor: "red", color: "white" }}
              className="rounded"
            >
              <ExitToAppIcon />
            </span>
          </div>
        </Menu>
        <Avatar
          style={{ marginLeft: "10px" }}
          alt="megha"
          variant="rounded"
          src="https://webgradients.com/public/webgradients_png/074%20Sharp%20Glass.png"
          className={classes.rounded}
        />
      </div>
    </div>
  );
}
