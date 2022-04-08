import React from "react";
import MenuBar from '../component/navigations/MenuBar';
import Footer from '../component/navigations/Footer';

const Layout = (props) => {
    return(
        <React.Fragment>
            <MenuBar />

            <main className="main-content">
                {props.children}
            </main>
        </React.Fragment>
    );
}
export default Layout;