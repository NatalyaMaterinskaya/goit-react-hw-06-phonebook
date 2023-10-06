import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  } 
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChangeFilter} />
    </Label>
  );
};

