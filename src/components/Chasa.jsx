import Image from "next/image"
import chasa from './../assets/img/chasa.png'
const Chasa = () => {
  return (
    <div className="mb-[123px] w-[1073px] mx-auto flex items-center justify-center gap-[129px]">
      <Image className="w-[474px] h-[463px]" src={chasa} />
      <div className="max-w-[470px] flex flex-col items-center">
        <h2 className="text-[34px] text-[#1E959B] font-bold mb-[15px]">Начнем работу над вашим ІТ-проектом через 24 часа</h2>
        <p className="text-[14px] mb-[29px] 
#3C3C3C">Проектируем, запускаем и сопровождаем IT-проеты любой сложности</p>
        <button className="hover:opacity-80 active:opacity-60 rounded-[20px] w-[281px] h-[70px] bg-[#F05670] text-white text-[16px] font-bold">ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
    </div>
  )
}

export default Chasa
