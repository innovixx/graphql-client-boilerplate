import { createUseStyles } from 'react-jss';
import { colors, maxContentWidth, spacing } from '../../../styles';

export const containerStyles = createUseStyles({
  container: {
    backgroundColor: colors.white,
    height: 'auto',
    margin: '0 auto',
    maxWidth: maxContentWidth,
    padding: spacing.small,
    width: 'auto',
  },
});
