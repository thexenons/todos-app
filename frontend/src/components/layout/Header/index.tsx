import type { FC } from "react";

import useUser from "../../../hooks/useUser";
import { logout } from "../../../state/user";
import Container from "../Container";
import * as S from "./styled";

const Header: FC = () => {
	const user = useUser();

	return (
		<S.HeaderWrapper>
			<Container>
				<div>Header</div>
				{user && (
					<div>
						{user.username} <button onClick={logout}>Logout</button>
					</div>
				)}
			</Container>
		</S.HeaderWrapper>
	);
};

export default Header;
