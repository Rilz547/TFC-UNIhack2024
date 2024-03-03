import './ResPhotos.scss';

const ResPhotos = (props) => {
    return (
        <div className="ctr-accordion">
            <div className="tab">
                <img
                    src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/3f16a407-6f66-45e9-a6f3-f093636544d1.jpg"
                    alt=""
                />
            </div>
            <div className="tab">
                <img
                    src="https://www.toprydecity.com.au/wp-content/uploads/2021/10/Retailer_Guzman-2-640x427.jpg"
                    alt=""
                />
            </div>
            <div className="tab">
                <img
                    src="https://www.darlingharbour.com/getmedia/50e39609-ba7b-4f64-8f0f-8c7d2f4600fd/guzman-y-gomez-3.jpg"
                    alt=""
                />
            </div>
            <div className="tab">
                <img
                    src="https://assets-global.website-files.com/5fc47c87666dc0ed91285dac/646afa2aa732e594d5907e22_menu_burrito-bowl.jpeg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ResPhotos;
