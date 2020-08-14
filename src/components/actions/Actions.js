import React from "react";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import NoteIcon from "@material-ui/icons/Note";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SchoolIcon from "@material-ui/icons/School";
import ActionCard from './ActionCard';

const ACTION_GROUPS = Object.freeze({
  GROUP_1: [
    {
      title: "Go Live",
      icon: <LiveTvIcon style={{ fontSize: 30, color: "white" }} />,
    },
    {
      title: "Create a paper",
      icon: <NoteIcon style={{ fontSize: 30, color: "white" }} />,
    },
  ],
  GROUP_2: [
    {
      title: "Add Students",
      text: "Get out our latest premium packages",
      icon: <ShoppingCartIcon style={{ fontSize: 30, color: "white" }} />,
    },
    {
      title: "Take Tour",
      text: "check out how to use platform",
      icon: <SchoolIcon style={{ fontSize: 30, color: "white" }} />,
    },
  ],
});

export default function Actions() {
  return (
    <React.Fragment>
      <div className="row ">
        <div className="col-sm-8 border-right">
          <div className="row">
            {ACTION_GROUPS["GROUP_1"].map((item, i) => {
              return (
                <div className="col-sm-6 mobile-card" style={{textAlign:'center'}} key={i}>
                  <ActionCard actionCardData={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
            {ACTION_GROUPS["GROUP_2"].map((item, i) => {
              return (
                <div className="col-sm-12 mobile-card" key={i}>
                  <ActionCard actionCardData={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
