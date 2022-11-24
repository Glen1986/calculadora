import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row  } from "./styles";
import {useState} from "react";


const App = () => {
   const [currentNumber, setCurretNumber] = useState('0');
   const [firstNumber, setFirstNumber] = useState('0');
   const [operation, setOperation] = useState('');

   const handleOnClear = () => {
      setCurretNumber('0');
      setFirstNumber('0');
   }
   const handleAddNumber = ( num ) => {
      setCurretNumber(prev => `${prev === '0' ? '' : prev}${num}`)
   }

  const handleSum = () => {

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurretNumber('0')
         setOperation('+')
      }else{
         const sum = Number(firstNumber) + Number(currentNumber) 
         setCurretNumber(String(sum))
         setFirstNumber('0')
         setOperation('')
      }
   }
   const handleRes = () => {

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurretNumber('0')
         setOperation('-')
      }else{
         const sum = Number(firstNumber) - Number(currentNumber) 
         setCurretNumber(String(sum))
         setFirstNumber('0')
         setOperation('')
      }
   }
  const handleMult = () => {

      if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurretNumber('0')
         setOperation('*')
      }else{
         const sum = Number(firstNumber) * Number(currentNumber) 
         setCurretNumber(String(sum))
         setFirstNumber('0')
         setOperation('')
      }
   }
   const handleDiv = () => {

        if(firstNumber === '0'){
         setFirstNumber(String(currentNumber));
         setCurretNumber('0')
         setOperation('/')
      }else{
         const sum = Number(firstNumber) / Number(currentNumber) 
         setCurretNumber(String(sum))
         setFirstNumber('0')
         setOperation('')
      }
   }
   const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
         switch(operation){
            case '+':
               handleSum();
               break;
            case '+':
               handleRes();
               break;
            case '*':
               handleMult();
               break;
            case '/':
               handleDiv();
               break;
               default: break;
         }
      }
   }
 
   return (
     <Container>
        <Content>
           <Input value = { currentNumber }/>
           <Row>
              <Button id="9" label="9" onClick={()=> handleAddNumber('9')}/>
              <Button label="8" onClick={()=> handleAddNumber('8')}/>
              <Button label="7" onClick={()=> handleAddNumber('7')}/>
              <Button label="+" onClick={handleSum}/>
           </Row>
           <Row>
              <Button label="6" onClick={()=> handleAddNumber('6')}/>
              <Button label="5" onClick={()=> handleAddNumber('5')}/>
              <Button label="4" onClick={()=> handleAddNumber('4')}/>
              <Button label="-" onClick={handleRes}/>
           </Row>
           <Row>
              <Button label="3" onClick={()=> handleAddNumber('3')}/>
              <Button label="2" onClick={()=> handleAddNumber('2')}/>
              <Button label="1" onClick={()=> handleAddNumber('1')}/>
              <Button label="*" onClick={handleMult}/>
           </Row>
           <Row>
              <Button label="CE"onClick={()=> handleOnClear()}/>
              <Button label="0" onClick={()=> handleAddNumber('0')}/>
              <Button label="/" onClick={handleDiv}/>
              <Button label="=" onClick={handleEquals}/>
           </Row>
        </Content>
     </Container>
  );
}

export default App;
