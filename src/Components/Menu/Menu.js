import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  const menu = [
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
    {name: 'Periosoare soup', price: 200},
  ];
  return (
    <div className='menu d-flex justify-content-center align-items-center flex-column bg-dark p-5 w-50 rounded'>
        {menu.map((item, key) => (
            <MenuItem key={key} item={item} />
        ))}
    </div>
  );
}

export default Menu;
