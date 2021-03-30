import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Plugins } from '@capacitor/core';
const { App: CapApp } = Plugins;
const { Browser } = Plugins;
const AppUrlListener = () => {
    console.log('Native: Into AppUrlListener');
    let history = useHistory();
    useEffect(() => {
        console.log('Native: Into useEffect');
        CapApp.addListener('appUrlOpen', (data) => {
            console.log(`Native: Into appUrlOpen ${data.url}`);
            Browser.open(data.url);
            // Example url: https://beerswift.app/tabs/tab2
            // slug = /tabs/tab2
            // const slug = data.url.split('.io').pop();
            // if (slug) {
            //     console.log(`Native: Into appUrlOpen: pushing ${slug}`);
            //     history.push(slug);
            // }
            // If no match, do nothing - let regular routing
            // logic take over
        });

        console.log(`Registering appStateChange`);
        CapApp.addListener('appStateChange', (state) => {
            console.log(`In appStateChange`);
        })

    }, []);

    return null;
};

export default AppUrlListener;