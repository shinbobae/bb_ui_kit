import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '16px',
  padding: '20px',
});

export const card = style({
  border: '1px solid #eee',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
});

export const swatch = style({
  height: '80px',
  width: '100%',
});

export const info = style({
  padding: '8px',
  backgroundColor: '#fff',
});

export const label = style({
  fontSize: '12px',
  fontWeight: 'bold',
  margin: '0 0 4px 0',
});

export const value = style({
  fontSize: '10px',
  color: '#666',
  textTransform: 'uppercase',
});
