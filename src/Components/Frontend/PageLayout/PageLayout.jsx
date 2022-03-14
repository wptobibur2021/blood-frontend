import React from 'react';
import Navigation from "../Header/Navigation";

const PageLayout = ({children}) => {
    return (
        <div className="mainContainer">
            <Navigation></Navigation>
            {children}
        </div>
    );
};

export default PageLayout;