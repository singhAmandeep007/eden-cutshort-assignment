import { breakPoints } from '../common';

export const theme = {
  ...breakPoints,
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    color: 'var(--color-primary-text)',
  },
  description: {
    fontSize: '1rem',
    fontWeight: 500,
    color: 'var(--color-primary-text-medium)',
  },
  primaryButton: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-primary-text-light)',
  },
};
