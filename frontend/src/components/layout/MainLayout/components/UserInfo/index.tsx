import type { FC } from "react";

import useUser from "../../../../../hooks/useUser";
import { PageKey } from "../../../../../pages";
import { logout } from "../../../../../state/user";
import Link from "../../../../atoms/Link";

const UserInfo: FC = () => {
	const user = useUser();

	return (
		<div>
			{user ? (
				<div>
					<div>{user.username}</div>
					<button onClick={logout}>Logout</button>
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
