import Link from "next/link"
import ArrowRightCircle from "./ArrowRightCircle"

function LetsTalkButton({bgColor='#F4F0EC' , ArrowBgColor='#58F468' , ArrowColor}) {
  return (
            <Link href={'https://calendly.com/omar-farapi/30min'} target="_blank" className="flex w-[248px] h-[72px] relative z-50 font-[Salmond-medium] cursor-pointer justify-between items-center text-[#002733] pl-6 pr-2 rounded-full hover:bg-gray-100 transition shadow-lg"
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
