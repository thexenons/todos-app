import type { PropsWithChildren } from "react";

import { BREAKPOINT } from "../../../theme/common/breakpoints";

export interface ModalProps extends PropsWithChildren {
	isOpen: boolean;
	onClose: () => void;
	onCancel?: () => void;
	onAccept?: () => void;
	wrapperId?: string;
	maxWidth?: BREAKPOINT;
	fullWidth?: boolean;
}
