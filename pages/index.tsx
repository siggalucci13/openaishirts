import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [imagePrompt, setImagePrompt] = useState('Image prompt');
  const [shirtColor, setShirtColor] = useState('Shirt Color');

  const createShirt = async () => {
    console.log(imagePrompt);
    try {
      const res = await fetch(`http://localhost:3000/api/openAI?query=${imagePrompt}`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <div>
      <h1>Custom Shirt Designer</h1>
      <br />
      <form>
        <label htmlFor="imagePrompt">Image Prompt:</label>
        <input
          type="text"
          id="imagePrompt"
          value={imagePrompt}
          onChange={e => setImagePrompt(e.target.value)}
          required
          className="bordered-input"
        />
        <br />
        <br />
        <label htmlFor="shirtColor">Shirt Color:</label>
        <input
          type="text"
          id="shirtColor"
          value={shirtColor}
          onChange={e => setShirtColor(e.target.value)}
          required
          className="bordered-input"
        />
        <br />
        <br />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => createShirt()}>
          Create Shirt
        </button>
        <br />
        <br />
      </form>
      <img className="w-100 h-100" src="tshirt_blank.png" />
      <img src="{imageURL}" />
    </div>
  );
}
