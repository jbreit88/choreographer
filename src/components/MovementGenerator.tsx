// src/components/MovementGenerator.tsx
import { useState } from 'preact/hooks';
import Movement from './Movement';
import PositionChange from './PositionChange';

const MOVEMENTS = [
  'Lead Saida',
  'Follow Saida',
  'Box/Around the world',
  "Crusamento/Lead's Opening",
  'Estrella',
  'Estrella directo',
  'Estrella slow motion',
  'Estrella 180',
  'Retrocesso 180',
  'Retrocesso 90',
  'Retrocesso 270',
  'Rule of three',
  'Casamento',
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function MovementGenerator() {
  const [count, setCount] = useState<number>(1);
  const [results, setResults] = useState<string[]>([]);

  const handleGenerate = () => {
    const generated = Array.from({ length: count }, () => getRandomItem(MOVEMENTS));
    setResults(generated);
  };

  const handleReset = () => {
    setResults([]);
  };

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        marginTop: '2rem',
        maxWidth: '500px',
      }}
    >
      <h2>Choreography Generator</h2>

      <label htmlFor="movement-count">Number of movements:</label>
      <input
        id="movement-count"
        type="number"
        min="1"
        value={count}
        onInput={(e) => setCount(parseInt((e.target as HTMLInputElement).value || '1'))}
        style={{ marginLeft: '0.5rem', width: '60px' }}
      />

      <button onClick={handleGenerate} style={{ marginLeft: '1rem' }}>
        Generate
      </button>

      <button
        onClick={handleReset}
        style={{
          marginLeft: '1rem',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '0.25rem 0.75rem',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>

      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {results.map((movement, index) => (
          <div key={index}>
            <Movement movement={movement} />
            {index < results.length - 1 && <PositionChange />}
          </div>
        ))}
      </div>
    </div>
  );
}
