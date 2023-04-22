import { createContext, useContext } from "react";

import { ModalProps } from "../types";

type ModalContextProps = Pick<ModalProps, "isOpen" | "onCancel" | "onAccept"> &
	Partial<Pick<ModalProps, "onClose">>;

const ModalContext = createContext<ModalContextProps>({
	isOpen: false,
});

export const ModalContextProvider = ModalContext.Provider;

export const useModalContext = () => useContext(ModalContext);
