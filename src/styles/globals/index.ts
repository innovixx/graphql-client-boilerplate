import { createUseStyles } from 'react-jss';
import { colors } from '../colors';
import { spacing } from '../sizes';
import { body, h1, h2, h3, h4 } from '../types';

export const globalStyles = createUseStyles({
  '@global': {
    '#root': {
      backgroundColor: colors.white,
    },
    '.modal': {
      opacity: '0',
      transition: 'opacity 250ms linear',
      willChange: 'opacity',
    },
    '.modal-container': {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
    },
    '.modal:global(.modal-item--appearActive), .modal:global(.modal-item--appearDone), .modal:global(.modal-item--enterActive), .modal:global(.modal-item--enterDone)': {
      opacity: '1',
    },
    '.modal:global(.modal-item--exitActive), .modal:global(.modal-item--exitDone)': {
      opacity: '0',
    },
    '.rdt_Table': {
      '& *': {
        ...body,
      },
    },
    a: {
      ...body,
    },
    div: {
      fontWeight: 300,
    },
    h1,
    h2,
    h3,
    h4,
    'html, body, #root': {
      '-webkit-font-smoothing': 'antialiased',
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },
    img: {
      height: 'auto',
      maxWidth: '100%',
    },
    li: {
      ...body,
    },

    ol: {
      margin: `0 0 ${spacing.small} 0`,
      padding: `0 0 0 ${spacing.small}`,
    },
    p: {
      ...body,
      fontWeight: 300,
      margin: `0 0 ${spacing.small} 0`,
    },
    span: {
      ...body,
    },
    svg: {
    },
    ul: {
      listStyleType: 'square',
      margin: `0 0 ${spacing.small} 0`,

      padding: `0 0 0 ${spacing.small}`,
    },
  },
  app: {
  },
});
