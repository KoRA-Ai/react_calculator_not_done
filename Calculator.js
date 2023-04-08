import React from 'react'
import css from './Calculator.module.css'
import {useState} from 'react'
export default function Calculator() {
    const [result, setResult] = useState(' ')
    const [addSymbol, setAddSymbol] = useState('')
    const [former, setFormer] = useState('')
    const [current, setCurrent] = useState('')
        const [total, setTotal] = useState('')
//let former,current
    const handleClick = (e) =>{
        setResult(result + e.target.value)        
    }
    const handleAddSym = (e) =>{
        setFormer(parseInt(result)) 
        
        setAddSymbol(e.target.value)
        setResult('')
        //setAddSymbol('')
        setResult(addSymbol+e.target.value)
    }

    const handleC=()=>{
        setResult(' ')
        setAddSymbol(' ')
    }

    const handlePositive=()=>{
        setResult(result*(-1))
    }

    const handlePercent=()=>{
        setResult(result/(100))
    }

    const handleEqual=()=>{
        
        setCurrent(parseInt(result.substring(1)))
        
        if(addSymbol.includes('+')){
            setTotal(parseFloat(former +current))
            //
            setResult(total)
            setResult('')
        }

        if(addSymbol.includes('-')){
            setTotal(parseFloat(former -current))
            //
            setResult(total)
            setResult('')
        }

        if(addSymbol.includes('x')){
            setTotal(parseFloat(former *current))
            //
            setResult(total)
            setResult('')
        }

        if(addSymbol.includes('÷')){
            setTotal(parseFloat(former /current))
            //
            setResult(total)
            setResult('')
        }
    }

      return (
    <div className={css.app}>
        Simple Calculator
        <div >
            <table className={css.table}>
                <tr >
                    <td colSpan='4' className={css.result} >
                    
                        <p>{result}</p>
                        
                       
                    </td>
                </tr>

                <tr >
                    <td colSpan='4' className={css.result} >
                    
                        <p>{total}</p>
                        
                       
                    </td>
                </tr>
                <tr>
                    <td ><input type='button' onClick={handleC}
                    value = 'C'/>   </td>
                    <td ><input type='button' onClick={handlePositive} 
                        value = '+/-'/> </td>
                    <td ><input type='button' onClick={handlePercent}
                        value = '%'/>   </td>
                    <td ><input type='button'  onClick={handleAddSym} value = '÷'/>   </td>
                </tr>
                <tr>
                    <td ><input type='button' onClick={handleClick}
                        value = '7'/> </td>
                    <td ><input type='button' onClick={handleClick}
                        value = '8'/> </td>
                    <td ><input type='button' onClick={handleClick}
                        value = '9'/> </td>
                    <td ><input type='button' onClick={handleAddSym} value = 'x'/> </td>
                </tr>
                <tr>
                    <td ><input type='button' onClick={handleClick}
                        value = '4'/> </td>
                    <td ><input type='button' onClick={handleClick} 
                        value = '5'/> </td>
                    <td ><input type='button' onClick={handleClick} 
                        value = '6'/> </td>
                    <td ><input type='button' onClick={handleAddSym} value = '-'/> </td>
                </tr>
                <tr>
                    <td ><input type='button' onClick={handleClick} 
                        value = '1'/> </td>
                    <td ><input type='button' onClick={handleClick} 
                        value = '2'/> </td>
                    <td ><input type='button' onClick={handleClick} 
                        value = '3'/> </td>
                    <td ><input type='button' onClick={handleAddSym} value = '+'/> </td>
                </tr>
                <tr>
                    <td colSpan='2'><input type='button' onClick={handleClick}
                        value = '0'/> </td>
                    <td ><input type='button' value = '.'/> </td>
                    <td ><input type='button' onClick={handleEqual}value = '='/> </td>
                </tr>
            </table>

            <div >
            former:{former}
            current:{current}
            sym:{addSymbol}
            total:{total}
            <br/>
            Please click  = double times to get the correct answer</div>
        </div>
    </div>
  )
}
