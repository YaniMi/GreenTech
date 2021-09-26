import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Card
        title='Card Title'
        imageUrl='https://www.google.com/search?q=especes+en+voie+de+disparition&sxsrf=AOaemvI2QS6k5VAaTj2gtbq0FOnHghV8pw:1632671723394&tbm=isch&source=iu&ictx=1&fir=mrm0j36tyqibMM%252Cd6rZvPwFqtv5yM%252C_%253B-XhZCxUOHvSqiM%252Cd6rZvPwFqtv5yM%252C_%253BV7NJx2XMJIxeNM%252Ctl14XEAEkGUfYM%252C_%253BDoQ0T000T0k5tM%252Ctl14XEAEkGUfYM%252C_%253BcKjLIzreCmWKMM%252Ctl14XEAEkGUfYM%252C_&vet=1&usg=AI4_-kQURTzvXdSDxv0Rfj8I-axnjxG8KA&sa=X&ved=2ahUKEwjN7e2QgJ3zAhVOExoKHaW8DvsQ_h16BAggEAE#imgrc=mrm0j36tyqibMM'
        body='Lorem Ipsum'
        />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
