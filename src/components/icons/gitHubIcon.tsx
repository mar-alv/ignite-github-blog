import { defaultTheme } from '../../styles/themes/default'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function GitHubIcon() {
  return (
    <FontAwesomeIcon
      color={defaultTheme['base-label']}
      icon={faGithub}
      size="1x"
    />
  )
}
