import React from 'react'
import AddReviewForm from './AddReviewForm';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ReviewModal = (props) => {
  const { characteristics } = props;

  return (
  <Modal trigger={<Button>Add a Review</Button>} >
    <Header icon='plus square outline' content='Add a review about the [product name]' />
    <Modal.Content>
      <AddReviewForm chars={characteristics} />
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted>
        Submit
      </Button>
    </Modal.Actions>
  </Modal>
  );
}

export default ReviewModal;