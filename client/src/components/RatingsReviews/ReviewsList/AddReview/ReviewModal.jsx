import React from 'react'
import AddReviewForm from './AddReviewForm';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ReviewModal = (props) => {
  const { characteristics, productName, productID, updateList, updateMeta, updateTotalRatings, setAppAvg, setAppTotal, sortParameter } = props;

  return (
  <Modal trigger={<Button>Add a Review</Button>} >
    <Header as="h1" content={`Add a review about the ${productName}`} />
    <Modal.Content>
      <AddReviewForm chars={characteristics} productID={productID} updateList={updateList} updateMeta={updateMeta} updateTotalRatings={updateTotalRatings} setAppAvg={setAppAvg} setAppTotal={setAppTotal} sortParameter={sortParameter} />
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