import React from "react";

const Header = React.memo((props) => (
    <header className="bg-header">
        <h1 className="text header-title">
            JOB BOARD</h1>
        <div className="overlay" />
        <div className="bg-image" />
    </header>
));

export default Header;
