import { VariantType, useSnackbar } from 'notistack';


export const useSnackBarV1 = () => {
    const { enqueueSnackbar } = useSnackbar();
    const showMessage = (message: string, timeout: number = 1, variant: VariantType = 'default', margin: boolean = true) => {
        enqueueSnackbar(message, {
            variant,
            autoHideDuration: timeout * 1000,
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
            style: { marginBottom: margin ? '50px' : '0px' },
        });
    };
    return showMessage;
};
