// 어플리케이션 정의
import './assets/css/App.css';

const App = function() {
    const App = document.createElement("h1");
    App.className='Header';
    App.textContent = "Hello Webpack";
    return App;
};

export { App };