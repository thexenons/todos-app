import { useSetAtom } from "jotai";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLockedBody } from "usehooks-ts";

import { openModalsAtom } from "../../../../state/ui";
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
	wrapperId = "react-portal-wrapper",
}: Pick<ModalProps, "wrapperId" | "isOpen">) => {
	const setOpenModals = useSetAtom(openModalsAtom);
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

	return { wrapperElement };
};

export default useModal;
