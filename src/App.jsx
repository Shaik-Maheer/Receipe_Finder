// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Blog from './pages/Blog';
// import Recipes from './pages/Recipes';
// import Favorites from './pages/Favorites';
// import ContactUs from './pages/ContactUs';
// import TasteOfFood from './components1/TasteOfFood'; // Import TasteOfFood


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/recipes" element={<Recipes />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/recipes" element={<TasteOfFood />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// {/* <Route path="/" element={<Recipes />} /> 
// <Route path="/recipes/:id" element={<RecipeDetails />} />  */}


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import ContactUs from './pages/ContactUs';
import TasteOfFood from './components1/TasteOfFood';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="taste-of-food" element={<TasteOfFood />} /> */}
       
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
      
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
