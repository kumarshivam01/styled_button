import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button } from 'antd';
// const Button = styled.button`
//     font-size:1.5rem;
//     margin:5px;
//     background-Color:${(props)=>props.variant==='outline'? 'white':'rgb(36,144,254)'};
//     color:${(props)=>props.variant==='outline'? 'black':'white'};
//     padding:10px;
//     border:black;
//     cursor:pointer;
    
    
//  `
export default function Button_style() {
  return (
    <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
  )
}
