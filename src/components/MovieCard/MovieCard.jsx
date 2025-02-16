import './MovieCard.scss'
import {Image} from 'minista'
import Badge from "@/components/Badge/index.js";
import RatingView from "@/components/RatingView/index.js";

const MovieCard = props => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    season,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="movie-card__title visually-hidden">{title}</h3>
      <Image className='movie-card__image' src={imgSrc} alt=''/>

      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName='duration'
            iconAriaLabel='Duration'
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {season && (
          <Badge
            iconName='catalog'
            iconAriaLabel='Seasons'
            hasFillIcon
          >
            {season}
          </Badge>
        )}


        {rating && (
          <Badge className='movie-card__rating-badge'>
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge
            iconName='views'
            iconAriaLabel='Views'
            hasFillIcon
          >
            {views}
          </Badge>
        )}

        {released && (
          <Badge className='movie-card__released-badge'>
            Released at <time className='movie-card__released-badge-label' dateTime={released.datetime}>{released.label}</time>
          </Badge>
        )}

      </div>
    </a>
  )
}

export default MovieCard