import * as S from "./styled";

const Panel = S.PanelWrapper as typeof S.PanelWrapper & {
	Header: typeof S.PanelHeader;
	Content: typeof S.PanelContent;
	Footer: typeof S.PanelFooter;
};

Panel.Header = S.PanelHeader;
Panel.Content = S.PanelContent;
Panel.Footer = S.PanelFooter;

export default Panel;
