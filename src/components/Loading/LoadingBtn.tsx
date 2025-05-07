import './loading.css'
const LoadingBtn = () => {
    return (
        <div className="custom-loader-default">
            {/* <div className="custom-loader"></div> */}
            <button className="loader__btn">
                <div className="loader"></div>
                Carregando...
            </button>
        </div>
    )
}

export default LoadingBtn
