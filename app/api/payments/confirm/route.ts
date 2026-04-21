import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { paymentKey, orderId, amount } = body

    // 토스페이먼츠 시크릿 키 가져오기
    const secretKey = process.env.TOSS_SECRET_KEY

    if (!secretKey) {
      return NextResponse.json(
        { message: "서버 설정 에러: 시크릿 키가 없습니다." },
        { status: 500 }
      )
    }

    // 시크릿 키 뒤에 콜론(:)을 붙이고 Base64로 인코딩해야 합니다. (토스페이먼츠 공식 스펙)
    const encodedKey = Buffer.from(`${secretKey}:`).toString("base64")

    // 토스페이먼츠 결제 승인 API 호출
    const response = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    })

    const data = await response.json()

    // 승인 실패 처리
    if (!response.ok) {
      console.error("결제 승인 실패:", data)
      return NextResponse.json(data, { status: response.status })
    }

    // 승인 성공 처리
    // TODO: 여기서 DB에 결제 완료 상태를 저장하거나, 결제 완료 이메일을 보내는 등의 로직을 추가하세요.
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error("결제 승인 API 에러:", error)
    return NextResponse.json(
      { message: "결제 승인 중 알 수 없는 에러가 발생했습니다." },
      { status: 500 }
    )
  }
}
