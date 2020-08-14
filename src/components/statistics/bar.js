import React from "react";
import Link from "@material-ui/core/Link";
const preventDefault = (event) => event.preventDefault();

export default function MediaControlCard(CardData) {
  return (
    <div className="d-flex justify-content-between shadow mt-2 rounded mobile-card">
      <div className="p-2" >
        <h6> {CardData.CardData.title}</h6>
        <Link href="#" onClick={preventDefault}>
          {CardData.CardData.text}
        </Link>
      </div>
      <div
        className={`aling-item-center ${CardData.CardData.classstyle}`}
        style={{ width: "25%", height: "80px" }}
      >
        <h2 style={{ textAlign: "center", color: "white" }}>
          {CardData.CardData.num}
        </h2>
      </div>
    </div>
  );
}
