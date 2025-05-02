interface ChevronDownProps {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronDownSvg = ({
  width = 24,
  height = 24,
  color = "#ffffff",
}: ChevronDownProps) => {
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
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default ChevronDownSvg;
