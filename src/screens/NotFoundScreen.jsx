import { Link } from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <div className="wrap">
      <div className="section-head">
        <span className="eyebrow">404</span>
        <h2>Page not found</h2>
        <p className="section-desc">
          This page does not exist, but you can head back home.
        </p>
        <Link className="card-link" to="/">
          Back home
        </Link>
      </div>
    </div>
  );
}