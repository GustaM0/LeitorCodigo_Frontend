
const TopBar = ({ image, text, width = 'w-100' }: { image?: string, text?: string, width?: string }) => {
    return (
        <div className="fixed flex top-0 left-0 w-full h-[120px] bg-white z-50 gap-7 leitor-header-box">  {/* Header fixo */}
            {image && <img src={image} alt="" className={`${width} h-auto`}/>}
            <span className="text-3xl">{text}</span>
        </div>
    )
}

export default TopBar
