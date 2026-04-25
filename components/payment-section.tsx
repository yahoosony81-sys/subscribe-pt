"use client"

import { useEffect, useState, useRef } from "react"
import { loadTossPayments, TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk"
import { Button } from "@/components/ui/button"

// TODO: 환경 변수로 관리하는 것을 권장합니다 (.env 파일에 NEXT_PUBLIC_TOSS_CLIENT_KEY=테스트키 추가)
// 지금은 임시 테스트 키를 넣었습니다. 고객님의 테스트 클라이언트 키로 변경해 주세요!
const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"

export function PaymentSection() {
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    async function initWidgets() {
      try {
        // 1. 토스페이먼츠 SDK 초기화
        const tossPayments = await loadTossPayments(clientKey)
        // 비회원 결제용 임시 customerKey 생성 (실제 서비스에서는 로그인한 유저의 고유 ID 사용 권장)
        const customerKey = `customer_${new Date().getTime()}`
        const widget = tossPayments.widgets({ customerKey })

        // 2. 결제 금액 설정 (예: 구독권 99,000원)
        await widget.setAmount({ currency: "KRW", value: 99000 })

        // 3. 결제 위젯 렌더링
        await widget.renderPaymentMethods({ selector: "#payment-method" })
        await widget.renderAgreement({ selector: "#agreement" })

        setWidgets(widget)
        setIsReady(true)
      } catch (error) {
        console.error("토스페이먼츠 위젯 초기화 실패:", error)
        setLoadError(true)
      }
    }

    initWidgets()
  }, [])

  const handlePayment = async () => {
    if (!widgets) return

    try {
      // 4. 결제창 띄우기
      await widgets.requestPayment({
        orderId: `order_${new Date().getTime()}`, // 고유 주문번호
        orderName: "프리미엄 구독권", // 결제 상품명
        successUrl: window.location.origin + "/payment/success",
        failUrl: window.location.origin + "/payment/fail",
      })
    } catch (err) {
      console.error("결제 요청 중 에러 발생:", err)
    }
  }

  return (
    <section id="payment-section" className="bg-white py-20">
      <div className="mx-auto max-w-xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            멤버십 결제하기
          </h2>
          <p className="text-base text-slate-600">
            원하시는 결제 수단을 선택하고 빠르고 안전하게 결제하세요.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
          {/* 토스페이먼츠 UI가 렌더링 될 DOM */}
          <div id="payment-method" className="mb-4" />
          <div id="agreement" className="mb-6" />

          {/* 결제하기 버튼 */}
          <Button
            onClick={handlePayment}
            disabled={!isReady || loadError}
            className="relative mt-4 w-full overflow-hidden rounded-lg bg-blue-600 py-6 text-base font-bold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
          >
            {loadError ? (
              "결제 모듈을 불러오지 못했습니다. (새로고침 해주세요)"
            ) : !isReady ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                결제 모듈 불러오는 중...
              </span>
            ) : (
              "99,000원 결제하기"
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
