import editBtn from '../../../assets/edit-icon.png'
import { StyledButton } from './EditButton.styled'

const EditButton = () => {
  return (
    <StyledButton>
        <img src={editBtn} alt="Edit training." />
    </StyledButton>
  )
}

export default EditButton