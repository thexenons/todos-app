import { FC } from "react";
import { MdDeleteOutline } from "react-icons/md";

import Button from "../../atoms/Button";
import { DeleteButtonProps } from "./types";

const DeleteButton: FC<DeleteButtonProps> = ({ disabled = false, onClick }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.error}
		disabled={disabled}
		onClick={onClick}
	>
		<Button.Icon>
			<MdDeleteOutline />
		</Button.Icon>
		Delete
	</Button>
);

export default DeleteButton;
