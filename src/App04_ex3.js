// App04_ex3.js

import { Component } from "react";

class App extends Component{
    state={
        menu:[
            {id:1, name:"김밥", checked:false, list:""},
            {id:2, name:"라면", checked:false, list:""},
            {id:3, name:"떡볶이", checked:false, list:""},
            {id:4, name:"만두", checked:false, list:""},
            {id:5, name:"우동", checked:false, list:""}
        ],
        list2:[]
    }

    render(){

        const newArray = this.state.menu.map((item)=>{
            // item은 {id:x, name:x} 형태의 object이다.
            return <label key={item.id}><input type="checkbox" checked={item.checked} onChange={(e)=>{
                let array = this.state.menu;
                array[item.id-1].checked = e.target.checked;
                this.setState({
                    menu:array
                });
                if(item.checked === true){
                    array[item.id-1].list = <li key={item.id}>{item.name}</li>;
                }else{
                    array[item.id-1].list = "";
                }
                
                let array2 = this.state.list2;
                array2[item.id-1] = array[item.id-1].list
                this.setState({
                    menu:array,
                    list2: array2
                });
            }
            }/>{item.name}</label>;
        });

        return(
            <div className="container">
               <h3>먹고 싶은 분식 메뉴를 체크하세요</h3>
               {newArray}
               <h3>선택된 메뉴 목록입니다.</h3>
               <ul>
                   {this.state.list2}
               </ul>
            </div>
        );
    }
}
export default App;