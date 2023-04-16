import { FC } from "react";
import { MdAdd } from "react-icons/md";

import Button from "../../atoms/Button";
import { CreateButtonProps } from "./types";

const CreateButton: FC<CreateButtonProps> = ({ disabled = false }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.primary}
		disabled={disabled}
	>
		<Button.Icon>
			<MdAdd />
		</Button.Icon>
		Create
	</Button>
);

export default CreateButton;
