import type { FC } from "react";

import { PageKey } from "../../../../../constants";
import useUser from "../../../../../hooks/useUser";
import { logout } from "../../../../../state/user";
import Button from "../../../../atoms/Button";
import Link from "../../../../atoms/Link";

const UserInfo: FC = () => {
	const user = useUser();

	return (
		<div>
			{user ? (
				<div>
					<div>{user.username}</div>
					<Button onClick={logout}>Logout</Button>
				</div>
			) : (
				<div>
					<Link pageKey={PageKey.login}>Login</Link>
				</div>
			)}
		</div>
	);
};

export default UserInfo;
