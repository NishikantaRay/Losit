import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <Footer
      copyrightYear={new Date().getFullYear()}
      phoneNumbers={["+1 234 567 890", "+1 234 567 890"]}
      contactsDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." 
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi libero praesentium quia quos odit! Magni illum soluta quos maxime, similique laudantium aspernatur obcaecati velit amet cum. Numquam error quas dolorem!"/>
      
    </>
  );
}

export default App;
