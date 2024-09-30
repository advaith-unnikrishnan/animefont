"use client"

import React, { useState, useRef } from 'react';
import Image from "next/image";
import localFont from 'next/font/local';

// Load custom fonts
const narutoFont = localFont({ src: '../public/fonts/naruto.ttf', variable: '--font-naruto' });
const dragonBallFont = localFont({ src: '../public/fonts/dragonballz.ttf', variable: '--font-dragonball' });
const deathNoteFont = localFont({ src: '../public/fonts/deathnote.ttf', variable: '--font-deathnote' });
const onePieceFont = localFont({ src: '../public/fonts/onepiece.ttf', variable: '--font-onepiece' });
const avatarFont = localFont({ src: '../public/fonts/avatar.ttf', variable: '--font-avatar' });
const blackCloverFont = localFont({ src: '../public/fonts/blackclover.otf', variable: '--font-blackclover' });
const demonSlayerFont = localFont({ src: '../public/fonts/demonslayer.ttf', variable: '--font-demon' });
const jujutsuKaisenFont = localFont({ src: '../public/fonts/jujutsukaisen.ttf', variable: '--font-jujutsukaisen' });
const attackTitanFont = localFont({ src: '../public/fonts/attackontitan.ttf', variable: '--font-attacktitan' });

// Anime-inspired fonts
const animeFonts = {
  'Default': 'sans-serif',
  'Naruto': 'var(--font-naruto)',
  'Dragon Ball': 'var(--font-dragonball)',
  'Death Note': 'var(--font-deathnote)',
  'One Piece': 'var(--font-onepiece)',
  'Avatar': 'var(--font-avatar)',
  'Black Clover': 'var(--font-blackclover)',
  'Demon Slayer': 'var(--font-demon)',
  'Jujutsu Kaisen': 'var(--font-jujutsukaisen)',
  'Attack on Titan': 'var(--font-attacktitan)'
};

export default function AnimeFontConverter() {
  const [inputText, setInputText] = useState('');
  const [selectedFont, setSelectedFont] = useState('Default');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const outputRef = useRef(null);

  const handleCopy = () => {
    if (outputRef.current) {
      navigator.clipboard.writeText(outputRef.current.innerText)
        .then(() => alert('Text copied to clipboard!'))
        .catch(err => console.error('Failed to copy text: ', err));
    }
  };

  return (
    <div className={`container mx-auto p-4 max-w-3xl ${narutoFont.variable} ${dragonBallFont.variable} ${deathNoteFont.variable} ${onePieceFont.variable} ${avatarFont.variable} ${blackCloverFont.variable}${demonSlayerFont.variable} ${jujutsuKaisenFont.variable} ${attackTitanFont.variable}`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Anime Font Converter</h1>
      
      <div className="mb-4">
        <label htmlFor="inputText" className="block text-sm font-medium mb-2">Input Text:</label>
        <input
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter your text here"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Select Font:</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(animeFonts).map(([name, font]) => (
            <button
              key={name}
              onClick={() => setSelectedFont(name)}
              className={`h-auto py-4 px-2 border rounded ${selectedFont === name ? 'bg-blue-500 text-white' : 'bg-white'}`}
              style={{ fontFamily: font }}
            >
              <span style={{ fontSize: '1.25rem' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="colorPicker" className="block text-sm font-medium mb-2">Text Color:</label>
        <input
          id="colorPicker"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-full h-10"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="fontSizeSlider" className="block text-sm font-medium mb-2">Font Size: {fontSize}px</label>
        <input
          id="fontSizeSlider"
          type="range"
          min="8"
          max="72"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="outputText" className="block text-sm font-medium mb-2">Output Text:</label>
        <div className="relative">
          <div
            ref={outputRef}
            id="outputText"
            className="w-full min-h-[100px] p-4 border rounded-md break-words"
            style={{
              fontFamily: animeFonts[selectedFont],
              color: textColor,
              fontSize: `${fontSize}px`,
            }}
          >
            {inputText || 'Your text will appear here'}
          </div>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-gray-200 rounded"
            aria-label="Copy text"
          >
            <Image
              src="/copy-icon.svg"
              alt="Copy"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
}