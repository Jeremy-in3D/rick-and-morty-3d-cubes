import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export function CharacterBioModal({ open, setOpen, selectedCharacter }) {
  const handleClose = () => setOpen(false);

  const extraCharacterImages = {
    1: 'https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png',
    2: 'https://tvovermind.com/wp-content/uploads/2022/12/Screen-Shot-2022-12-16-at-12.36.03-PM-750x345.png',
    3: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-season-six-1660310944.jpg?crop=0.309xw:0.549xh;0.171xw,0.248xh&resize=480:*',
    4: 'https://www.craveyoutv.com/wp-content/uploads/2020/06/rick-and-morty-season-4-finale-clone-beth-return-1223019-1280x0-1-1000x600.jpeg',
    5: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-jerry-2-1624026834.jpeg?crop=0.563xw:1.00xh;0.254xw,0&resize=480:*',
    6: 'https://free4kwallpapers.com/uploads/originals/2020/05/04/rick-and-morty-portal-tv-show-wallpaper.jpg'
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='modal-left'>
                <div>
                    <img className='character-image' src={selectedCharacter?.image} alt={selectedCharacter?.name}/>
                </div>
                <div className='character-name'>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                    {selectedCharacter?.name}
                    </Typography>
                </div>
                <div className='character-status'>
                <Typography id="modal-modal-title" variant="h6" component="h2">Status:</Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2" color='red' marginLeft={1}>
                     {selectedCharacter?.status}
                </Typography>
                </div>
            </div>
            <div className='modal-right'>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'}>
                    <div className='character-info'>Location: {selectedCharacter?.location.name}</div>
                    <div className='character-info'>Origin: {selectedCharacter?.origin.name}</div>
                    <div className='character-info'>Gender: {selectedCharacter?.gender}</div>
                    <div className='character-info'>Species: {selectedCharacter?.species}</div>
                </Typography>
                <div>
                    <img className='generic-image' src={extraCharacterImages[selectedCharacter?.id] ? extraCharacterImages[selectedCharacter.id] : extraCharacterImages[6]} alt='RickAndMorty'/>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  };