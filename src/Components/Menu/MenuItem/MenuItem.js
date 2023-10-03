import './MenuItem.css';

const MenuItem = ({item}) => {
  return (
    <div className='menu-item d-flex justify-content-between align-items-center text-white'>
        <span>{item.name}</span>
        .........................
        <span>{item.price}</span>
    </div>
  );
}

export default MenuItem;
