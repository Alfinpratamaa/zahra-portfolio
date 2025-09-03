import React from "react";

export const BgCustom = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        background:
          "linear-gradient(to right, white 20%, #F6F6F6 20%, #F6F6F6 85%, #F6F6F6 80%)",
      }}
    />
  );
};
