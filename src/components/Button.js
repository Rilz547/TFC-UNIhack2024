import './Button.scss';

function Button(props) {
    const {
        onClick,
        buttonText,
        width = '100px',
        height = '40px',
        colour = '#FAF0CA',
        titleContent,
        disabled,
    } = props;

    return (
        <>
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
        </>
    );
}

export default Button;
