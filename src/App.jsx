import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.css'

function App() {
  const [count, setCount] = useState(0)


   // State to manage which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Function to toggle FAQ answer visibility
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Example FAQ data (you can hardcode or fetch this)
  const faqs = [
    {
      question: "What is Forex Trading?",
      answer: "Forex trading, also known as foreign exchange trading or FX trading, is the conversion of one currency into another. It's the largest financial market in the world.",
    },
    {
      question: "How do I get started?",
      answer: "To get started, you'll typically need to open an account with a forex broker, fund your account, and then use a trading platform to execute trades.",
    },
    {
      question: "Is Forex Fusion Pro suitable for beginners?",
      answer: "Yes, Forex Fusion Pro is designed to be user-friendly and includes resources to help both beginners and experienced traders.",
    },
    {
      question: "What kind of support is offered?",
      answer: "We offer 24/7 customer support via email, live chat, and a comprehensive FAQ section.",
    },
    // Add more FAQ items as needed
  ];


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    

{/* --- FAQ Section --- */}
      <section className="section-padded bg-light">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center">
            Find answers to common questions about Forex Fusion Pro.
          </p>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div
                  className={`faq-question ${openFaqIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                </div>
                {/* Use inline style for simplicity or toggle a class */}
                <div
                  className="faq-answer"
                  style={{ display: openFaqIndex === index ? 'block' : 'none' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- End FAQ Section --- */}
    </>
  );
}




export default App
