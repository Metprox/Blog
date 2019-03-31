import React, { Component } from 'react';
// import axios from 'Root/axios';
import cls from './App.scss';

import Resize from 'Components/common/Resize/Resize';
import Layout from 'Containers/Layout/Layout';
export default class App extends Component {
    render() {
        return (
            <Resize>
                <Layout />
            </Resize>
        );
    }
}
