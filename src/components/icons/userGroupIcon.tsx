import { defaultTheme } from '../../styles/themes/default'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function UserGroupIcon() {
  return (
    <FontAwesomeIcon
      color={defaultTheme['base-label']}
      icon={faUserGroup}
      size="1x"
    />
  )
}
