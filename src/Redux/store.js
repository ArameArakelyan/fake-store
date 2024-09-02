import { createStore } from "redux";

function adding(list, item) {
    let isThere = false
    let x = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === item.id) {
            isThere = true
            x = i
            break
        }
    }
    if (isThere) {
        list[x].count++
    } else {
        list.push({...item, "count":1})
    }
}
const store = createStore(
    function (state, action) {

        if (action.type === "ADD") { 
           adding(state.list, action.payload)
        }
        if (action.type === "DELETE") {
            return {
                "list":[]
            }
        }
        if (action.type === "FILTER") {
            let list = state.list.filter((el)=>el.count!==0)
            console.log(state.list);
            return{
                "list":[...list]
            }
        }
        return state
    },
    {
        "list": []
    }
)

export default store