interface SearchProps {
  width?: number;
  height?: number;
  color?: string;
}

const SearchSvg = ({
  width = 24,
  height = 24,
  color = "#ffffff",
}: SearchProps) => {
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
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
};

export default SearchSvg;
