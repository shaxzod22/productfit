import Bg from './../assets/img/bgimage.png'
const Project = () => {
  return (
    <div className='h-[618px] mb-[100px] w-full' style={{backgroundImage: `url(${Bg.src})`}}>
      <div className="pt-[200px] pl-[221px]">
        <h2 className='text-[32px] text-[#F8FFFF] font-bold mb-[15px]'>Начнем проект?</h2>
        <p className='text-[16px] mb-[29px] text-[#F8FFFF]'>Усилим Вашу комунду и запустим проект быстрее!</p>
        <button className='hover:opacity-80 active:opacity-60 rounded-[20px] w-[281px] h-[70px] bg-[#F8FFFF] text-[#1E959B] text-[16px] font-bold'>УЗНАТЬ СТОИМОСТЬ ПРОЭКТА</button>
      </div>
    </div>
  )
}

export default Project
