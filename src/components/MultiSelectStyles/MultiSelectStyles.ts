export default {
    control: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--color-secondary-background)',
        padding: '5px',
        borderRadius: '12px',
        ':hover': {
            border: '2px solid var(--color-primary)',
        }
    }),
    menu: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--color-secondary-background)',
        color: 'var(--color-primary)',
    }),
    option: (provided: any) => ({
        ...provided,
        backgroundColor: 'var(--color-secondary-background)',
        color: 'var(--color-primary)',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'var(--green--terciary--color)',
            color: 'white'
        }
    }),
}