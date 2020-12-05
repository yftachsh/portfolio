import React from 'react';

import ReferenceCircle from './components/reference-circle/reference-circle';
import {
    GitHub,
    Twitter,
    Facebook,
    Instagram,
    Mail,
} from 'react-feather';

function App() {
    return (
        <div className="app">
            <ReferenceCircle references={[
                {
                    link: 'https://github.com/yftachsh',
                    icon: GitHub,
                },
                {
                    link: 'https://twitter.com/yftachsh',
                    icon: Twitter,
                },
                {
                    link: 'https://www.facebook.com/yftach.shmaryahu.5/',
                    icon: Facebook,
                },
                {
                    link: 'https://www.instagram.com/yftachsh/',
                    icon: Instagram,
                },
                {
                    link: 'mailto:yftachshm@gmail.com',
                    icon: Mail,
                    newPage: false
                },
            ]} />
        </div>
    );
}

export default App;
