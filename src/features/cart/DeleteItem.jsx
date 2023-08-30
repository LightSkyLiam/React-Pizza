import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const handleDeletePizzaItem = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button onClick={handleDeletePizzaItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
