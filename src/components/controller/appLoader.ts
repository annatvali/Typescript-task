import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '082ab5e6ef1c4b9f83b794bb4a598ea9',
        });
    }
}

export default AppLoader;
