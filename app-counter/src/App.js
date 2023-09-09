import React from "react";
import Header from './components/header/Header';
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";


function App() {
  // 1

  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
  const positive = array.filter(number => number >= 0);
  console.log(positive);


  // 2
  const messages = [
    { message: 'hello', error: true },
    { message: 'javascript', error: false },
    { message: 'expovisiov', error: true },
    { message: 'react', error: true },
    { message: 'angular', error: false },
    { message: 'es6', error: false },
  ];
  const filteredMessages = messages.filter(message => !message.error);
  console.log(filteredMessages);

  // 3
  const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];
  const modifiedWords = words.map(word => word.length < 5 ? '*' : word);
  console.log(modifiedWords);

  // 4
  const sendMessage = (message) => {
  };
  const half = (number) => number / 2;
  const showConsole = () => {
    console.log('Экспо');
  };
  const concatWords = (first, second) => first + second;

  // 5
  function justText() {
    return 'expo';
  }

  function logging(text) {
    console.log(text);
  }

  function add(x, y) {
    const z = 3;
    return z * x * y;
  }

  function onlyPositive(number) {
    if (number < 0) {
      return false;
    }
    return true;
  }





  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
