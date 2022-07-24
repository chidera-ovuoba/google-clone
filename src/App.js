import React,{useState} from 'react'
import Routes from './components/Routes';
const App = () => {
  const [themColor, setThemeColor] = useState(false);
  return (
    <div>
    <Routes/>
    </div>
  )
}

export default App