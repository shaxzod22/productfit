import Image from 'next/image'
import Desktop from './../assets/img/desktop.png'
import ToLeft from './../assets/img/toleft.png' 
import ToRight from './../assets/img/toright.png' 
const Slider = () => {
    return (
        <div className='flex gap-[5px] flex-col items-center'>
        <Image className='w-[780px] h-[487px]' src={Desktop} />
        <ul className='flex items-center gap-[100px]'>
        <li className='cursor-pointer active:opacity-60 mr-[55px]'>
        <Image src={ToLeft} />
        </li>
        <li className='w-[19px] hover:opacity-80 active:opacity-60 cursor-pointer rounded-full h-[19px] bg-[#1E959B]'></li>
    <li className='w-[19px] hover:bg-[#1E959B] active:opacity-60 cursor-pointer rounded-full h-[19px] bg-[#D7EFF0]'></li>
        <li className='w-[19px] hover:bg-[#1E959B] active:opacity-60 cursor-pointer rounded-full h-[19px] bg-[#D7EFF0]'></li>
        <li className='w-[19px] cursor-pointer rounded-full h-[19px] bg-[#D7EFF0] hover:bg-[#1E959B] active:opacity-60'></li>
        <li className='w-[19px] cursor-pointer rounded-full h-[19px] bg-[#D7EFF0] hover:bg-[#1E959B] active:opacity-60'></li>
        <li className='cursor-pointer hover:opacity-80 active:opacity-60 ml-[55px]'>
        <Image src={ToRight} />
        </li>
        </ul>
        </div>
        )
    }
    
    export default Slider
    