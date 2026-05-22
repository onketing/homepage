import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
	const logoData = readFileSync(join(process.cwd(), "public/og-image.png"));
	const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#ffffff",
			}}
		>
			<img src={logoBase64} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
		</div>,
		{ ...size },
	);
}
