import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

function App() {
    return <HashRouter>
        <Navigation/> {/* about 이라는 path로 가면 About이라는 component를 보여줌 */}
        {/* exact={true}를 하는 이유
            그냥 path="/"를 하면 라우터가 url을 인식하면서
            /가 들어간 모든 라우터를 보여주기 때문에 오직 "/" 만 들어간 라우터를 연결하겠다를 의미 */
        }
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
}

export default App;