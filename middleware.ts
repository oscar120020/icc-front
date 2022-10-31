import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { revalidateToken } from './api';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  
  if(request.nextUrl.pathname.startsWith('/admin')){
    const url = request.nextUrl.clone()
    url.pathname = '/'
    if(!token){
      return NextResponse.redirect(url)
    }
    try {
      const res = await revalidateToken(token)
      request.cookies.set('token', res.token)
    } catch (error: any) {
      url.search = "invalid-token=true"
      return NextResponse.redirect(url)
    }
  }
  NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
}
