import './PersonCard.scss'
import {Image} from "minista";

const PersonCard = (props) => {
  const {
    name,
    subtitle,
    imgSrc,
    imgAlt
  }  = props;

  const hasBody = Boolean(name || subtitle);

  return (
    <div className="person-card">
      <Image className='person-card__image' src={imgSrc} alt={imgAlt} title={imgAlt} />

      {hasBody && (
        <div className="person-card__body">
          {name && (<h4 className='person-card__title'>{name}</h4>)}
          {subtitle && (<p className='person-card__subtitle'>{subtitle}</p>)}
        </div>
      )}
    </div>
  )
}

export default PersonCard;