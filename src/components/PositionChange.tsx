// src/components/PositionChange.tsx
import { useState } from 'preact/hooks';

const POSITION_CHANGE = [
  'neutral',
  'lead front shadow',
  'follow front shadow',
  "follow's left L",
  "follow's right L",
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function PositionChange() {
  const [position, setPosition] = useState<string | null>(null);

  const handleSelect = () => {
    const random = getRandomItem(POSITION_CHANGE);
    setPosition(random);
  };

  const handleRemove = () => {
    setPosition(null);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '0.25rem 0',
      }}
    >
      {!position ? (
        <button
          onClick={handleSelect}
          title="Insert position change"
          style={{
            fontSize: '1.5rem',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px dashed #aaa',
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#555',
            marginLeft: '1rem',
          }}
        >
          +
        </button>
      ) : (
        <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <div
          style={{
            backgroundColor: '#a8a5a5',
            border: '1px solid #bbb',
            borderRadius: '8px',
            padding: '0.75rem 1rem',
            textAlign: 'center',
            fontStyle: 'italic',
            color: 'black',
          }}
        >
          Position Change: {position}
        </div>
        <button
          onClick={handleRemove}
          title="Remove position change"
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            color: '#c00',
            fontSize: '0.8rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          }}
        >
          ❌
        </button>
      </div>
      )}
    </div>
  );  
}
