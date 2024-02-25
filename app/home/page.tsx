import CategoryList from '@/components/category/category-list'
import FeatureCard from '@/components/feature/card/feature-card'
import FeatureCardCTA from '@/components/feature/card/feature-card-cta'
import FeatureGrid from '@/components/feature/feature-grid'
import FeatureSectionTitle from '@/components/feature/feature-section-title'
import Hero from '@/components/hero/hero'
import {
  getCommunityVoices,
  getFeaturedVoices,
  getMoreVoices,
} from '@/lib/feature/feature'
import heartImg from '@assets/images/heart.png'
import noteImg from '@assets/images/note.png'

async function HomePage() {
  // simulate fetching data as a server component would usually do
  const featuredVoices = await getFeaturedVoices()
  const communityVoices = await getCommunityVoices()
  const moreVoices = await getMoreVoices()

  return (
    <>
      <Hero />
      <CategoryList className='pt-6' />
      <div className='md:mx-22'>
        {/* Featured */}

        {/* Highlighted item */}
        <FeatureCardCTA
          href='#'
          feature={featuredVoices[0]}
          className='md:hidden mt-10'
        />
        {/* Rest of the items */}
        <FeatureGrid className='mt-10 auto-rows-auto md:auto-rows-fr'>
          {featuredVoices.map((feature, idx) =>
            idx === 0 ? (
              <FeatureCardCTA
                key={feature.voice}
                href='#'
                feature={feature}
                className='hidden md:flex md:col-span-2 lg:col-span-3'
              />
            ) : (
              <FeatureCard
                key={feature.voice}
                href='#'
                feature={feature}
                borderless={false}
                gradient={true}
                className='w-60 md:w-auto'
              />
            ),
          )}
        </FeatureGrid>

        {/* Community */}
        <FeatureSectionTitle
          title='Community'
          itemCount={127}
          image={heartImg}
          imageAlt='heart'
          className='mt-20 mb-8'
        />
        <FeatureGrid className=''>
          {communityVoices.map((feature) => (
            <FeatureCard
              key={feature.voice}
              href='#'
              feature={feature}
              borderless={true}
              gradient={true}
              className='w-60 md:w-auto'
            />
          ))}
        </FeatureGrid>

        {/* More voices */}
        <FeatureSectionTitle
          title='More voices'
          itemCount={394}
          image={noteImg}
          imageAlt='note'
          className='mt-14 mb-8'
        />
        <FeatureGrid className='grid-rows-2 md:grid-rows-none'>
          {moreVoices.map((feature) => (
            <FeatureCard
              key={feature.voice}
              href='#'
              feature={feature}
              borderless={true}
              className='w-60 md:w-auto'
            />
          ))}
        </FeatureGrid>
      </div>
    </>
  )
}

export default HomePage
