/* =============================================================
   KeyButton —  done. A button shaped like a keyboard key.

   Rests raised out of its slot, pops further out on hover, slams
   down flush when pressed. All CSS — see keycap.css.

   Note there is no useState here at all. Hover and press are not
   application state; the browser already tracks them as :hover and
   :active. Reaching for useState here would be 20 lines that work
   worse. State goes in React, interaction feel goes in CSS.
   ============================================================= */

import '../styles/keycap.css';

export default function KeyButton({
  as = 'button', // 'button' for actions, 'a' for links
  variant = 'gold', // 'gold' | 'ghost'
  className = '',
  children,
  ...rest // onClick, href, disabled, aria-label... anything else
}) {
  const Tag = as;

  return (
    <span className="keyslot">
      <Tag
        className={`key key--${variant} ${className}`}
        /* Without this, a <button> inside a <form> defaults to
           type="submit" and will submit the form when clicked.
           It goes BEFORE {...rest} so a caller can still override it. */
        type={as === 'button' ? 'button' : undefined}
        {...rest}
      >
        {children}
      </Tag>
    </span>
  );
}
