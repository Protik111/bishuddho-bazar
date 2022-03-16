import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link';
import { AiOutlineLogin } from 'react-icons/ai';
import { MdPayment, MdLocalShipping } from 'react-icons/md';
import { BsCartCheckFill } from 'react-icons/bs';
import styles from '../styles/CheckoutSteps.module.css';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4 mt-4'>
      <Nav.Item>
        {step1 ? (
          <Link href='/login' passHref>
            <Nav.Link className={styles.steps}><span className="me-1"><AiOutlineLogin></AiOutlineLogin></span>Sign In</Nav.Link>
          </Link>
        ) : (
          <Nav.Link className={styles.steps} disabled><span className="me-1"><AiOutlineLogin></AiOutlineLogin></span>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link href='/shipping' passHref>
            <Nav.Link className={styles.steps}><span className="me-1"><MdLocalShipping></MdLocalShipping></span>Shipping</Nav.Link>
          </Link>
        ) : (
          <Nav.Link className={styles.steps} disabled><span className="me-1"><MdLocalShipping></MdLocalShipping></span>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link href='/payment' passHref>
            <Nav.Link className={styles.steps}><span className="me-1"><MdPayment></MdPayment></span>Payment</Nav.Link>
          </Link>
        ) : (
          <Nav.Link className={styles.steps} disabled><span className="me-1"><MdPayment></MdPayment></span>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Link href='/placeorder' passHref>
            <Nav.Link className={styles.steps}><span className="me-1"><BsCartCheckFill></BsCartCheckFill></span>Place Order</Nav.Link>
          </Link>
        ) : (
          <Nav.Link className={styles.steps} disabled><span className="me-1"><BsCartCheckFill></BsCartCheckFill></span>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps