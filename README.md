<br/>

### React Class VS Hooks 비교
 
<br/>

---

<br/>

[클래스형 컴포넌트 VS 함수형 컴포넌트]

리액트 컴포넌트는 클래스형 컴포넌트와 함수형 컴포넌트로 나뉜다.
기존의 개발방식은 대체로 함수형 컴포넌트를 주로 사용하되, state나 Life Cycle method를 사용해야 할때에만 클래스형 컴포넌트를 사용하는 방식이었다.
이유는 클래스형 컴포너트가 상대적으로 단점을 가지고 있기 때문이다. 

 
<br/>

[클래스형 컴포넌트의 단점]
1. constructor, this, binding 등 지켜야 할 규칙이 많아 코드가 길고 복잡.
2. 로직 재사용이 어려울때가 있다. 
    클래스형 컴포넌트에서는 HOC(Hight Order Components)로 컴포넌트 자체를 재사용 할 수는 있지만, 
    부분적인 DOM관련처리나 API사용 및 state를 다루는 로직에 있어서는 경우에 따라 같은 로직을 2개이상의 life cycle method에 중복해서 넣어야하는 등 재사용에 재약이 따른다.
    반면, Hooks를 활용한 함수현 컴포넌트에서는 원하는 기능을 함수로 만든 후(hook) 필요한 곳에 훅 집어 넣어주면 되기 때문에 재사용이 가능하다. 

<br/>

[Hooks의 등장]

  클래스 컴포넌트의 단점들에도 불구하고 그동안 클래스형 컴포넌트를 사용했던 이유는 위에서 언급했듯 state관리와 Life cycle method의 사용때문이다. 클래스의 힘을 빌려야만 React가 원활하게 작동할 수 있었던 것이다.

  그런데 hooks의 등장으로 인해, 함수형 컴포넌트에서도 이러한 클래스형 컴포넌트의 작업들을 할 수 있게 되었다.
  (클래스형의 단점까지 보완하면서 말이다.)

<br/>

---

<br/>

[Hooks 내장 API]

1. useState
    useState는 함수형 컴포넌트에서 state를 가질 수 있게 하는 Hook이다.
2. useEffect
    useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook이다.
    클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방하다. 
    
    useEffect를 마운트 될 때만 실행하고 싶을 경우에는 두번째 파라미터에 비어있는 배열을 넣어주면, 처음에만 발생하고 그 이후 랜더링이 될 때에는 발생하지 않는다. 
    
         useEffect(() => {
          console.log('랜더링~');
        },[]);

    그리고 특정 값이 없데이트 될 때만 실행 하고 싶을 때는 두번째 파라미터에 [특정값]을 넣어주면 된다.

<br/>

3. useRef
    useRef 를 사용하여 ref 를 설정하면, useRef 를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르키게 된다.
    이벤트를 발생했을 때 e.target.value로 해당 값을 가져오는 방법을 useRef를 사용하여 값을 가져 올 수 있다.
    
        function App() {
        const textRef = useRef();
        const changeE = (e)=>{
          let eValue = e.target.value;
          let refValue = textRef.current.value;
          console.log(eValue,refValue);
        }
        return (
          <div>
            <input type = "text" ref= {textRef} onChange = {changeE}></input>
          </div>
        );
       }
       export default App;





<br/>

---

<br/>

[참고문헌]
코드 : https://moonformeli.tistory.com/26?category=703900
문서 : https://codingbroker.tistory.com/23
