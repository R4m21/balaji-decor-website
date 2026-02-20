import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0EA5E9, #14B8A6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          backgroundColor: "white",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}
