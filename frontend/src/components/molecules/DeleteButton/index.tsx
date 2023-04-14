import { FC } from "react";
import { MdDeleteOutline } from "react-icons/md";

import Button from "../../atoms/Button";
import { ButtonColorVariants, ButtonVariants } from "../../atoms/Button/types";
import { DeleteButtonProps } from "./types";

const DeleteButton: FC<DeleteButtonProps> = ({ disabled = false }) => (
	<Button
		variant={ButtonVariants.contained}
		colorVariant={ButtonColorVariants.error}
		leftIcon={<MdDeleteOutline />}
		disabled={disabled}
	>
		Delete
	</Button>
);

export default DeleteButton;
