import { Poppins, Noto_Serif } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const noto_serif = Noto_Serif({
	subsets: ["latin"],
	weight: ["600"],
});
