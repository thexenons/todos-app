import { FC } from "react";

import Button from "../../atoms/Button";
import { AcceptButtonProps } from "./types";

const AcceptButton: FC<AcceptButtonProps> = ({ disabled = false, onClick }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.primary}
		disabled={disabled}
		onClick={onClick}
	>
		Accept
	</Button>
);

export default AcceptButton;
