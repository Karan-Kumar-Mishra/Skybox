import React from "react";

export default function Box2() {
  return (
    <div>
      <div className="cube-loader mt-6">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span style={{ '--i': 0 }} className="cube-span"></span>
          <span style={{ '--i': 1 }} className="cube-span"></span>
          <span style={{ '--i': 2 }} className="cube-span"></span>
          <span style={{ '--i': 3 }} className="cube-span"></span>
        </div>
      </div>
    </div>
  );
}
