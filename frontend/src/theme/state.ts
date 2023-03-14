import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai/vanilla";
import themes from "../theme/themes";

export const activeThemeKeyAtom = atomWithStorage<keyof typeof themes>(
	"activeTheme",
	"light"
);
export const activeThemeAtom = atom((get) => {
	const activeThemeKey = get(activeThemeKeyAtom);

	return themes[activeThemeKey];
});
