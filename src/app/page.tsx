import { ClayCard } from '@/components/ClayCard'
import { ClayButton } from '@/components/ClayButton'
import { ClayBadge } from '@/components/ClayBadge'

export default function page() {
  return (
    <div>
      <ClayCard variant="yellow">카드</ClayCard>
      <ClayButton variant="primary">버튼</ClayButton>
      <ClayBadge>뱃지</ClayBadge>
    </div>
  )
}
