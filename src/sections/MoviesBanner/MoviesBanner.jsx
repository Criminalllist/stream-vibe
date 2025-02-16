import './MoviesBanner.scss'
import Slider from "@/components/Slider/index.js";
import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const MoviesBanner = () => {
  const titleId = 'movies-banner-title';

  const movieCards = [
    {
      title: 'Avengers : Endgame',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imageSrc: '/src/assets/images/movie-banner/1.jpg'
    },
    {
      title: 'Avengers : Code War',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imageSrc: '/src/assets/images/movie-banner/1.jpg'
    },
    {
      title: 'Avengers : Event Loop',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imageSrc: '/src/assets/images/movie-banner/1.jpg'
    },
    {
      title: 'Avengers : Console log',
      description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\'s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.',
      imageSrc: '/src/assets/images/movie-banner/1.jpg'
    },
  ]

  return (
    <section className="movies-banner container" aria-labelledby={titleId}>
      <h1 className="visually-hidden" id={titleId}>Movies & Shows</h1>
      <Slider
        sliderConfig={{
          slidesPerView: 1,
          allowTouchMove: true,
          spaceBetween: 10,

          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition='abs-bottom'
        hasScrollbarOnMobile={false}
      >
        {movieCards.map((movie, index) => (
          <MovieBannerCard {...movie} key={index} />
        ))}
        </Slider>
    </section>
  )
}

export default MoviesBanner;