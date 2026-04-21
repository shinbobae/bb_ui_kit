import { style } from '@vanilla-extract/css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  padding: '20px',
});

export const card = style({
  overflow: 'hidden',
  width: '120px',
  boxShadow: '2px 4px 4px rgba(0,0,0,0.05)',
});

export const swatch = style({
  height: '80px',
  borderBottom: '1px solid #efefef',
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
