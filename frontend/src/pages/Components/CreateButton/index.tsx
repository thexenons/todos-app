import { FC } from "react";

import CreateButton from "../../../components/molecules/CreateButton";
import * as SS from "../styled";

const CreateButtonComponenstPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>CreateButton</h1>
		<SS.ComponentsRowWrapper>
			<CreateButton />
			<CreateButton disabled />
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default CreateButtonComponenstPage;
