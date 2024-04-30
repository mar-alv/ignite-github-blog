import { defaultTheme } from "../../styles/themes/default";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TerminalIcon() {
	return (
		<FontAwesomeIcon
      color={defaultTheme['blue']}
      icon={faTerminal}
      size='4x'
    />
	)
}
