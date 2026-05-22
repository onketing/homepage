type WaveDividerProps = {
	className?: string;
	fillColor?: string;
	flip?: boolean;
	height?: number;
};

export const WaveDivider = ({
	className = "",
	fillColor = "#ffffff",
	flip = false,
	height = 60,
}: WaveDividerProps) => {
	return (
		<div
			className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
			style={{ height }}
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 1440 60"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="h-full w-full"
				aria-hidden="true"
			>
				<path
					d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
					fill={fillColor}
				/>
			</svg>
		</div>
	);
};
