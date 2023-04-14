import { FC } from "react";

import DeleteButton from "../../../components/molecules/DeleteButton";
import * as SS from "../styled";

const DeleteButtonComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>DeleteButton</h1>
		<SS.ComponentsRowWrapper>
			<DeleteButton />
			<DeleteButton disabled />
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default DeleteButtonComponenstPage;
