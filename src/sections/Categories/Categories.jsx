import Section from "@/layouts/Section";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import categoryItems from './CategoryItems.js'

const Categories = () => {
    const title = 'Explore our wide variety of categories';
    const description = 'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new';


    const id = 'categories-slider-navigation';

    return (
        <Section
            title={title}
            description={description}
            titleId='categories-title'
            isActionsHiddenOnMobile

            actions={(
                <SliderNavigation
                    id= {id}
                    mode='tile'
                />
            )}
        >
         <Slider
             navigationTargetElementId={id}
             isBeyondTheViewportOnMobileScreen
         >
             {categoryItems.map((categoryItem, index) => (
                 <CategoryCard {...categoryItem}  key={index} />
             ))}
         </Slider>
        </Section>
    )
}

export default Categories;