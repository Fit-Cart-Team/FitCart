import React, { useState } from 'react';
import { Modal, Button, Input, Header } from 'semantic-ui-react';

const Qform = ({ productName }) => {
  const [questionInput, setQuestionInput] = useState('');
  const [nicknameInput, setnicknameInput] = useState('');
  const [emailInput, setemailInput] = useState('');

  const handleChange = event => {
    set[event.name](event.target.value);
  };

  const handleSubmit = () => {
    console.log(questionInput);
    console.log(nicknameInput);
    console.log(emailInput);
  };

  return (
    <Modal trigger={<Button basic content='+ Add A Question' />} closeIcon>
      <Header content='Ask Your Question' />
      <Header content='About the ${productName}' />
      <Modal.Content>
        <Input
          type='text'
          fluid
          size='large'
          label='Your Question *'
          name='questionInput'
          value={questionInput}
          onChange={e => handleChange(e)}
        />
        <Input
          type='text'
          size='small'
          label='What is your nickname? *'
          placeholder='Example: jackson11!'
          name='nicknameInput'
          value={nicknameInput}
          onChange={e => handleChange(e)}
        />
        For Privacy reasons, do not use your full name or email address.
        <Input
          type='text'
          size='small'
          label='Your email *'
          placeholder='Why did you like the product or not?'
          name='emailInput'
          value={emailInput}
          onChange={e => handleChange(e)}
        />
        For authentication reasons, you will not be emailed.
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color='olive'
          content='Submit Question'
          onSubmit={handleSubmit}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default Qform;
