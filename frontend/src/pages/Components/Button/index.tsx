import { Children, FC } from "react";
import { MdAlarmAdd, MdDelete, MdModeEdit } from "react-icons/md";

import Button from "../../../components/atoms/Button";
import {
	ButtonColorVariants,
	ButtonProps,
	ButtonVariants,
} from "../../../components/atoms/Button/types";
import * as S from "./styled";

const roundedVariants = [
	{
		title: "Default",
	},
	{
		title: "Rounded",
		isRounded: true,
	},
	{
		title: <MdAlarmAdd />,
	},
	{
		title: <MdAlarmAdd />,
		isRounded: true,
	},
];

const propsVariants = [
	{
		title: "leftIcon",
		leftIcon: Children.toArray([<MdModeEdit />, <MdDelete />]),
	},
	{
		title: "rightIcon",
		rightIcon: Children.toArray([<MdModeEdit />, <MdDelete />]),
	},
	{
		title: "both icons",
		leftIcon: <MdModeEdit />,
		rightIcon: <MdModeEdit />,
	},
];

const buttons = roundedVariants.reduce<ButtonProps[]>(
	(prev, { title, ...restRoundedVariant }) => {
		prev.push({
			children: title,
			...restRoundedVariant,
		});

		if (typeof title === "string") {
			propsVariants.forEach((propsVariant) => {
				prev.push({
					children: `${title} ${propsVariant.title}`,
					...restRoundedVariant,
					...propsVariant,
				});
			});
		}

		return prev;
	},
	[]
);

const buttonsLists = buttons.reduce<ButtonProps[][]>((prev, curr, index) => {
	if (!prev[index]) prev[index] = [];

	prev[index].push(curr);
	prev[index].push({ ...curr, disabled: true });

	return prev;
}, []);

const ButtonComponentsPage: FC = () => (
	<S.ButtonListWrapper>
		<h1>Buttons</h1>
		{Children.toArray(
			Object.keys(ButtonVariants).map((buttonVariant) => (
				<S.ButtonListWrapper>
					<h2>{buttonVariant}</h2>
					{Children.toArray(
						Object.keys(ButtonColorVariants).map((buttonColorVariant) => (
							<S.ButtonListWrapper>
								<h3>{buttonColorVariant}</h3>
								{Children.toArray(
									buttonsLists.map((buttonsList) => (
										<S.ButtonsWrapper>
											{Children.toArray(
												buttonsList.map(({ children, ...restButton }) => (
													<Button
														variant={buttonVariant as ButtonVariants}
														colorVariant={
															buttonColorVariant as ButtonColorVariants
														}
														{...restButton}
													>
														{children}
													</Button>
												))
											)}
										</S.ButtonsWrapper>
									))
								)}
							</S.ButtonListWrapper>
						))
					)}
				</S.ButtonListWrapper>
			))
		)}
	</S.ButtonListWrapper>
);

export default ButtonComponentsPage;
