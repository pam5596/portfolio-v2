import { NextResponse } from 'next/server'

export function middleware(req) {
    if (!req.nextUrl.pathname.startsWith('/admin/edit')) return

    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1]
        const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':')

        if (
            user === process.env.BASIC_AUTH_NAME &&
            pwd === process.env.BASIC_AUTH_PASSWORD
        ) {
            return NextResponse.next()
        }
    }
    req.nextUrl.pathname = '/api/auth'

    return NextResponse.rewrite(req.nextUrl)
}

