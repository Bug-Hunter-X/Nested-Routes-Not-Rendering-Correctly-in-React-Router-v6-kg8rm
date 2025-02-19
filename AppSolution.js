```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <a href="/about">About</a>
      </nav>
    </div>
  );
}

function About() {
  return <h1>About</h1>;
}

function NoMatch() {
  return <h1>404 Not Found</h1>;
}
export default App;
```