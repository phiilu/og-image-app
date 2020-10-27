import Image from "next/image";
import { useRouter } from "next/router"
import GoogleFonts from 'next-google-fonts';

import Heading from "@components/Heading/Heading"

function getFontSize(length) {
  // Hello Mein Name is Florian test und ich komme aus Österreich!
  if (length > 55) {
    return `text-6xl`
  }

  // Hello Mein Name is Florian test und ich komme aus Öste!
  if (length > 32) {
    return `text-7xl`
  }

  // Hello Mein Name is Florian test!
  return `text-8xl`
}

// Example URL: http://localhost:3000/phiilu.com?title=Hello%20mein%20Name%20ist%20Florian!&url=https://phiilu.com/hello-world
const PhiiluCom = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
  const link = searchParams.get("url")

  if(!link) return null;

  const linkURL = new URL(link)
  const title = searchParams.get("title")

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" />
      <div
        className="relative flex flex-col justify-between px-8 pt-24 pb-16 space-y-8 bg-indigo-100 border-indigo-500 shadow-md"
        style={{ width: 1200, height: 630, borderWidth: 16 }}
      >
        <div className="absolute top-0 right-0 mt-6 mr-6">
          <Image
            src='/images/phiilu.com-logo.svg'
            alt="logo"
            width="96"
            height="96"
            className="w-24 h-24"
          />
        </div>

        <div className="max-w-screen-lg">
          <Heading
            noMargin
            className={`${getFontSize(title.length)} text-indigo-800`}
          >
            {title}
          </Heading>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-6">
            <img
              src="https://pbs.twimg.com/profile_images/1220392920538386432/NuYyL5b5_400x400.jpg"
              alt="Florian Kapfenberger"
              className="flex-none w-32 h-32 rounded-full shadow-md handsome"
            />
            <div className="flex flex-col text-indigo-900">
              <p className="text-4xl font-semibold font-open-sans">Phiilu.com</p>
              <p className="text-2xl font-open-sans">
                <span className="path">{linkURL.pathname}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhiiluCom
