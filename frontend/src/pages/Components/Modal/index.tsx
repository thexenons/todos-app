import { FC, useCallback, useState } from "react";

import Button from "../../../components/atoms/Button";
import Modal from "../../../components/layout/Modal";
import { ModalProps } from "../../../components/layout/Modal/types";
import { BREAKPOINT } from "../../../theme/common/breakpoints";
import * as SS from "../styled";

const ModalComponentsPage: FC = () => {
	const [isOpen, setOpen] = useState<ModalProps["isOpen"]>(false);
	const [isAnotherOpen, setAnotherOpen] = useState<ModalProps["isOpen"]>(false);
	const [fullWidth, setFullWidth] = useState<ModalProps["fullWidth"]>();
	const [maxWidth, setMaxWidth] = useState<ModalProps["maxWidth"]>();

	const [enableHeader, setEnableHeader] = useState(true);
	const [enableTitle, setEnableTitle] = useState(true);
	const [enableCloseButton, setEnableCloseButton] = useState(true);
	const [enableFooter, setEnableFooter] = useState(true);
	const [enableAcceptButton, setEnableAcceptButton] = useState(true);
	const [enableCancelButton, setEnableCancelButton] = useState(true);

	const openModal = useCallback(() => setOpen(true), []);
	const closeModal = useCallback(() => setOpen(false), []);
	const openAnotherModal = useCallback(() => setAnotherOpen(true), []);
	const closeAnotherModal = useCallback(() => setAnotherOpen(false), []);

	return (
		<SS.ComponentsListWrapper>
			<h1>Modal</h1>
			<SS.ComponentsListWrapper>
				<h2>Options</h2>
				<SS.ComponentsRowWrapper>
					<p>fullWidth: {fullWidth ? "Yes" : "No"}</p>
					<Button onClick={() => setFullWidth(!fullWidth)}>
						Toggle fullWidth
					</Button>
				</SS.ComponentsRowWrapper>
				<SS.ComponentsRowWrapper>
					<p>maxWidth: {maxWidth || "No"}</p>
					<Button onClick={() => setMaxWidth(undefined)}>Set No</Button>
					<Button onClick={() => setMaxWidth(BREAKPOINT.sm)}>Set sm</Button>
					<Button onClick={() => setMaxWidth(BREAKPOINT.md)}>Set md</Button>
					<Button onClick={() => setMaxWidth(BREAKPOINT.lg)}>Set lg</Button>
					<Button onClick={() => setMaxWidth(BREAKPOINT.xl)}>Set xl</Button>
				</SS.ComponentsRowWrapper>
				<SS.ComponentsRowWrapper>
					<p>Header: {enableHeader ? "Yes" : "No"}</p>
					<Button onClick={() => setEnableHeader(!enableHeader)}>
						Toggle Header
					</Button>
				</SS.ComponentsRowWrapper>
				{enableHeader && (
					<>
						<SS.ComponentsRowWrapper>
							<p>Title: {enableTitle ? "Yes" : "No"}</p>
							<Button onClick={() => setEnableTitle(!enableTitle)}>
								Toggle Title
							</Button>
						</SS.ComponentsRowWrapper>
						<SS.ComponentsRowWrapper>
							<p>CloseButton: {enableCloseButton ? "Yes" : "No"}</p>
							<Button onClick={() => setEnableCloseButton(!enableCloseButton)}>
								Toggle CloseButton
							</Button>
						</SS.ComponentsRowWrapper>
					</>
				)}
				<SS.ComponentsRowWrapper>
					<p>Footer: {enableFooter ? "Yes" : "No"}</p>
					<Button onClick={() => setEnableFooter(!enableFooter)}>
						Toggle Footer
					</Button>
				</SS.ComponentsRowWrapper>
				{enableFooter && (
					<>
						<SS.ComponentsRowWrapper>
							<p>AcceptButton: {enableAcceptButton ? "Yes" : "No"}</p>
							<Button
								onClick={() => setEnableAcceptButton(!enableAcceptButton)}
							>
								Toggle AcceptButton
							</Button>
						</SS.ComponentsRowWrapper>
						<SS.ComponentsRowWrapper>
							<p>CancelButton: {enableCancelButton ? "Yes" : "No"}</p>
							<Button
								onClick={() => setEnableCancelButton(!enableCancelButton)}
							>
								Toggle CancelButton
							</Button>
						</SS.ComponentsRowWrapper>
					</>
				)}
			</SS.ComponentsListWrapper>
			<SS.ComponentsListWrapper>
				<h2>Actions</h2>
				<div>
					<Button onClick={openModal}>Open modal</Button>
				</div>
			</SS.ComponentsListWrapper>
			<Modal
				isOpen={isOpen}
				onClose={closeModal}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
			>
				{enableHeader && (
					<Modal.Header>
						{enableTitle && <Modal.Title>Modal title</Modal.Title>}
						{enableCloseButton && <Modal.CloseButton />}
					</Modal.Header>
				)}
				<Modal.Content>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						deleniti maiores expedita nemo placeat animi voluptates architecto
						corrupti consequuntur molestiae perspiciatis, ut atque, nisi velit
						ad eveniet impedit sapiente dignissimos!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						deleniti maiores expedita nemo placeat animi voluptates architecto
						corrupti consequuntur molestiae perspiciatis, ut atque, nisi velit
						ad eveniet impedit sapiente dignissimos!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						deleniti maiores expedita nemo placeat animi voluptates architecto
						corrupti consequuntur molestiae perspiciatis, ut atque, nisi velit
						ad eveniet impedit sapiente dignissimos!
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
						deleniti maiores expedita nemo placeat animi voluptates architecto
						corrupti consequuntur molestiae perspiciatis, ut atque, nisi velit
						ad eveniet impedit sapiente dignissimos!
					</p>
					<Button onClick={openAnotherModal}>Open another modal</Button>
				</Modal.Content>
				{enableFooter && (
					<Modal.Footer>
						{enableCancelButton && <Modal.CancelButton />}
						{enableAcceptButton && <Modal.AcceptButton />}
					</Modal.Footer>
				)}
			</Modal>
			<Modal
				isOpen={isAnotherOpen}
				onClose={closeAnotherModal}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
			>
				{enableHeader && (
					<Modal.Header>
						{enableTitle && <Modal.Title>Modal title</Modal.Title>}
						{enableCloseButton && <Modal.CloseButton />}
					</Modal.Header>
				)}
				<Modal.Content>
					<p>Another Modal</p>
				</Modal.Content>
				{enableFooter && (
					<Modal.Footer>
						{enableCancelButton && <Modal.CancelButton />}
						{enableAcceptButton && <Modal.AcceptButton />}
					</Modal.Footer>
				)}
			</Modal>
		</SS.ComponentsListWrapper>
	);
};

export default ModalComponentsPage;
