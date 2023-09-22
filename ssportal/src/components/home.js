import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <>
    <main className='home'>
    <button className="buttn-test" onClick={() => {
      navigate("/quizhome");
    }}>
       <a> TEST YOURSELF NOW!! </a>
      </button>
    </main>
    </>
  );
}

export default Home;
