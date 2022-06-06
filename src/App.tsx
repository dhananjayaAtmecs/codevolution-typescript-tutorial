import React from 'react';
import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { User } from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import { List } from './components/generics/List';
import Greet from './components/Greet';
import Heading from './components/Heading';
import { CustomButton } from './components/html/Button';
import { Input } from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restriction/RandomNumber';
import Status from './components/Status';
import { Toast } from './components/templateLiterals/Toast';

function App() {

  const personName ={
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce0',
      last: 'Wayne0'
    },
    {
      first: 'Bruce1',
      last: 'Wayne1'
    },
    {
      first: 'Bruce2',
      last: 'Wayne2'
    }
  ]

  return (
    <div className="App">
      <>
      {/* <Greet 
        name={'dhanu'} 
        messageCount={20} 
        isLoggedIn={false} /> */}
      
      {/* optional props */}
      {/* <Greet 
        name={'dhanu'} 
        isLoggedIn={true} /> */}
      
      {/* <Person name={personName}/>

      <PersonList names={nameList}/>

      <Status status='success'/>
      
      <Heading>Placeholder text as children</Heading> */}
      

      {/* <Oscar>
        <Heading>
          Oscar goes to Leonardo dicaprio
        </Heading>
      </Oscar>

      <Button handleClick={(e, id)=>{
        console.log('Button clicked', e , id)
      }}/>

      <Input value='' handleChange={e=> console.log(e)} /> */}

    {/* <Container styles={{ border: '1px solid black', padding:'1rem'}} /> */}
    
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}

      
      
     
      {/* <UserContextProvider>
       <User/>
      </UserContextProvider> */}
      
      
     {/* <Private isLoggedIn={true} component={Profile} /> */}


      </>
      
      <>
       {/* <List
          items={['Batman','Superman','Wonder Women']}
          onClick={(item)=>console.log(item)}/>
       
       <List
          items={[1,2,3]}
          onClick={(item)=>console.log(item)}/> */}

       {/* <List
          items={[
            {
              id:1,
              first: 'Bruce',
              last: 'wayne',
            },
            {
              id:2,
              first: 'Clark',
              last: 'Kent',
            },
            {
              id:3,
              first: 'Princess',
              last: 'Diana',
            }
          ]}
          onClick={(item)=>console.log(item)}/> */}
      

      {/* <RandomNumber value={10} isPositive />

      <Toast position='center' />

     
       
       <CustomButton 
            variant='primary' 
            onClick={()=>console.log('clicked')}>
           Primary Button
       </CustomButton> */}

       </>

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
