import React from 'react';

const Child1 = (props) => {

  let {productName, option, price} = props;
  return(
    <>
      <h4>Child1</h4>
      <ul className='info'>
        <li>메뉴명 : {productName} (App.js)</li>
        <li>옵션 : {option} (PropsEx)</li>
        <li>price : {price} (PropsEx에서 App.js 값 가공)</li>
      </ul>
    </>
  )
  
}

const Child2 = (props) => {

  let {productName, addMenu, price} = props;
  return(
    <>
      <h4>Child2</h4>
      <ul className='info'>
        <li>메뉴명 : {productName} (App.js)</li>
        <li>추가메뉴 : {addMenu} (PropsEx)</li>
        <li>price : {price} (PropsEx에서 App.js 값 가공)</li>
      </ul>
    </>
  )
}


const PropsEx3 = (props) => {
  
  let {productName,price} = props;
  // App.js에서 전달받은 값을 Child1/2에 다시 전달
  // -> Props Drilling
  return(
    <>
      <Child1 productName={productName} 
              option='치즈'
              price ={Number(price) + 1000} />
      <Child2 productName={productName}
              addMenu='김밥 한줄'
              price = {Number(price) + 3000 }/>
    </>
  )
}

export default PropsEx3;