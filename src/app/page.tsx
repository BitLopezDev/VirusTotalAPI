'use client'
import RootLayout from './layout';
import { TheHead } from '../components/headf';
import React, { ChangeEventHandler } from 'react';
import { req } from './../components/axios';
import { useLink } from '@/hooks/useLink';
export default function Home() {
 
  const { formValue, resultado, handleChange, handleSubmit } = useLink();

    
  
   
  
   /*<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="url"
        value={formValue.url}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {resultado && <div>{resultado}</div>}
    </form>*/
    
   
  

  return (
    <>
      <RootLayout>
        <form method="post" onSubmit={handleSubmit}>
          {/* <input type="text" name="url" placeholder="www.google.com" onChange={handleChange} />
          <input type="submit" onClick={handleSubmit } /> */}
          <input
        type="text"
        name="url"
        value={formValue.url}
        onChange={handleChange}
      />
          <p>www.google.com</p>
          <h1>Resultado:</h1> <br />
          <div>
            {resultado ? (
              <pre>El resultado del análisis es: {resultado}</pre>
            ) : (
              <div></div>
            )}
          </div>
        </form>
      </RootLayout>
    </>
  )
}