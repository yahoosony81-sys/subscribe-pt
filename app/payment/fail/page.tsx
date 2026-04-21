"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function FailPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // 토스페이먼츠에서 넘겨주는 에러 메시지와 코드
  const message = searchParams.get("message") || "결제를 취소했거나 알 수 없는 에러가 발생했습니다."
  const code = searchParams.get("code") || "UNKNOWN_ERROR"

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">결제 실패</h2>
          <p className="mb-4 text-slate-600">{message}</p>
          <p className="mb-8 text-xs text-slate-400">에러 코드: {code}</p>
          
          <Button onClick={() => router.push("/")} className="w-full bg-slate-900 py-6 text-lg hover:bg-slate-800">
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    </main>
  )
}
