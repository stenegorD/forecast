import React, { useEffect, useState } from 'react';
import { MdOutlineUmbrella } from 'react-icons/md';
import styles from './ButtonScrollToTop.module.scss';

function ButtonScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTopFunc = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <div onClick={scrollToTopFunc} aria-hidden>
          <MdOutlineUmbrella size="5rem" />
        </div>
      )}
    </div>
  );
}

export default React.memo(ButtonScrollToTop);
