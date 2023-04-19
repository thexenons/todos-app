import { FC } from "react";

import Button from "../../atoms/Button";
import { CancelButtonProps } from "./types";

const CancelButton: FC<CancelButtonProps> = ({ disabled = false, onClick }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.neutral}
		disabled={disabled}
		onClick={onClick}
	>
		Cancel
	</Button>
);

export default CancelButton;
