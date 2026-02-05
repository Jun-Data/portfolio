export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 왼쪽 상단 - sky 색상 blob */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-xl animate-float" />
      {/* 오른쪽 상단 - gold 색상 blob */}
      <div
        className="absolute top-40 right-20 w-96 h-96 
                   rounded-full bg-gold/10 blur-xl animate-float-delayed"
      />

      {/* 하단 중앙 - navy 색상 blob */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 
                   rounded-full bg-navy/10 blur-xl animate-float"
      />
    </div>
  )
}
