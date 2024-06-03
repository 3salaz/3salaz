import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ to, href, onClick, children, className, variant, size, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'text-white bg-primary hover:bg-primary-dark',
    secondary: 'text-primary bg-white border-primary hover:bg-primary-light',
    blue: `text-white bg-blue-400 hover:text-blue-400 hover:text-white`,
    danger: 'text-white bg-red-600 hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion(Link);
  const MotionAnchor = motion.a;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <MotionAnchor href={href} className={classes} {...motionProps} {...props}>
        {children}
      </MotionAnchor>
    );
  }

  return (
    <MotionButton onClick={onClick} className={classes} {...motionProps} {...props}>
      {children}
    </MotionButton>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'blue' , 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;