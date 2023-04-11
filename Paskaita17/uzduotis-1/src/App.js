import './App.css';
import CountWrapper from './components/CountWrapper/CountWrapper';
import Counter1 from './components/Counter1/Counter1';
import Counter2 from './components/Counter2/Counter2';

function App() {
  return (
    <div>
      <CountWrapper
        render={(count, increment) => {
          return <Counter1 count={count} increment={increment} />;
        }}
      />
      <CountWrapper
        render={(count, increment) => {
          return <Counter2 count={count} increment={increment} />;
        }}
      />
    </div>
  );
}

export default App;
