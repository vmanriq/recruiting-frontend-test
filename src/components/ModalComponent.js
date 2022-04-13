import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px'
};

function ModalComponent({showModal, setShowModal, setSelectedFactura}) {

  const handleAssignNotaCredito = () => {
    setShowModal(false);
    setSelectedFactura(null)
  }
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nota de crédito asignada correctamente
          </Typography>
          
          <Button sx={{ mt: 3 }} variant='contained' color='secondary' onClick={handleAssignNotaCredito}>Seguir Asignando</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalComponent;