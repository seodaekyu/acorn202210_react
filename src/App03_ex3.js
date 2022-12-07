// App03_ex3.js

import FriendComponents from "./components/FriendComponent";
import { Component } from "react";

class App extends Component{
    state={
        friends:["김구라", "해골", "원숭이"]
    }

    render(){

        return(
            <div className="container">
                <h1>자식 component 사용 예제</h1>
                <FriendComponents friends={this.state.friends}
                    deleteClicked={this.deleteClicked}
                    updateClicked={this.updateClicked}/>
            </div>
        );
    }
    deleteClicked = (idx)=>{
        console.log(idx+" 인덱스의 아이템을 삭제 합니다.");
        // this.state.friends 배열에서 idx 인덱스를 제외한 새로운 배열을 얻어낸다.
        let newArray = this.state.friends.filter((item, index)=>{
            return index !== idx;
        });
        this.setState({friends:newArray});
    }
    updateClicked = (data)=>{
        // data 는 {index:xxx, newName:xxx} 모양의 object 이다.
        let newArray = this.state.friends.map((item, index)=>{ 
            return data.index === index ? data.newName : item; // 삼항연산자
        });

        let newArray2 = this.state.friends.map((item, index)=>{
            // 만일 수정할 인덱스 이면
            if(data.index === index){
                // 새로운 이름을 리턴해준다.
                return data.newName;
            }else{// 수정할 인덱스가 아니면
                // 원래 이름을 리턴해준다.
                return item;
            }
        });

        let newArray3 = this.state.friends.map((item, index)=> data.index === index ? data.newName : item); // 람다식

        this.setState({
            friends:newArray // newArray2, newArray3 도 가능하다.
        });
    }
}

export default App;