import { FC } from "react";

import UpdateButton from "../../../components/molecules/UpdateButton";
import * as SS from "../styled";

const UpdateButtonComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>UpdateButton</h1>
		<SS.ComponentsRowWrapper>
			<UpdateButton />
			<UpdateButton disabled />
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default UpdateButtonComponenstPage;
