import './CaregoryCard.scss'
import { Image } from 'minista'
import Icon from "@/components/Icon";
import Badge from "@/components/Badge/index.js";

const CaregoryCard = (props) => {
    const {
        title,
        images = [],
        badge
    } = props;

    return (
        <a className="category-card" href="/movies" >
            <div className="category-card__images">
                {images.map((imgSrc, index) => (
                    <Image className='category-card__image' key={index} src={imgSrc} />
                ))}
            </div>
            <div className="category-card__body">
                <h3 className="category-card__title">
                  {badge && (
                    <Badge
                      className="category-card__badge"
                      mode='accent'
                    >
                      {badge}
                    </Badge>
                  )}
                  <span>{title}</span>
                </h3>
                <Icon
                    className="category-card__icon"
                    name='arrow-right'
                />
            </div>
        </a>
    )
}
export default CaregoryCard