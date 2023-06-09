import { Children, FC } from "react";
import { MdAlarmAdd, MdDelete, MdModeEdit } from "react-icons/md";

import Button from "../../../components/atoms/Button";
import {
	ButtonColorVariants,
	ButtonProps,
	ButtonVariants,
} from "../../../components/atoms/Button/types";
import * as SS from "../styled";

const roundedVariants = [
	{
		title: "Default",
	},
	{
		title: "Rounded",
		isRounded: true,
	},
	{
		title: (
			<Button.Icon>
				<MdAlarmAdd />
			</Button.Icon>
		),
	},
	{
		title: (
			<Button.Icon>
				<MdAlarmAdd />
			</Button.Icon>
		),
		isRounded: true,
	},
];

const propsVariants = [
	{
		leftIcon: <MdModeEdit />,
	},
	{
		leftIcon: Children.toArray([<MdModeEdit />, <MdDelete />]),
	},
	{
		rightIcon: <MdModeEdit />,
	},
	{
		rightIcon: Children.toArray([<MdModeEdit />, <MdDelete />]),
	},
	{
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
					children: (
						<>
							{propsVariant.leftIcon && (
								<Button.Icon>{propsVariant.leftIcon}</Button.Icon>
							)}
							{title}
							{propsVariant.rightIcon && (
								<Button.Icon>{propsVariant.rightIcon}</Button.Icon>
							)}
						</>
					),
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
	<SS.ComponentsListWrapper>
		<h1>Buttons</h1>
		{Children.toArray(
			Object.keys(Button.variants).map((buttonVariant) => (
				<SS.ComponentsListWrapper>
					<h2>{buttonVariant}</h2>
					{Children.toArray(
						Object.keys(Button.colorVariants).map((buttonColorVariant) => (
							<SS.ComponentsListWrapper>
								<h3>{buttonColorVariant}</h3>
								{Children.toArray(
									buttonsLists.map((buttonsList) => (
										<SS.ComponentsRowWrapper>
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
										</SS.ComponentsRowWrapper>
									))
								)}
							</SS.ComponentsListWrapper>
						))
					)}
				</SS.ComponentsListWrapper>
			))
		)}
	</SS.ComponentsListWrapper>
);

export default ButtonComponentsPage;
