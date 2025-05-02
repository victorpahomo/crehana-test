interface ArrowLeftProps {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowLeftSvg = ({
  width = 24,
  height = 24,
  color = "#ffffff",
}: ArrowLeftProps) => {
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
      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
};

export default ArrowLeftSvg;
