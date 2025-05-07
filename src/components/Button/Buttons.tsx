import './buttons.css'

const buttonCodes = {
    '1': 'button-code1',
    '2': 'button-code2',
    '3': 'button-code3',
    '4': 'button-code4',
    '5': 'button-code5',
    '6': 'button-code6',
    '7': 'button-code7',
    '8': 'button-code8',
} as const;


type ButtonType = keyof typeof buttonCodes; // Pega o tipo das chaves do objeto

const Buttons = ({ buttonCode = '1', text = '', onClick }: { buttonCode: ButtonType; text?: string; onClick: () => void }) => {
    return (
        <>
            {buttonCode === '1' && (
                <div className={`${buttonCodes[buttonCode]}`}>
                    <button className="custom-button text-md bg-clip-text cursor-pointer" onClick={onClick}>{text}</button>
                </div>
            )}
                        
            {buttonCode === '2' && (
                <div className={`${buttonCodes[buttonCode]}`}>
                    <button className="custom-button" onClick={onClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50px"
                            height="50px"
                            viewBox="0 0 24 24"
                            className="custom-icon"
                            >
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="var(--color-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="var(--color-secondary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"/></svg>
                        </svg>
                        {text}
                    </button>
                </div>
            )}
            {/* Botao Mercado Livre */}
            {buttonCode === '3' && (
                <div className={`${buttonCodes[buttonCode]}`}>
                    <button className="button" onClick={onClick}>
                        <img src="./src/assets/icons/icon_mercado_livre.svg" className="w-10" alt="" />
                        Continue com Mercado Livre
                    </button>
                </div>
            )}
        </>
    )
}

export default Buttons;
