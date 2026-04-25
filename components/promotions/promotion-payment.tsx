"use client"

/**
 * ============================================================
 * 🔷 공통 결제 컴포넌트 (PromotionPayment)
 * ============================================================
 * - 모든 프로모션 컨테이너에서 공통으로 사용하는 결제 위젯입니다.
 * - 각 프로모션마다 다른 금액/상품명을 props로 전달할 수 있습니다.
 * - 토스페이먼츠 SDK가 연동되어 있습니다.
 * 
 * ⚠️ 주의: 탭 전환 시 결제 위젯이 정상적으로 재렌더링 되려면
 *    반드시 key prop을 다르게 줘야 합니다. (각 프로모션에서 이미 적용됨)
 * ============================================================
 */

import { useEffect, useState, useRef, useId } from "react"
import { loadTossPayments, TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk"
import { Button } from "@/components/ui/button"

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"

/* ─────────────────────────────────────────────
   📌 결제 컴포넌트 Props
   - amount: 결제 금액 (원)
   - orderName: 결제 상품명
   - buttonLabel: 결제 버튼에 표시할 텍스트
   - buttonColor: 버튼 배경색 (기본: blue-600)
   ───────────────────────────────────────────── */
interface PromotionPaymentProps {
  amount: number
  orderName: string
  buttonLabel?: string
  buttonColor?: string
}

export function PromotionPayment({
  amount,
  orderName,
  buttonLabel,
  buttonColor = "bg-blue-600 hover:bg-blue-700",
}: PromotionPaymentProps) {
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [loadError, setLoadError] = useState(false)

  // React의 useId로 고유한 DOM ID 생성 (SSR 안전)
  const reactId = useId()
  // DOM에서 사용할 수 있도록 특수문자 제거
  const safeId = reactId.replace(/:/g, "-")
  const methodId = `pm${safeId}-method`
  const agreementId = `pm${safeId}-agreement`

  useEffect(() => {
    let cancelled = false

    async function initWidgets() {
      try {
        // DOM 요소가 렌더링 되었는지 확인하기 위해 약간 대기
        await new Promise((resolve) => setTimeout(resolve, 100))

        if (cancelled) return

        // DOM 요소 존재 확인
        const methodEl = document.getElementById(methodId)
        const agreementEl = document.getElementById(agreementId)
        if (!methodEl || !agreementEl) {
          console.error("결제 위젯 DOM 요소를 찾을 수 없습니다:", methodId, agreementId)
          setLoadError(true)
          return
        }

        // 1. 토스페이먼츠 SDK 초기화
        const tossPayments = await loadTossPayments(clientKey)
        if (cancelled) return

        const customerKey = `customer_${new Date().getTime()}`
        const widget = tossPayments.widgets({ customerKey })

        // 2. 결제 금액 설정
        await widget.setAmount({ currency: "KRW", value: amount })
        if (cancelled) return

        // 3. 결제 위젯 렌더링
        await widget.renderPaymentMethods({
          selector: `#${methodId}`,
        })
        if (cancelled) return

        await widget.renderAgreement({
          selector: `#${agreementId}`,
        })
        if (cancelled) return

        setWidgets(widget)
        setIsReady(true)
      } catch (error) {
        if (!cancelled) {
          console.error("토스페이먼츠 위젯 초기화 실패:", error)
          setLoadError(true)
        }
      }
    }

    initWidgets()

    // 언마운트 시 정리 (탭 전환 시 실행됨)
    return () => {
      cancelled = true
    }
  }, [amount, methodId, agreementId])

  const handlePayment = async () => {
    if (!widgets) return

    try {
      await widgets.requestPayment({
        orderId: `order_${new Date().getTime()}`,
        orderName: orderName,
        successUrl: window.location.origin + "/payment/success",
        failUrl: window.location.origin + "/payment/fail",
      })
    } catch (err) {
      console.error("결제 요청 중 에러 발생:", err)
    }
  }

  return (
    <div className="rounded-2xl bg-slate-50 p-6 shadow-sm sm:p-8">
      {/* 토스페이먼츠 UI가 렌더링 될 DOM */}
      <div id={methodId} className="mb-4" />
      <div id={agreementId} className="mb-6" />

      {/* 결제하기 버튼 */}
      <Button
        onClick={handlePayment}
        disabled={!isReady || loadError}
        className={`relative mt-4 w-full overflow-hidden rounded-lg py-6 text-base font-bold text-white transition-all disabled:opacity-50 ${buttonColor}`}
      >
        {loadError ? (
          "결제 모듈을 불러오지 못했습니다. (새로고침 해주세요)"
        ) : !isReady ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            결제 모듈 불러오는 중...
          </span>
        ) : (
          buttonLabel || `${amount.toLocaleString()}원 결제하기`
        )}
      </Button>
    </div>
  )
}
