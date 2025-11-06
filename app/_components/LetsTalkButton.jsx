import Link from "next/link"
import ArrowRightCircle from "./ArrowRightCircle"

function LetsTalkButton({bgColor='#F4F0EC' , ArrowBgColor='#58F468' , ArrowColor, border=false}) {
  return (
            <Link href={'https://calendly.com/omar-farapi/30min'} target="_blank" className={`flex md:w-[248px] md:h-[72px] h-16 w-56  relative z-50 font-[Salmond-medium] cursor-pointer justify-between items-center text-[#002733] pl-6 pr-2 rounded-full hover:bg-gray-100 transition ${border ? 'border border-[#DADADA]' : ''}`}
            style={{backgroundColor: bgColor}}
            >
              <span>Let&apos;s Talk</span>
              <span>
                <ArrowRightCircle ArrowBgColor = {ArrowBgColor} ArrowColor={ArrowColor} />
              </span>
            </Link>
  )
}

export default LetsTalkButton
