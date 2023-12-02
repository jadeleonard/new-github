import Image from "next/image";
import { button, hero, navbar } from "./(components)/components"
import Link from "next/link"


export default function App() {

  return(
      <div>
        <div className={navbar.navbar}>
          <div className={navbar.navbarLogo}>Logo</div>




          <ul className={navbar.navbarUl}>


            <li className={navbar.navbarLi}><button>Sign up</button></li>

            <li className={navbar.navbarLi}><button>Sign in</button></li>


          </ul>
        </div>
        <div className={hero.heroBody}>
          <div className={hero.heroTitle}>Social Media App <span className="text-blue-400">ChirpClick </span></div>
          <div className={hero.heroDescription}>Easy chat and post method on your social Media</div>
          <div className='gap-4 inline-flex m-2 mx-auto'>
            <Link href='/dashboard'>
              <button className={button.buttonGetStarted}>Get Started</button>
            </Link>
            <button className={button.buttonDocumentation}>Documentation</button>
          </div>
          <div className={hero.herocta}>
            <p className="text-2xl font-bold">Powered By:</p>
            <div className="inline-flex gap-2 "><Image src='/iconGoogle.png'width={50} height={50} alt="google" /></div>
            <div className="inline-flex gap-2 "><Image src='/iconPrisma2.png'width={50} height={50}alt="mongodb"/></div>
            <div className="inline-flex gap-2 "><Image src='/iconMongodb.png'width={50} height={50} alt="clerk"/></div>
            <div className="inline-flex gap-2 "><Image src='/clerk.png'width={100} height={100}alt='eo' /></div>


          </div>
        </div>

      </div>
  )
}