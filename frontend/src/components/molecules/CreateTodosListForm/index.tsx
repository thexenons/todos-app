import { FC, useCallback, useState } from "react";
import { CreateTodosListFormProps } from "./types";
import Form from "../../forms/Form";
import TextInput from "../../forms/inputs/TextInput";
import Modal from "../../layout/Modal";
import { useFormContext } from "react-hook-form";

const CreateTodosListFormView: FC<CreateTodosListFormProps> = ({
	onSubmit,
	onClose,
	isOpen,
}) => {
	const { handleSubmit } = useFormContext();
	const [isLoading, setLoading] = useState(false);

	// TODO: If form has errors, prevent modal close
	const onAccept = useCallback(async () => {
		setLoading(true);
		await handleSubmit(onSubmit)();
		setLoading(false);
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			onAccept={onAccept}
			disabled={isLoading}
		>
			<Modal.Header>
				<Modal.Title>Create TodosList</Modal.Title>
				<Modal.CloseButton />
			</Modal.Header>
			<Modal.Content>
				<TextInput name="title" rules={{ required: true }} required />
			</Modal.Content>
			<Modal.Footer>
				<Modal.CancelButton />
				<Modal.AcceptButton />
			</Modal.Footer>
		</Modal>
	);
};

const CreateTodosListForm: FC<CreateTodosListFormProps> = (props) => {
	const { onSubmit } = props;

	return (
		<Form onSubmit={onSubmit}>
			<CreateTodosListFormView {...props} />
		</Form>
	);
};

export default CreateTodosListForm;
