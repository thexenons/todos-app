import { FC } from "react";

import Button from "../../atoms/Button";
import { ButtonColorVariants, ButtonVariants } from "../../atoms/Button/types";
import { CancelButtonProps } from "./types";

const CancelButton: FC<CancelButtonProps> = ({ disabled = false }) => (
	<Button
		variant={ButtonVariants.contained}
		colorVariant={ButtonColorVariants.neutral}
		disabled={disabled}
	>
		Cancel
	</Button>
);

export default CancelButton;
