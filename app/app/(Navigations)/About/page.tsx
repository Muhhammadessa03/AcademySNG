import Image from 'next/image'
import NavBar from '../../../public/Navigation'

export default function Page() {
  return (
    <>
    <NavBar/>
    <br/>
    <div className="flex justify-center bg-gray-400">
      <div className='mx-4 ' >
        <Image src="/Profile.jpeg" width={80} height={80} alt='music' />
      </div>
    <div className='mx-4 self-center'>
      <h1>MUHAMMAD ESSA Gadani</h1>
      <h2>Certified Applied Generative (AI) Artifical Intellegence Web 0.3 & Metaverse Engineer (GenEng) </h2>
      <button>Learn More</button>
    </div>
    </div>
    </>
  )
}