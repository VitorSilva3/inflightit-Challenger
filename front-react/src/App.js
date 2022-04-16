import React, { useEffect, useState } from 'react'
import './App.css';

export default function App() {  
  const [user] = useState();

  return (
    <div className="App">
      <p>Usuário: {user?.login}</p>
      <p>Biografia: {user?.bio}</p>
    </div>
  );
}