import React from "react";
export default function ActionCard({ actionCardData }) {
  return (
    <div className="d-flex justify-content-between shadow mt-2 rounded">
      <div className="p-2">
        <h5
          style={{
            direction: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {actionCardData?.title}
        </h5>
        <h6 style={{ fontSize: "12px", color: "gray" }}>
          {actionCardData?.text}
        </h6>
      </div>

      <div
        className={`aling-item-center blue`}
        style={{ width: "25%", height: "80px" }}
      >
        {actionCardData?.icon}
      </div>
    </div>
  );
}
