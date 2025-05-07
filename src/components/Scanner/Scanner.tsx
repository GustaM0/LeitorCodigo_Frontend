import { useEffect, useState } from 'react';
import './scanner.css'
import Quagga from '@ericblade/quagga2';
const Scanner = ({ detectedCode, closeScanner }: { detectedCode: (code: string) => void, closeScanner: () => void }) => {
    const [scannerOn, setScannerOn] = useState(false);
    const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]);
    const [selectedCamera, setSelectedCamera] = useState<string>("");


    const getCameras = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter((d) => d.kind === 'videoinput');
            setCameras(videoDevices);
        if (videoDevices.length > 0) {
            // Define a câmera selecionada como a primeira (pode mudar se necessário)
            // setSelectedCamera(videoDevices[0].deviceId);
        }
        } catch (err) {
            console.error('Erro ao listar câmeras:', err);
        }
    };

    useEffect(() => {
        if (scannerOn) {
            Quagga.init(
                {
                    inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#scanner") as HTMLElement,
                    constraints: {
                        // deviceId: undefined,
                        deviceId: selectedCamera !== "" ? selectedCamera : undefined,
                        facingMode: "environment",
                        // facingMode: selectedCamera === "" ? "environment" : undefined,
                        width: 1920,
                        height: 1080,
                    }
                    },
                    decoder: {
                    readers: ["ean_reader", "code_128_reader"] // Configs para a detecção do code
                    },
                    locate: true,
                    locator: {
                        halfSample: true,
                        patchSize: "medium", // x-small, small, medium, large, x-large
                        debug: {
                            drawBoundingBox: true,
                            showFrequency: true,
                            drawScanline: true,
                            showPattern: true
                        } as any
                    }
                },
                (err) => {
                    if (err) {
                        console.error("Erro ao iniciar o Quagga:", err);
                    return;
                    }
                        console.log("Scanner iniciado");
                    Quagga.start();
                }
            );
            Quagga.onDetected((result) => {
                const code = result.codeResult.code;
                // setDetectedCode(code as string);
                detectedCode(code as string);
                stopScanner();
                // Quagga.stop();
                // setScannerOn(false);
                console.log("Código Inserido:", code);
            });
        }
    }, [scannerOn]);
    // Use Effect ====================================================================
    useEffect(() => {
        getCameras();
        setScannerOn(true);
    }, [])

    // Scanner Options ===============================================================
    const restartScanner = () => {
        Quagga.stop();
        Quagga.start();
    }

    const stopScanner = () => {
        Quagga.stop();
        setScannerOn(false);
        closeScanner();
    }

    return (
        <>
        {scannerOn && (
            <div 
            className='scanner-container' 
            // style={{ width: '100%', height: '110px' }}
        >
            <div id="scanner"></div>
            <div className='w-full flex justify-between p-2'>
                <select name="camera" id="" className='' onChange={(e) => (setSelectedCamera(e.target.value), restartScanner())} value={selectedCamera}>
                    {cameras.length === 0 ? (
                        <option value="">Nenhuma câmera encontrada</option>
                    ) : (
                        <option value="">Selecione a câmera</option>
                    )}
                    {cameras.map((camera, index) => (
                        <option key={camera.deviceId} value={camera.deviceId}>
                            {camera.label || `Câmera ${index + 1}`}
                        </option>
                    ))}
                </select>
                <button
                    style={{  backgroundColor: 'var(--yellow--primary--color)', borderRadius: '50%' }}
                    className='cursor-pointer text-white flex items-center justify-center w-8 h-8'
                    onClick={stopScanner}
                >
                    X
                </button>
            </div>
        </div>
        )}
        </>
    )
}

export default Scanner
