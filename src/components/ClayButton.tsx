import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const clayButtonVariants = cva(
  // 첫 번째 인자 : 모든 variant에 공통 적용되는 클래스
  `relative px-8 py-4 rounded-full font-bold text-lg
   shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),6px_6px_12px_rgba(28,44,91,0.2)]
   active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)]
   active:translate-y-1
   transition-all duration-200`,
  // 두 번째 인자 : 설정 객체
  {
    variants: {
      // "variant"라는 이름의 prop
      variant: {
        primary: 'bg-navy text-navy-foreground hover:bg-[#283b75]',
        secondary: 'bg-white text-sky-foreground hover:bg-slate-50',
        accent: 'bg-gold text-gold-foreground hover:bg-[#c9961a]',
      },
    },
    // prop 미지정 시 기본값
    defaultVariants: {
      variant: 'primary',
    },
  },
)

function ClayButton({
  className,
  variant = 'primary',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof clayButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(clayButtonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { ClayButton, clayButtonVariants }
