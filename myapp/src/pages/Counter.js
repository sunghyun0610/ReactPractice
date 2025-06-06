import React ,{useState}from 'react';

const Counter = () =>{
    
        const [num, setNumber] = useState(0); //0이라는 값을 기본값으로 갖는 변수 ,setNumber : num이라는 변수의 값을 변경시킬 수 있는 함수

        const increase = () => {
            setNumber(num +1);//반드시 set함수 이용해서 상태관리 해야함
        }

        const decrease = () =>{
            setNumber(num - 1);
        }
        return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>
                {num}
            </p>
        </div>
    );
}
export default Counter;