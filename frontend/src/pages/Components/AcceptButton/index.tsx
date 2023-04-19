import { FC } from "react";

import AcceptButton from "../../../components/molecules/AcceptButton";
import * as SS from "../styled";

const AcceptButtonComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>AcceptButton</h1>
		<SS.ComponentsRowWrapper>
			<AcceptButton />
			<AcceptButton disabled />
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default AcceptButtonComponenstPage;
