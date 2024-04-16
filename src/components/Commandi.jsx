import Image from "next/image"
import cabify from './../assets/img/cabify.svg'
import ural from './../assets/img/ural.svg'
import opengiftcommandi from './../assets/img/opengiftcommandi.svg'
import plandi from './../assets/img/plandi.svg'
import koalitsiya from './../assets/img/koalitsiya.svg'
import rubetek from './../assets/img/rubetek.svg'
const Commandi = () => {
  return (
    <div className="w-[1084px] mx-auto flex flex-col items-center justify-center">
      <h2 className="text-[32px] text-[#1E959B] font-bold mb-[50px]">ПРОЕКТЫ командЫ PRODUCTFIT</h2>
      <ul className="flex flex-wrap gap-[62px] mb-[44px]">
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={cabify} />
        </li>
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={ural} />
        </li>
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={opengiftcommandi} />
        </li>
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={plandi} />
        </li>
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={koalitsiya} />
        </li>
        <li className="hover:opacity-80 active:opacity-60 cursor-pointer">
            <Image src={rubetek} />
        </li>
      </ul>

      <button className="text-[16px] text-[#1E959B] font-bold border-[1px] border-[#1E959B] rounded-[20px] w-[233px] h-[70px] mb-[154px]">Все проекты</button>
    </div>
  )
}

export default Commandi
