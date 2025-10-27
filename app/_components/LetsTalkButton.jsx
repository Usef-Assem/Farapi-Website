import ArrowRightCircle from "./ArrowRightCircle"

function LetsTalkButton() {
  return (
            <button className="flex w-[200] font-[Salmond] cursor-pointer justify-between items-center bg-white text-[#002733] px-2 py-1 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
              <span>Let&apos;s Talk</span>
              <span>
                <ArrowRightCircle />
              </span>
            </button>
  )
}

export default LetsTalkButton
