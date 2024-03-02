import './Button.scss';

function Button(props) {
    const {
        onClick,
        buttonText,
        width = '100px',
        height = '40px',
        colour = '#FAF0CA',
        titleContent,
        disabled = false,
    } = props;

    return (
        <>
            <div>
                {disabled && (
                    <div
                        className="button"
                        onClick={onClick}
                        style={{
                            width: width,
                            height: height,
                            background: colour,
                            titleContent,
                            backgroundColor: 'lightgrey',
                            pointerEvents: 'none',
                        }}
                    >
                        <div>{titleContent && titleContent}</div>
                        <div>{buttonText && buttonText}</div>
                    </div>
                )}
                {!disabled && (
                    <div
                        className="button"
                        onClick={onClick}
                        style={{
                            width: width,
                            height: height,
                            background: colour,
                            titleContent,
                        }}
                    >
                        <div>{titleContent && titleContent}</div>
                        <div>{buttonText && buttonText}</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Button;
