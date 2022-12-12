// App09.js

// import 
import React from "react";

// util 은 object 이다.
import util from "./my_modules/util";

import {num, name, isMan, myLongInformation as info} from './my_modules/member'

/*
import obj from "./your_modules";
import game from "./your_modules/Game";
import home from "./your_modules/Home";
import study from "./your_modules/Study";
*/

// 폴더 명으로 import 해서 사용하면 index.js 에서 export 해준 자원을 사용할 수 있다.
import modules from './your_modules';

const App = ()=>{

    // import 된 object 에 있는 함수 사용해보기
    util.drill("");
    util.sender("hi");

    console.log(num);
    console.log(name);
    console.log(isMan);
    console.log(info);

    modules.home();
    modules.game();
    modules.study();
    
    
    return(
        <div className="container">
            <h3>모듈 import, export 테스트</h3>

        </div>
    );
}

// export
export default App;