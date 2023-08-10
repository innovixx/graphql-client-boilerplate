import { createUseStyles } from 'react-jss';
import { colors, maxContentWidth, spacing } from '../../../styles';

export const containerStyles = createUseStyles({
  container: {
    maxWidth: maxContentWidth,
    width: 'auto',
    height: 'auto',
    margin: '0 auto',
    backgroundColor: colors.white,
    padding: spacing.small,
  },
});
