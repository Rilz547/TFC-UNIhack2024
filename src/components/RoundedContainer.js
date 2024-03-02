import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './RoundedContainer.scss';

function Component(props) {
    const { heading, content, logo, description, style, route } = props;

    const location = useLocation();

    const isDashboardRoute = location.pathname === '/restaurant';

    return (
        <>
            {isDashboardRoute ? (
                <div
                    className="container-wrapper"
                    style={style}
                    // onClick={handleClickOpen}
                >
                    <div>
                        {logo && <img src={logo} alt="" className="logo" />}
                    </div>
                    <div>
                        <div className="heading">{heading && heading}</div>
                        <div className="content">{content && content}</div>
                    </div>
                </div>
            ) : (
                <Link to={route} style={{ textDecoration: 'none' }}>
                    <div className="container-wrapper" style={style}>
                        <div>
                            {logo && <img src={logo} alt="" className="logo" />}
                        </div>
                        <div>
                            <div className="heading">{heading && heading}</div>
                            <div className="content">{content && content}</div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Component;
