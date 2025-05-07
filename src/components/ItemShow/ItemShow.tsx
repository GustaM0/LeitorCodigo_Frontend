import './itemShow.css'
import { useState } from 'react'
// import LogoMl from '../../assets/imgs/ml_logo.png'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { IonIcon } from '@ionic/react'
import { openOutline } from 'ionicons/icons'

interface CompareDataProps {
    compareData: {
        id: string;
        product: string;
        value1: number;
        value2: number;
        link: string;
        pictures: { url: string }[];
        success: boolean;
    }
}

const ItemShow = ({compareData}: CompareDataProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <>
            <div className='mb-3 w-full flex justify-between'>
                <span className='text-xl font-bold'>Resumo do Produto</span>
                {/* <img src={LogoMl} style={{ width: '150px' }}/> */}
            </div>
            {!compareData.success ? 
                (<div>
                    <p className='text-red-500 font-bold underline'><a href="https://cosmos.bluesoft.com.br/" target="_blank">Produto não encontrado - Bluesoft Cosmos</a></p>
                </div>) : (
                    <>
                        <div className="flex items-center">
                            <p className='mb-1.5 text-md font-bold'>Página Cosmos Bluesoft </p>
                            <a className='text-blue-500' href={compareData.link} target='_blank'><IonIcon icon={openOutline} style={{fontSize: '24px', '--ionicon-stroke-width': '40px', marginLeft: '5px'}} /></a>
                        </div>
                        <p className='text-md font-bold'>Código GTIN/EAN: <span className='font-normal'>{compareData.id}</span></p>
                        <p className='text-md font-bold'>Descrição do Produto: <span className='font-normal'>{compareData.product}</span></p>
                        <p className='text-md font-bold'>Valor Min: <span className='font-normal'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(compareData.value1)}</span></p>
                        <p className='text-md font-bold'>Valor Max: <span className='font-normal'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(compareData.value2)}</span></p>
                        
                        <div className="navigation-wrapper">
                            {compareData.pictures?.length > 0 && (
                                <div ref={sliderRef} className="keen-slider">
                                {compareData.pictures?.map((picture: { url: string }, index: number) => (
                                    <div key={index} className="keen-slider__slide rounded-lg flex items-center justify-center">
                                        <img src={picture.url} style={{ width: 'auto', height: '400px' }} alt="Imagem do produto" />
                                    </div>
                                ))}
                            </div>
                            )}
                            {loaded && instanceRef.current && (
                                <>
                                    <Arrow
                                        left
                                        onClick={(e: any) =>
                                            e.stopPropagation() || instanceRef.current?.prev()
                                        }
                                        disabled={currentSlide === 0}
                                    />
                                    <Arrow
                                        onClick={(e: any) =>
                                            e.stopPropagation() || instanceRef.current?.next()
                                        }
                                        disabled={
                                            currentSlide ===
                                            instanceRef.current.track.details.slides.length - 1
                                        }
                                    />
                                </>
                            )}
                        </div>
                    </>
                )
            }
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </>
    )
}

function Arrow(props: any) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}


export default ItemShow
