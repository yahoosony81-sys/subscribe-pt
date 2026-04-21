"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // URL에서 결제 승인에 필요한 파라미터 가져오기
    const paymentKey = searchParams.get("paymentKey")
    const orderId = searchParams.get("orderId")
    const amount = searchParams.get("amount")

    async function confirmPayment() {
      if (!paymentKey || !orderId || !amount) {
        setStatus("error")
        setErrorMessage("잘못된 접근입니다. 결제 정보가 부족합니다.")
        return
      }

      try {
        // 방금 만든 백엔드 승인 API로 요청 보내기
        const response = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentKey,
            orderId,
            amount,
          }),
        })

        const data = await response.json()

        if (response.ok) {
          setStatus("success")
        } else {
          setStatus("error")
          setErrorMessage(data.message || "결제 승인에 실패했습니다.")
        }
      } catch (error) {
        setStatus("error")
        setErrorMessage("서버와 통신 중 에러가 발생했습니다.")
      }
    }

    confirmPayment()
  }, [searchParams])

  return (
    <>
      {status === "loading" && (
        <div className="flex flex-col items-center">
          <svg className="mb-4 h-12 w-12 animate-spin text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <h2 className="text-xl font-bold text-slate-900">결제 승인 중입니다...</h2>
          <p className="mt-2 text-slate-500">창을 닫지 말고 잠시만 기다려주세요.</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-slate-900">결제 완료!</h2>
          <p className="mb-8 text-slate-600">프리미엄 구독권 결제가 성공적으로 완료되었습니다.</p>
          <Button onClick={() => router.push("/")} className="w-full bg-blue-600 py-6 text-lg hover:bg-blue-700">
            홈으로 돌아가기
          </Button>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-slate-900">결제 실패</h2>
          <p className="mb-8 text-slate-600">{errorMessage}</p>
          <Button onClick={() => router.push("/")} variant="outline" className="w-full py-6 text-lg">
            다시 시도하기
          </Button>
        </div>
      )}
    </>
  )
}

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <Suspense fallback={<p>로딩 중...</p>}>
          <SuccessContent />
        </Suspense>
      </div>
    </main>
  )
}
