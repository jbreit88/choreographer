// src/components/Movement.tsx
import { useState } from 'preact/hooks';

const ENHANCEMENTS = [
  'slow motion',
  'speed up',
  'leg lift',
  'foot slide',
  'reverse movement',
  'play with lines',
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface MovementProps {
  movement: string;
}

export default function Movement({ movement }: MovementProps) {
  const [enhancement, setEnhancement] = useState<string | null>(null);

  const handleAddEnhancement = () => {
    const newEnhancement = getRandomItem(ENHANCEMENTS);
    setEnhancement(newEnhancement);
  };

  return (
    <div
      style={{
        border: '1px solid #888',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        backgroundColor: '#f9f9f9',
        color: 'black',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div style={{ fontWeight: 'bold' }}>{movement}</div>

      {enhancement && (
        <div style={{ marginTop: '0.5rem', color: '#444' }}>
          ➕ <em>{enhancement}</em>
        </div>
      )}

        <button
        onClick={handleAddEnhancement}
        title="Add enhancement"
        style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            cursor: 'pointer',
            backgroundColor: '#e0e0e0',
            border: 'none',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            color: 'black',
        }}
        >
        +
        </button>
    </div>
  );
}
