import Head from 'next/head'
import './asserts/styles.less'

export default ({ children }) =>
  <div>
    <Head>
      <meta charSet='utf-8' />
      <title>远昊智慧校园</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>
