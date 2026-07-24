import { NextRequest, NextResponse } from 'next/server';
import { getBranchConfig, sendCustomEventCAPI } from '@/lib/meta-capi';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, pathname, phone, name, eventSourceUrl, eventId } = body;

    if (!eventName || !pathname) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const config = getBranchConfig(pathname);
    if (!config) {
      return NextResponse.json({ error: 'Invalid branch configuration' }, { status: 400 });
    }

    const clientIp = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || '';
    const userAgent = request.headers.get('user-agent') || '';

    const fbp = request.cookies.get('_fbp')?.value || '';
    const fbc = request.cookies.get('_fbc')?.value || '';

    await sendCustomEventCAPI({
      config,
      eventName,
      eventSourceUrl: eventSourceUrl || request.url,
      clientIp,
      userAgent,
      eventId,
      phone,
      name,
      fbp,
      fbc,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[CAPI API] Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
