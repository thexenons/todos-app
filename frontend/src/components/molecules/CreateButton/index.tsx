import { FC } from "react";
import { MdAdd } from "react-icons/md";

import Button from "../../atoms/Button";
import { CreateButtonProps } from "./types";

const CreateButton: FC<CreateButtonProps> = ({ disabled = false, onClick }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.primary}
		disabled={disabled}
		onClick={onClick}
	>
		<Button.Icon>
			<MdAdd />
		</Button.Icon>
		Create
	</Button>
);

export default CreateButton;
