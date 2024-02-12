import { useState } from 'react';
import './App.css';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [nextPressed, setNextPressed] = useState(false);
  const [dinnerPressed, setDinnerPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleDinnerClick = () => {
    setDinnerPressed(true);
  };

  const handleNextClick = () => {
    const userAnswer = prompt("When did we get together? date format day/month/year");
    if (userAnswer === "20/11/2021") {
      setNextPressed(true);
    } else {
      alert("Please input the correct anniversary before proceeding.");
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE BABY",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to jerald's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#c3b1e1]">
      {yesPressed ? (
        nextPressed ? (
          <>
            <div className='flex h-full items-center flex-col'>
              {dinnerPressed ? (
                <>
                <span className='text-2xl font-extrabold mt-4'>Dinner Plan</span>
                <span className='text-2xl font-bold'>We will be going to NOX - Dine in the Dark</span>
                <img src='https://lh3.googleusercontent.com/p/AF1QipPzM3bo1fXERL8_6FLdDyaVhWvNwvpn_vbdV5CE=s680-w680-h510' alt='dinner' 
                className='w-[900px] mt-4'/>
                <span className='text-2xl font-bold mt-4'>Our Reservation for this place is at 8PM</span>
                <span className='text-2xl font-bold mt-4'>What to wear. (Just a suggestion) BLACK DRESS AND COMFY SHOE OR HEEL</span>
                </>
              ) : (
                <>
                <span className='text-2xl font-extrabold mt-4'>Activity</span>
                <span className='text-2xl font-bold'>We will be going to Kulnari Mystery Golf for our date!!! (Second time the charm)</span>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/5b/b2/e4/vault-at-kulnari-mystery.jpg?w=1200&h=-1&s=1' alt='golf' 
                className='w-[900px] mt-4'/>
                <a href='https://www.kulnari.com/' className='mt-4 font-bold underline'>https://www.kulnari.com/</a>
                <span className='text-2xl font-bold mt-4'>We can meet at Raffles Place MRT at 5pm before making our way there</span>
                <div className="my-4 text-2xl font-bold">Click Next to see the dinner plan</div>
                <button className='font-bold bg-white p-2 rounded-xl' onClick={() => handleDinnerClick()}>Next</button>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt='gif' />
            <div className="my-4 text-4xl font-bold">YAYYYYYY!!! I LOVE YOU!!!! ❤️</div>
            <div className="my-4 text-2xl font-bold">Click Next to see date itinerary</div>
            <button className='font-bold bg-white p-2 rounded-xl' onClick={() => handleNextClick()}>Next</button>
          </>
        )
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt='gif'
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
