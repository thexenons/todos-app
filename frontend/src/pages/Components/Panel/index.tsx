import { FC } from "react";

import Panel from "../../../components/layout/Panel";
import * as SS from "../styled";

const PanelComponentsPage: FC = () => (
	<SS.ComponentsListWrapper>
		<h1>Panel</h1>
		<SS.ComponentsRowWrapper>
			<Panel>
				<Panel.Content>Children</Panel.Content>
			</Panel>
			<Panel>
				<Panel.Header>Header</Panel.Header>
				<Panel.Content>Children</Panel.Content>
			</Panel>
			<Panel>
				<Panel.Content>Children</Panel.Content>
				<Panel.Footer>Footer</Panel.Footer>
			</Panel>
			<Panel>
				<Panel.Header>Header</Panel.Header>
				<Panel.Content>Children</Panel.Content>
				<Panel.Footer>Footer</Panel.Footer>
			</Panel>
		</SS.ComponentsRowWrapper>
	</SS.ComponentsListWrapper>
);

export default PanelComponentsPage;
