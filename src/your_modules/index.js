// your_modules/index.js

// index.js 파일에서 필요한 모듈을 import 해서
import home from "./Home";
import game from "./Game";
import study from "./Study";

// object 에 담은 다음
let obj = {home, game, study};

// 한번에 default 로 export 해주면 사용할 때 폴더명으로 import 해서 편리하게 사용할 수 있다.
export default obj;