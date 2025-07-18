import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Head() {
    return (
<header style={{ padding: '1rem', backgroundColor: '#1f2125' }}>
<nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h2  style={titleStyle}>Plusgrade Rooms</h2>
  <div>
  </div>
</nav>
</header>
  )

}
const linkStyle = {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };
   const titleStyle = {
    color:  'brown',
   }
  
export default Head