import { FC } from "react";

import Button from "../../../components/atoms/Button";
import {
	ButtonColorVariants,
	ButtonVariants,
} from "../../../components/atoms/Button/types";
import * as S from "./styled";

const ButtonComponentsPage: FC = () => (
	<S.ButtonListWrapper>
		<h1>Buttons</h1>
		{Object.keys(ButtonVariants).map((buttonVariant) => (
			<S.ButtonListWrapper key={buttonVariant}>
				<h2>{buttonVariant}</h2>
				{Object.keys(ButtonColorVariants).map((buttonColorVariant) => (
					<S.ButtonListWrapper key={`${buttonVariant}-${buttonColorVariant}`}>
						<h3>{buttonColorVariant}</h3>
						<S.ButtonsWrapper>
							<Button
								variant={buttonVariant as ButtonVariants}
								colorVariant={buttonColorVariant as ButtonColorVariants}
							>
								Default
							</Button>
							<Button
								variant={buttonVariant as ButtonVariants}
								colorVariant={buttonColorVariant as ButtonColorVariants}
								disabled
							>
								Default disabled
							</Button>
							<Button
								variant={buttonVariant as ButtonVariants}
								colorVariant={buttonColorVariant as ButtonColorVariants}
								isRounded
							>
								Rounded
							</Button>
							<Button
								variant={buttonVariant as ButtonVariants}
								colorVariant={buttonColorVariant as ButtonColorVariants}
								isRounded
								disabled
							>
								Rounded disabled
							</Button>
						</S.ButtonsWrapper>
					</S.ButtonListWrapper>
				))}
			</S.ButtonListWrapper>
		))}
	</S.ButtonListWrapper>
);

export default ButtonComponentsPage;
