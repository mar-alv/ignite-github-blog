import { TerminalIcon } from "../icons";
import { StyledLogo } from "./styles";

export function Logo() {
	return (
		<StyledLogo>
			<TerminalIcon />

			<p className="title-l">
				GITHUB BLOG
			</p>
		</StyledLogo>
	)
}
