import React from "react";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Link } from "@material-ui/core";

export default function BenifitsComponent() {
  return (
    <div className="row ">
      <div className="col-sm-8">
        <div className="row">
          <div className="col-sm-6">
            <div className="d-flex justify-content-between shadow mt-2 rounded mobile-card">
              <div className="p-2" style={{ width: "60%" }}>
                <h5
                  style={{
                    direction: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  Refer a Friend
                </h5>
                <h6 style={{ fontSize: "12px", color: "gray" }}>
                  And earn a credits on a platform
                </h6>
              </div>

              <div
                className={`aling-item-center blue`}
                style={{ width: "25%", height: "80px" }}
              >
                <EmojiPeopleIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
