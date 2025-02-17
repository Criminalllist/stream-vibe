import './Field.scss'
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import classNames from "classnames";

const Field = (props) => {
    const {
      className,
      id = getIdFromTitle(props.label),
      label,
      /**
       * undefined (default) | 'email' | 'textarea'
       */
      type,
      placeholder,
      isRequired,
      inputMode,
      mask,
      renderBefore,
    } = props;

    const Component = type === 'textarea' ? 'textarea' : 'input';

    const extraAttrs = {}

    if(mask){
      extraAttrs['data-js-input-mask'] = mask;
    }

    const fieldClass = 'field__control'

    return (
      <div
      className={classNames(className, 'field')}
      >
        <label
          className="field__label"
          htmlFor={id}>
          {label}
          {isRequired && (
            <span className='field__required-star' aria-hidden='true'>
              *
            </span>
          )}
        </label>

        <div className="field__body">
          {renderBefore?.(fieldClass)}
          <Component
            className={fieldClass}
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={isRequired}
            inputMode={inputMode}
            {...extraAttrs}
          />
        </div>
      </div>
    )
}

export default Field;