function Restaurant(props) {
    const { heading } = props;

    return (
        <>
            <div>
                <h1>{heading && heading}</h1>
            </div>
        </>
    );
}

export default Restaurant;
