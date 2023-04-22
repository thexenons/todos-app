import { ComponentProps, FC, useCallback } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

import Button from "../../atoms/Button";
import AcceptButton from "../../molecules/AcceptButton";
import CancelButton from "../../molecules/CancelButton";
import { ModalContextProvider, useModalContext } from "./context";
import useModal from "./hooks/useModal";
import * as S from "./styled";
import { ModalProps } from "./types";

const ModalView: FC<ModalProps> = ({
	isOpen,
	onClose,
	onCancel,
	onAccept,
	wrapperId = "react-portal-wrapper",
	maxWidth,
	fullWidth,
	children,
	...rest
}) => {
	const { wrapperElement } = useModal({ wrapperId, isOpen });

	if (wrapperElement === null || !isOpen) return null;

	return createPortal(
		<ModalContextProvider value={{ isOpen, onClose, onCancel, onAccept }}>
			<S.ModalBackdrop aria-hidden="true" onClick={onClose} />
			<S.ModalWrapper $fullWidth={fullWidth} $maxWidth={maxWidth} {...rest}>
				{children}
			</S.ModalWrapper>
		</ModalContextProvider>,
		wrapperElement
	);
};

const ModalCloseButton: FC<Omit<ComponentProps<typeof Button>, "children">> = (
	props
) => {
	const { onClose } = useModalContext();

	return (
		<S.ModalCloseButton
			variant={Button.variants.contained}
			colorVariant={Button.colorVariants.primary}
			isRounded
			onClick={onClose}
			{...props}
		>
			<Button.Icon>
				<MdClose />
			</Button.Icon>
		</S.ModalCloseButton>
	);
};

const ModalCancelButton: typeof CancelButton = (props) => {
	const { onClose, onCancel } = useModalContext();

	const onClick = useCallback(() => {
		onClose?.();
		onCancel?.();
	}, [onCancel, onClose]);

	return <CancelButton onClick={onClick} {...props} />;
};
const ModalAcceptButton: typeof AcceptButton = (props) => {
	const { onClose, onAccept } = useModalContext();

	const onClick = useCallback(() => {
		onClose?.();
		onAccept?.();
	}, [onAccept, onClose]);

	return <AcceptButton onClick={onClick} {...props} />;
};

const Modal = ModalView as typeof ModalView & {
	Header: typeof S.ModalHeader;
	Title: typeof S.ModalTitle;
	CloseButton: typeof ModalCloseButton;
	CancelButton: typeof ModalCancelButton;
	AcceptButton: typeof ModalAcceptButton;
	Content: typeof S.ModalContent;
	Footer: typeof S.ModalFooter;
};
Modal.Header = S.ModalHeader;
Modal.Title = S.ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.CancelButton = ModalCancelButton;
Modal.AcceptButton = ModalAcceptButton;
Modal.Content = S.ModalContent;
Modal.Footer = S.ModalFooter;

export default Modal;
