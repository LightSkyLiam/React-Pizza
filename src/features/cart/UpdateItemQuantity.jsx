import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { incQuantity, decQuantity, getCurrentQuantityById } from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const currrentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  const handleIncQuantity = () => {
    dispatch(incQuantity(pizzaId));
  };
  const handleDecQuantity = () => {
    dispatch(decQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currrentQuantity}</span>
      <Button type="round" onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
