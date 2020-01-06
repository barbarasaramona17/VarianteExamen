import React from 'react';
import NavBar from './../navbar/NavBar';

export class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );
    }
}

export default MainLayout;