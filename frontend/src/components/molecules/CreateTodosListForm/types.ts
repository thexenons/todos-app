import { FieldValues } from "react-hook-form";
import { FormProps } from "../../forms/Form/types";
import { ModalProps } from "../../layout/Modal/types";

export interface CreateTodosListFormProps {
	onSubmit: FormProps<FieldValues>["onSubmit"];
	isOpen: ModalProps["isOpen"];
	onClose: ModalProps["onClose"];
}
