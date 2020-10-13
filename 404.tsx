import { Head, Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import Header from './components/header.tsx'
import Logo from './components/logo.tsx'

export default function E404() {
    return (
        <>
            <Import from="./style/app.less" />
            <Head>
                <title>Error 404 - Page not found | Aleph.js</title>
                <meta name="robots" content="noindex" />
            </Head>
            <Header />
            <div className="fullscreen-page">
                <Logo size={150} glitch />
                <p style={{ marginTop: '1.8rem' }}><strong style={{ color: 'black' }}>Error 404</strong> - Page not found</p>
            </div>
        </>
    )
}