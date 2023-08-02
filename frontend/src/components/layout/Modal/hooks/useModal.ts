import { useSetAtom } from "jotai";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { useLockedBody } from "usehooks-ts";

import { openedModalsAtom } from "../state";
import type { ModalProps } from "../types";

function createWrapperAndAppendToBody(wrapperId: string) {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	wrapperElement.setAttribute("data-testid", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

const useModal = ({
	isOpen,
	onClose,
	disabled,
	wrapperId = "react-portal-wrapper",
}: Pick<ModalProps, "wrapperId" | "isOpen" | "onClose" | "disabled">) => {
	const setOpenModals = useSetAtom(openedModalsAtom);
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
		null
	);

	const [, setLocked] = useLockedBody(false, "root");

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);

		if (!element) {
			element = createWrapperAndAppendToBody(wrapperId);
		}

		setWrapperElement(element);
	}, [wrapperId]);

	const openModalLock = useRef(false);
	useEffect(() => {
		if (isOpen && !openModalLock.current) {
			setLocked(true);
			setOpenModals((prev) => prev + 1);
			openModalLock.current = true;
		}

		return () => {
			if (openModalLock.current) {
				setOpenModals((prev) => {
					const newOpenModals = prev - 1;

					if (newOpenModals === 0) {
						setLocked(false);
					}

					return newOpenModals;
				});
				openModalLock.current = false;
			}
		};
	}, [isOpen, setLocked, setOpenModals]);

	const onBackdropClick = useCallback(() => {
		if (disabled) return;

		onClose?.();
	}, [disabled, onClose]);

	return { wrapperElement, onBackdropClick };
};

export default useModal;
