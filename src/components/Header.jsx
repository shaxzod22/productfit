import Image from 'next/image'
import Logo from './../assets/img/Logo.svg'
import telegram from './../assets/img/tgImage.png'
import telNum from './../assets/img/telNumber.png'
import email from './../assets/img/email.png'

const Header = () => {
  return (
    <header className='w-full'>
      <div className="w-[1400px] items-center py-[31px] mx-auto flex justify-center">
        <Image src={Logo} alt='Logo' className='w-[239px] mr-[242px] h-[58px]' />
        <ul className='mr-[58px] flex gap-[57px]'>
            <li>
                <Image className='w-[46px]  hover:opacity-80 active:opacity-60 cursor-pointer h-[35px]' src={telegram} />
            </li>
            <li>
                <Image className='w-[46px] hover:opacity-80 active:opacity-60 cursor-pointer h-[35px]' src={email} />
            </li>
            <li>
                <Image className='w-[160px] cursor-pointer hover:opacity-80 active:opacity-60 h-[31px]' src={telNum} />
            </li>
        </ul>

        <button className='text-[14px] hover:opacity-80 active:opacity-60 bg-[#F05670] w-[186px] rounded-[15px] text-white font-bold h-[62px]'>НАЧАТЬ ПРОЕКТ</button>
      </div>
    </header>
  )
}

export default Header
