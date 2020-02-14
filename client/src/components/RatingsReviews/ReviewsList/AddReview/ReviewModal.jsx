import React, { useState, useEffect } from 'react'
import AddReviewForm from './AddReviewForm';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ReviewModal = (props) => {
  const { characteristics, productName, productID, updateList, updateMeta, updateTotalRatings, setAppAvg, setAppTotal, sortParameter } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
  <Modal trigger={<Button onClick={openModal} >Add a Review</Button>} open={modalOpen} onClose={closeModal} >
    <Header as="h1" content={`Add a review about the ${productName}`} />
    <Modal.Content>
      <AddReviewForm chars={characteristics} productID={productID} updateList={updateList} updateMeta={updateMeta} updateTotalRatings={updateTotalRatings} setAppAvg={setAppAvg} setAppTotal={setAppTotal} sortParameter={sortParameter} closeModal={closeModal} />
    </Modal.Content>
  </Modal>
  );
}

export default ReviewModal;