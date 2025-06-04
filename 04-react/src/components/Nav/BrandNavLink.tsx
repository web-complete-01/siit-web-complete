import { NavLink, type NavLinkProps } from 'react-router';
import clsx from 'clsx';

import styles from './Nav.module.css';

type BrandNavLinkProps = Omit<NavLinkProps, 'className'> & {
  className?: string;
};

export function BrandNavLink({ className, ...props }: BrandNavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(className, { [styles.active]: isActive })
      }
      {...props}
    />
  );
}

// React.createElement(NavLink, {
//   className:{({isActive}) => isActive ? styles.active : ''},
//  ...props
// });
