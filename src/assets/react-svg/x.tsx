interface XProps {
  width?: number;
  height?: number;
  color?: string;
}

const XSvg = ({ width = 24, height = 24, color = "#ffffff" }: XProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
};

export default XSvg;
