import { ArrowRight } from 'lucide-react'

function ArrowRightCircle({ArrowBgColor , ArrowColor = 'black'}) {
  return (
        <div className="flex justify-center items-center w-14 h-14 rounded-full cursor-pointer hover:scale-105 transition-transform"
        style={{backgroundColor: ArrowBgColor}}>
          <ArrowRight className={`text-${ArrowColor} w-5 h-5`} />
        </div>
  )
}

export default ArrowRightCircle
