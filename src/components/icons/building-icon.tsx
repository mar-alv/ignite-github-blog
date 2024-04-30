import { defaultTheme } from '../../styles/themes/default'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function BuildingIcon() {
  return (
    <FontAwesomeIcon
      color={defaultTheme['base-label']}
      icon={faBuilding}
      size='1x'
    />
  )
}
