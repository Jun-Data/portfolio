import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const clayCardVariants = cva(
  // 첫 번째 인자 : 모든 variant에 공통 적용되는 클래스
  'p-8 transition-transform duration-300 hover:scale-[1.02] active:scale-95',
  // 두 번째 인자 : 설정 객체
  {
    variants: {
      // "variant"라는 이름의 prop
      variant: {
        white: 'clay-card-white text-sky-foreground',
        purple: 'clay-card-purple text-navy-foreground',
        yellow: 'clay-card-yellow text-gold-foreground',
      },
    },
    // prop 미지정 시 기본값
    defaultVariants: {
      variant: 'white',
    },
  },
)

function ClayCard({
  className,
  variant = 'white',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof clayCardVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp className={cn(clayCardVariants({ variant, className }))} {...props} />
  )
}

export { ClayCard, clayCardVariants }
