import React, { useState } from "react";

// class TodoList extends Component {
//   // refactor constructor function to modern syntax
//   // hooks instead of ref?
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
//     this.addItem = this.addItem.bind(this)
//   }
//   render () {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>            
//             {/* <input ref={(a) => this._inputElement = a }
//             placeholder="enter record"></input> */}
//             <input placeholder="enter record"></input>
//             <button type="submit">add</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }



// export default TodoList;

export function TodoList(props) {
  const [toListenTos, setToListenTos] = useState([])

  function createRecord(record) {
    const newToListenTos = [...toListenTos, { record }]

    setToListenTos(newToListenTos)

    console.log(newToListenTos)
  }

  function deleteRecord(index) {
    const newToListenTos = [...toListenTos]
    newToListenTos.splice(index, 1)
    setToListenTos(newToListenTos)
  }

  return <>

  </>
}