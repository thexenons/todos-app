import {
	forwardRef,
	KeyboardEventHandler,
	MouseEventHandler,
	TouchEventHandler,
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { usePopper } from "react-popper";
import { useBoolean, useElementSize, useOnClickOutside } from "usehooks-ts";

import * as S from "./styled";
import { FloatingPanelProps } from "./types";

const FloatingPanel = forwardRef<HTMLDivElement, FloatingPanelProps>(
	(
		{
			content,
			placement = "bottom",
			strategy = "hover",
			isOpen,
			className = "",
			children,
		},
		ref
	) => {
		const [referenceElement, setReferenceElement] =
			useState<HTMLDivElement | null>(null);

		const [setRef, size] = useElementSize();

		useLayoutEffect(() => {
			if (referenceElement) setRef(referenceElement);
		}, [ref, referenceElement, setRef]);

		const popperRef = useRef<HTMLDivElement | null>(null);
		const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
			null
		);
		useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
			popperRef,
			() => popperElement
		);
		useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
			ref,
			() => popperRef.current
		);

		const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
			null
		);
		const { styles, attributes } = usePopper(referenceElement, popperElement, {
			modifiers: [{ name: "arrow", options: { element: arrowElement } }],
			placement,
		});

		const {
			value: mustShowTooltip,
			setFalse: hideTooltip,
			setTrue: showTooltip,
			toggle: toggleTooltip,
			setValue,
		} = useBoolean(isOpen ?? strategy === "fixed");

		useEffect(() => {
			if (isOpen !== undefined) setValue(isOpen);
		}, [isOpen, setValue]);

		useOnClickOutside(popperRef, (e) => {
			if (isOpen !== undefined) return;

			if (
				(!e.target || !referenceElement?.contains(e.target as Node)) &&
				strategy === "click"
			) {
				hideTooltip();
			}
		});

		const handleMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
			if (isOpen !== undefined) return;
			if (strategy === "hover") showTooltip();
		};

		const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
			if (isOpen !== undefined) return;
			if (strategy === "hover") hideTooltip();
		};

		const handleTouchStart: TouchEventHandler<HTMLDivElement> = () => {
			if (isOpen !== undefined) return;
			if (strategy === "hover" || strategy === "click") showTooltip();
		};

		const handleClick: MouseEventHandler<HTMLDivElement> = () => {
			if (isOpen !== undefined) return;
			if (strategy === "click") {
				showTooltip();
			}
		};

		const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
			if (isOpen !== undefined) return;
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
						style={{ ...styles.popper, minWidth: size.width }}
						className={className}
						{...attributes.popper}
					>
						<S.FloatingPanelArrow ref={setArrowElement} style={styles.arrow} />
						<S.FloatingPanelContent>{content}</S.FloatingPanelContent>
					</S.FloatingPanelWrapper>
				)}
			</>
		);
	}
);

FloatingPanel.displayName = "FloatingPanel";

export default FloatingPanel;
