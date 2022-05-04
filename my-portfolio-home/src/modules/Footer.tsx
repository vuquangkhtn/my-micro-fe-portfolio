import React from 'react';
import { Link } from 'common';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <p className="copyright-text text-center">
              Designed by{' '}
              <Link rel="nofollow" href="htwtps://www.facebook.com/tooplate">
                Tooplate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
