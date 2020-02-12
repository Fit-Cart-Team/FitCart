import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ReviewModal = () => (
  <Modal trigger={<Button>Add a Review</Button>} >
    <Header icon='plus square outline' content='Add a review' />
    <Modal.Content>
      <p>
        Hello
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted>
        Submit
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ReviewModal;