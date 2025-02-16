import './Badge.scss'
import classNames from "classnames";
import Icon from "@/components/Icon/index.js";


const Badge = props => {
  const {
    className,
    /**
     * '' (default) | 'accent'
     */
    mode = '',
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel
  } = props

  return (
    <div className={classNames(className, 'badge', {
      [`badge--${mode}`]: mode,
    })}>
      {iconName && (
        <Icon
          className='badge__icon'
          name={iconName}
          hasFill={hasFillIcon}
          aria-label={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}

export default Badge