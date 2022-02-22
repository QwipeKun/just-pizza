import React, { useState } from "react";

// class Catigories extends React.Component {

//   state = {
//     activeItem: -1,
//   }

//   onSelectItems = (index) => {
//     this.setState({
//       activeItem: index,
//     })
//   }

//   render() {

//     const { items, onClickItem } = this.props

//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItems(index)} key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Catigories({ items, onClickItem, allItemsTitle }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          {allItemsTitle}
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Catigories;
