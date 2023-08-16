import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer(){
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-5 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        <a className='text-dark' href='https://www.iasys.co.in/'>
          iasys.com
        </a>
      </div>
    </MDBFooter>
  );  
}