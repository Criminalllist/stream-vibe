import './Collections.scss'
import Tabs from "@/components/Tabs";
import collectionGroups from "@/sections/Collections/collectionGroups.js";
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import Section from "@/layouts/Section/index.js";
import SliderNavigation from "@/components/Slider/components/SliderNavigation/index.js";
import Slider from "@/components/Slider/index.js";
import CaregoryCard from "@/components/CategoryCard/index.js";
import MovieCard from "@/components/MovieCard/index.js";

const Collections = () => {

  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group" >
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((item, index) => {
              const {
                title,
                categoryItems,
                sliderConfig,
                movieItems,
              } = item;

              const  titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`;
              const  titleId = `${titleFormatted}-title`
              const sliderNavigationId = `${titleFormatted}-slider-navigation`

              return (
                <Section
                  className='collections__section'
                  title={title}
                  titleID={titleId}
                  actions={(
                    <SliderNavigation
                    id={sliderNavigationId}
                    mode='tile'
                    />
                  )}
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderConfig={sliderConfig}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileScreen
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CaregoryCard {...categoryItem} key={index} />
                      )
                    )
                      ?? movieItems?.map((movieItem, index) => (
                        <MovieCard {...movieItem} key={index} />
                      )
                    )}
                  </Slider>
                </Section>
              )

            })}
          </div>
        ),
      }))}
    />
  )
}

export default Collections;