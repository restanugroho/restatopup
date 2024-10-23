const PrimaryButton = ({
    className = '',
    disabled,
    children,
    ...props
}) => {
    return (
        <button
            {...props}
            className={
                ` ${
                    disabled && 'opacity-50'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default PrimaryButton