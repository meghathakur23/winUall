import React from "react";
import clsx from "clsx";
import CenteredGrid from "../statistics/statistics";
import Actions from "../actions/Actions";
import BenifitsComponent from "../benefits/Benifits";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import DateRangeIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CakeIcon from "@material-ui/icons/Cake";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItem from "@material-ui/core/ListItem";
import Navbar from "./Navbar";
import { Link, Avatar } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Avatar
            alt="prifle"
            style={{ marginRight: "10px" }}
            src="https://webgradients.com/public/webgradients_png/074%20Sharp%20Glass.png"
          />
        </div>
        <List></List>
        <List>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <PeopleIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <MenuBookIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <CollectionsBookmarkIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <GroupWorkIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <DateRangeIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <QuestionAnswerIcon className="ml-2" />
          </ListItem>
          <ListItem
            className="rounded m-2"
            style={{ color: "gray", background: "#fafafa", width: "40px" }}
          >
            <CakeIcon className="ml-2" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Navbar />

        <div className={classes.toolbar} />
        <p style={{ fontWeight: "bolder", fontSize: "30px" }}>Statistics</p>
        <CenteredGrid />
        <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
          Actions
          <span style={{ fontSize: "15px" }}>
            <Link href="/">
              <CreateIcon style={{ fontSize: "15" }} />
              Manage Your Actions
            </Link>{" "}
          </span>
        </p>
        <Actions />
        <p style={{ fontWeight: "bolder", fontSize: "30px" }}>Benifits</p>
        <BenifitsComponent />
      </main>
    </div>
  );
}
