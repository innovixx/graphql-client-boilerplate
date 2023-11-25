import { breakpoints } from '../breakpoints';

export const queries = {
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
  xs: `@media (max-width: ${breakpoints.xs}px)`,
};
