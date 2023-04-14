import { FC } from "react";
import { MdOutlineUpdate } from "react-icons/md";

import Button from "../../atoms/Button";
import { ButtonColorVariants, ButtonVariants } from "../../atoms/Button/types";
import { UpdateButtonProps } from "./types";

const UpdateButton: FC<UpdateButtonProps> = ({ disabled = false }) => (
	<Button
		variant={ButtonVariants.contained}
		colorVariant={ButtonColorVariants.primary}
		leftIcon={<MdOutlineUpdate />}
		disabled={disabled}
	>
		Update
	</Button>
);

export default UpdateButton;
