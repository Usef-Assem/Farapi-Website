import ArrowRightCircle from "./ArrowRightCircle"

function LetsTalkButton() {
  return (
            <button className="flex w-[248px] h-[72px] font-[Salmond-medium] cursor-pointer justify-between items-center bg-[#F4F0EC] text-[#002733] pl-6 pr-2 rounded-full hover:bg-gray-100 transition shadow-lg">
              <span>Let&apos;s Talk</span>
              <span>
                <ArrowRightCircle />
              </span>
            </button>
  )
}

export default LetsTalkButton
