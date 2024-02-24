import { cn } from '@/lib/utils'

type FeatureGridProps = {
  children: React.ReactNode
  className?: string
}

function FeatureGrid({ children, className }: FeatureGridProps) {
  return (
    <section className={cn('grid grid-flow-row grid-cols-4 gap-5', className)}>
      {children}
    </section>
  )
}

export default FeatureGrid
