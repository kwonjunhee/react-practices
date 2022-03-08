// 어플리케이션 정의
import './assets/scss/App.scss';

const App = function() {
    const App = document.createElement("h1");
    App.className='Header';
    App.textContent = "Hello Webpack";
    return App;
};

export { App };