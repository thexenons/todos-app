import { FC, useState } from "react";

import Button from "../../../components/atoms/Button";
import FloatingPanel from "../../../components/layout/FloatingPanel";
import type { FloatingPanelProps } from "../../../components/layout/FloatingPanel/types";
import * as SS from "../styled";

const FloatingPanelComponenstPage: FC = () => {
	const [placement, setPlacement] =
		useState<FloatingPanelProps["placement"]>("bottom");

	return (
		<SS.ComponentsListWrapper>
			<h1>FloatingPanel</h1>
			<div>
				<h2>Set placement</h2>
				<SS.ComponentsRowWrapper>
					{(
						[
							"auto",
							"auto-end",
							"auto-start",
							"bottom",
							"bottom-end",
							"bottom-start",
							"left",
							"left-end",
							"left-start",
							"right",
							"right-end",
							"right-start",
							"top",
							"top-end",
							"top-start",
						] as FloatingPanelProps["placement"][]
					).map((placementOption) => (
						<Button
							key={placementOption}
							onClick={() => setPlacement(placementOption)}
						>
							{placementOption}
						</Button>
					))}
				</SS.ComponentsRowWrapper>
			</div>
			<SS.CenteredContent>
				<SS.ComponentsRowWrapper>
					<FloatingPanel
						placement={placement}
						strategy="fixed"
						content="Content"
					>
						Fixed
					</FloatingPanel>
					<FloatingPanel
						placement={placement}
						strategy="hover"
						content="Content"
					>
						Hover
					</FloatingPanel>
					<FloatingPanel
						placement={placement}
						strategy="click"
						content="Content"
					>
						Click
					</FloatingPanel>
				</SS.ComponentsRowWrapper>
			</SS.CenteredContent>
		</SS.ComponentsListWrapper>
	);
};

export default FloatingPanelComponenstPage;
