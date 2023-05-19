import {
	FC,
	KeyboardEventHandler,
	MouseEventHandler,
	TouchEventHandler,
	useImperativeHandle,
	useRef,
	useState,
} from "react";
import { usePopper } from "react-popper";
import { useBoolean, useOnClickOutside } from "usehooks-ts";

import * as S from "./styled";
import { FloatingPanelProps } from "./types";

const FloatingPanel: FC<FloatingPanelProps> = ({
	content,
	placement = "bottom",
	strategy = "hover",
	children,
}) => {
	const [referenceElement, setReferenceElement] =
		useState<HTMLDivElement | null>(null);

	const popperRef = useRef<HTMLDivElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
		null
	);
	useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
		popperRef,
		() => popperElement
	);

	const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers: [{ name: "arrow", options: { element: arrowElement } }],
		placement,
	});

	const {
		value: mustShowTooltip,
		setFalse: hideTooltip,
		setTrue: showTooltip,
		toggle: toggleTooltip,
	} = useBoolean(strategy === "fixed");

	useOnClickOutside(popperRef, (e) => {
		if (
			(!e.target || !referenceElement?.contains(e.target as Node)) &&
			strategy === "click"
		) {
			hideTooltip();
		}
	});

	const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
		if (strategy === "hover") showTooltip();
	};

	const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
		if (strategy === "hover") hideTooltip();
	};

	const handleTouchStart: TouchEventHandler<HTMLDivElement> = () => {
		if (strategy === "hover" || strategy === "click") showTooltip();
	};

	const handleClick: MouseEventHandler<HTMLDivElement> = () => {
		if (strategy === "click") {
			showTooltip();
		}
	};

	const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
		if (e.key === "Enter" && strategy === "click") toggleTooltip();
	};

	return (
		<>
			<div
				ref={setReferenceElement}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onTouchStart={handleTouchStart}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				role="button"
				tabIndex={0}
			>
				{children}
			</div>
			{content && mustShowTooltip && (
				<S.FloatingPanelWrapper
					ref={setPopperElement}
					style={styles.popper}
					{...attributes.popper}
				>
					<S.FloatingPanelArrow ref={setArrowElement} style={styles.arrow} />
					<S.FloatingPanelContent>{content}</S.FloatingPanelContent>
				</S.FloatingPanelWrapper>
			)}
		</>
	);
};

export default FloatingPanel;
