import './Ratings.scss'
import RatingView from "@/components/RatingView/index.js";

const Ratings = (props) => {
  const { items } = props

  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({title, ratingValue}, index) => (
          <li key={index} className="ratings__item">
            <h4 className="ratings__title">{title}</h4>
            <RatingView value={ratingValue} label={ratingValue} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings;