import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Home from './components/Home';
import TypoGraphy from './components/TypoGraphy';
import Buttons from './components/Buttons';
import FormElements from './components/FormElements';
import RadioButtons from './components/RadioButtons';
import Tags from './components/Tags';
import Checkbox from './components/Checkbox';
import TabSection from './components/Tabs';
import Select from './components/Select';
function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Routes>  
        <Route path="/" element={<Home/>} />
        <Route path="/typography" element={<TypoGraphy/>} />
        <Route path="/elements/buttons" element={<Buttons/>} />
        <Route path="/elements/form_elements" element={<FormElements/>} />
        <Route path="/elements/checkbox" element={<Checkbox/>} />
        <Route path="/elements/radio_buttons" element={<RadioButtons/>} />
        <Route path="/elements/tabs" element={<TabSection/>} />
        <Route path="/elements/tags" element={<Tags/>} />
        <Route path="elements/select" element={<Select/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
