interface CardProps {
  width?: number;
  height?: number;
  color?: string;
}

const CardSvg = ({ width = 24, height = 24, color = "#ffffff" }: CardProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 6.4375V18.25C22 18.7786 21.8164 19.2389 21.4492 19.6309C21.082 20.0228 20.6406 20.2188 20.125 20.2188H3.875C3.37153 20.2188 2.93316 20.0228 2.5599 19.6309C2.18663 19.2389 2 18.7786 2 18.25V6.4375C2 5.90885 2.18663 5.44857 2.5599 5.05664C2.93316 4.66471 3.37153 4.46875 3.875 4.46875H20.125C20.6406 4.46875 21.082 4.66471 21.4492 5.05664C21.8164 5.44857 22 5.90885 22 6.4375ZM3.875 8.40625H20.125V6.4375H3.875V8.40625ZM3.875 12.3438V18.25H20.125V12.3438H3.875Z"
        fill={color}
      />
    </svg>
  );
};

export default CardSvg;
