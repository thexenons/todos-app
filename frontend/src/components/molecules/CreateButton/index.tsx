import { FC } from "react";

import Button from "../../atoms/Button";
import { ButtonColorVariants, ButtonVariants } from "../../atoms/Button/types";
import { CreateButtonProps } from "./types";

const CreateButton: FC<CreateButtonProps> = ({ disabled = false }) => (
	<Button
		variant={ButtonVariants.contained}
		colorVariant={ButtonColorVariants.primary}
		disabled={disabled}
	>
		Create
	</Button>
);

export default CreateButton;
