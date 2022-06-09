import Head from 'next/head'

export default function Home() {
  return (
    <div className='landing'>
      <Head>
        <title>Motto</title>
      </Head>
      <div className='landing__logo'>
        <img src="/imgs/motto-logo.png" alt="Motto Logo" />
      </div>
      <h1 className='h1'>Comprehensive solutions for</h1>
      <h1>RA management</h1>
      <p className='landing__p'>Motto Health is a virtual specialty care program that provides high-quality, convenient clinical care and support to individuals with chronic inflammatory conditions.</p>
      <p className='landing__date'>Coming July 2022.</p>
      <div className='landing__dot'>
        <img src="/imgs/blue-circle.png" alt="Blue Circle" />
      </div>
    </div>
  )
}
