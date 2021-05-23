import React, { FC } from 'react';
import Listings from '../components/Listings';
import productsList from '../data/etsy.json';
import '../css/main.css';

const App: FC = () => <Listings productsList={productsList} />;

export default App;
