import * as React from "react";

export function ImageOverlay({ title, number, saleText }) {
  return (
    <div className="overlay">
      <div className="title">{title}</div>
      <div className="sale-info">
        <div className="number-container">
          <div className="number">{number}</div>
          <div className="line" />
        </div>
        <div className="sale-text">{saleText}</div>
      </div>
    </div>
  );
}