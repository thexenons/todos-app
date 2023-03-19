export function pxToRem(pxString: string | number) {
	let px = "";

	if (typeof pxString === "number") {
		px = pxString.toString();
	} else {
		px = pxString.split("px")[0];
	}

	const rem = parseInt(px) / 16;

	return `${rem}rem`;
}
