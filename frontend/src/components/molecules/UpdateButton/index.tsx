import { FC } from "react";
import { MdSave } from "react-icons/md";

import Button from "../../atoms/Button";
import { UpdateButtonProps } from "./types";

const UpdateButton: FC<UpdateButtonProps> = ({ disabled = false }) => (
	<Button
		variant={Button.variants.contained}
		colorVariant={Button.colorVariants.primary}
		disabled={disabled}
	>
		<Button.Icon>
			<MdSave />
		</Button.Icon>
		Update
	</Button>
);

export default UpdateButton;
