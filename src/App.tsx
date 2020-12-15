import React from 'react';

import PageTitle from './components/page-title/page-title';
import TiltedButton from './components/tilted-button/tilted-button';

import './App.scss';

const App = () => (
    <div className="app">
        <span className="title-wrapper">
            <PageTitle>yftach shmaryahu</PageTitle>
        </span>
        <TiltedButton link='#' text='See More' />
    </div>
)

export default App;
