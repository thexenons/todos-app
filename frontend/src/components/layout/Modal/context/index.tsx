import { createContext, useContext } from "react";

import { ModalProps } from "../types";

type ModalContextProps = Pick<
	ModalProps,
	"isOpen" | "onClose" | "onCancel" | "onAccept"
>;

const ModalContext = createContext<ModalContextProps>({
	isOpen: false,
	onClose: () => null,
});

export const ModalContextProvider = ModalContext.Provider;

export const useModalContext = () => useContext(ModalContext);
