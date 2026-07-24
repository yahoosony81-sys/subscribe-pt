import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 사용 예시: /api/revalidate?path=/hl-caremembership&secret=mindfitness123!
  const path = request.nextUrl.searchParams.get('path');
  const secret = request.nextUrl.searchParams.get('secret');

  // 다른 사람이 임의로 캐시를 지우지 못하도록 간단한 비밀번호를 설정합니다.
  if (secret !== 'mindfitness123!') {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (path) {
    // Next.js 기능: 입력받은 경로의 캐시만 강제로 재생성하도록 예약합니다.
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, path, now: Date.now() });
  }

  return NextResponse.json({
    revalidated: false,
    message: 'Missing path to revalidate',
  });
}
