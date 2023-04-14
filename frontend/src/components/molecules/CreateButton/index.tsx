import { FC } from "react";
import { MdAddCircleOutline } from "react-icons/md";

import Button from "../../atoms/Button";
import { ButtonColorVariants, ButtonVariants } from "../../atoms/Button/types";
import { CreateButtonProps } from "./types";

const CreateButton: FC<CreateButtonProps> = ({ disabled = false }) => (
	<Button
		variant={ButtonVariants.contained}
		colorVariant={ButtonColorVariants.primary}
		leftIcon={<MdAddCircleOutline />}
		disabled={disabled}
	>
		Create
	</Button>
);

export default CreateButton;
