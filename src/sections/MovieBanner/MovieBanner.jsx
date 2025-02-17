import MovieBannerCard from "@/components/MovieBannerCard/index.js";

const MovieBanner = () => {
  const titleId = 'movie-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title='Kantara'
        titleId={titleId}
        TitleTag='h1'
        description='A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'
        imageSrc = '/src/assets/images/movie-banner/2.jpg'
        isSmallPaddingY
      />
    </section>
  )
}

export default MovieBanner