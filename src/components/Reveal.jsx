import { useReveal } from '../hooks/useReveal.js';

/* =============================================================
   Reveal —  done. Wrap anything in this and it fades up when it
   scrolls into view, and fades out again as it leaves.

     <Reveal>            <h2>Hello</h2>   </Reveal>
     <Reveal delay={120}> <Card />        </Reveal>

   `as` lets you keep your HTML semantic — a list of cards should
   still be a <ul>, not a pile of <div>s:

     <Reveal as="li"> ... </Reveal>
   ============================================================= */

export default function Reveal({
  as: Tag = 'div',
  delay = 0, // ms — stagger a row so cards don't all land at once
  once = false, // true = reveal and stay; false = fade out again on the way past
  className = '',
  children,
  ...rest
}) {
  const { ref, visible } = useReveal({ once });

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      /* data-visible is what transitions.css keys off. Using a data
         attribute rather than toggling a class name keeps the two
         states obvious when you inspect the element in devtools. */
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
