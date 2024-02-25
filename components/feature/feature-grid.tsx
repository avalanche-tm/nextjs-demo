import { cn } from '@/lib/utils'

type FeatureGridProps = {
  children: React.ReactNode
  className?: string
}

function FeatureGrid({ children, className }: FeatureGridProps) {
  return (
    <section className='overflow-x-auto'>
      <div
        className={cn(
          'grid grid-flow-col auto-cols-max auto-rows-max md:grid-flow-row md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default FeatureGrid
