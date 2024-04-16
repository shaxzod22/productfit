import Image from "next/image"
import OpenGift from './../assets/img/opengiftImg.svg'

const Opengift = () => {
    return (
        <div className="flex justify-center gap-[110px] mx-auto w-[1400px] mt-[70px]">
        <Image className="w-[478px] h-[606px]" src={OpenGift}/>
        <div className="mt-[140px] max-w-[608px]">
        <h2 className="text-[32px] mb-[27px] font-bold text-[#1E959B]">OpenGift – это система монетизации OpenSource-проектов на основе блокчейна hyperledger fabric.</h2>
        <p className="mb-[15px] text-[#3C3C3C] text-[14px]">К разработке платформы было привлечено более 5000 разработчиков. Ее интегрировали с сетью блокчейнов. Альфа-версия была запущена в январе 2018 года. OpenGIft был создан для решения проблем, унаследованных от разработки программного обеспечения. Платформа позволяет компаниям разделять расходы на программное обеспечение, а управление проектами является основной функцией, помогающей в сотрудничестве.</p>
        <p className="text-[#3C3C3C] text-[14px]">Для монетизации используются смарт-контракты, чтобы создать пассивный, периодический потенциал дохода. Уникальность проекта в видении на разработку с открытым исходным кодом.</p>
        </div>
        </div>
        )
    }
    
    export default Opengift
    