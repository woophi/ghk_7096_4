import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  border: '0.2px solid #F2F3F5',
  backdropFilter: 'blur(4px)',
  boxShadow: '4px 4px 7.2px 0px #FFFFFF40 inset',
  background: '#F2F3F5',
});

const box2 = style({
  backgroundColor: '#F2F3F5',
  borderRadius: '1rem',
  paddingLeft: '1rem',
});

const rowSb = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  box2,
  rowSb,
};
