import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const clayBadgeVariants = cva(
  // 첫 번째 인자 : 모든 variant에 공통 적용되는 클래스
  `inline-block px-4 py-2 m-1 rounded-full text-sm font-bold
   bg-white text-sky-foreground
   shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_8px_rgba(28,44,91,0.15)]`,
)

function ClayBadge({
  className,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof clayBadgeVariants>) {
  return <span className={cn(clayBadgeVariants({ className }))} {...props} />
}

export { ClayBadge, clayBadgeVariants }
