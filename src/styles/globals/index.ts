import { createUseStyles } from 'react-jss';
import { colors } from '../colors';
import { spacing } from '../sizes';
import { body, h1, h2, h3, h4 } from '../types';

export const globalStyles = createUseStyles({
  '@global': {
    'html, body, #root': {
      margin: 0,
      padding: 0,
      '-webkit-font-smoothing': 'antialiased',
      scrollBehavior: 'smooth',
    },
    '#root': {
      backgroundColor: colors.white,
    },
    h1,
    h2,
    h3,
    h4,
    div: {
      fontWeight: 300,
    },
    p: {
      ...body,
      margin: `0 0 ${spacing.small} 0`,
      fontWeight: 300,
    },
    span: {
      ...body,
    },
    svg: {
    },
    a: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${spacing.small}`,
      margin: `0 0 ${spacing.small} 0`,
    },
    ul: {
      padding: `0 0 0 ${spacing.small}`,
      margin: `0 0 ${spacing.small} 0`,

      listStyleType: 'square',
    },
    li: {
      ...body,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },

    '.modal': {
      willChange: 'opacity',
      transition: 'opacity 250ms linear',
      opacity: '0',
    },
    '.modal:global(.modal-item--appearActive), .modal:global(.modal-item--appearDone), .modal:global(.modal-item--enterActive), .modal:global(.modal-item--enterDone)': {
      opacity: '1',
    },
    '.modal:global(.modal-item--exitActive), .modal:global(.modal-item--exitDone)': {
      opacity: '0',
    },
    '.modal-container': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.rdt_Table': {
      '& *': {
        ...body,
      },
    },
  },
  app: {
  },
});
