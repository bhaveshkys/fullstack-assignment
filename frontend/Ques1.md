ques- How can you implement shared functionality across a component tree? 
ans - There are several ways to share functionality across a component tree like 
 lifting state, 
 context api, 
 using hooks and 
 using third party context management

I personally use lifting state  as it is the most simple to me. 
Lifting state means that for example if i need a varible in search bar but that variables value will effect searchbar parent component then we will initialize the variable in search bar parent component and pass it down as a prop to search bar.

When i have a share a functionality pretty deep inside the component tree then i use context api . usually it is used to share keys like user details and checking what is the role of the user
example of context  api.
const MyContext = React.createContext();

function ParentComponent() {
  const [sharedState, setSharedState] = useState('');

  return (
    <MyContext.Provider value={{ sharedState, setSharedState }}>
      <ChildComponent1 />
      <ChildComponent2 />
    </MyContext.Provider>
  );
}

function ChildComponent1() {
  const { sharedState } = useContext(MyContext);
  return <div>{sharedState}</div>;
}

function ChildComponent2() {
  const { setSharedState } = useContext(MyContext);
  return <button onClick={() => setSharedState('New State')}>Update State</button>;
}

Custom hooks are used to  extract and resuse statefull logic in the code multiple times. for example 
function useSharedState() {
  const [sharedState, setSharedState] = useState('');
  return [sharedState, setSharedState];
}

function Component1() {
  const [sharedState] = useSharedState();
  return <div>{sharedState}</div>;
}

function Component2() {
  const [, setSharedState] = useSharedState();
  return <button onClick={() => setSharedState('New State')}>Update State</button>;
}

Third Party state management like redux- used when application is very complex. it shares functionality in a more structured way
for example import { useSelector, useDispatch } from 'react-redux';

function MyComponent() {
  const sharedState = useSelector((state) => state.sharedState);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{sharedState}</div>
      <button onClick={() => dispatch({ type: 'UPDATE_STATE', payload: 'New State' })}>
        Update State
      </button>
    </div>
  );
}