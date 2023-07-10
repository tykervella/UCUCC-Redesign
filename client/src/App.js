import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Calendar from './pages/CalendarPage';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Enrollment from './pages/Enrollment'
import TuitionAndFees from './pages/TuitionAndFees';
import Tour from './pages/Tour';
import TuitionAssistance from './pages/TuitionAssistance';
import Classrooms from './pages/Classrooms';
import Staff from './pages/Staff';
import Wishlists from './pages/Wishlists';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
          <div style={{marginTop: "20px"}}>
            <Routes >
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
               <Route 
                path="/AboutUs" 
                element={<AboutUs/>} 
              />
              <Route 
                path="/calendar" 
                element={<Calendar/>} 
              />
              <Route 
                path="/Menu" 
                element={<Menu/>} 
              />
               <Route 
                path="/Testimonals" 
                element={<Testimonials/>} 
              />
               <Route 
                path="/Contact" 
                element={<Contact/>} 
              />
               <Route 
                path="/Enrollment" 
                element={<Enrollment/>} 
              />
               <Route 
                path="/TuitionAndFees" 
                element={<TuitionAndFees/>} 
              />
               <Route 
                path="/Tour" 
                element={<Tour/>} 
              />
               <Route 
                path="/TuitionAssistance" 
                element={<TuitionAssistance/>} 
              />
               <Route 
                path="/Classrooms" 
                element={<Classrooms/>} 
              />
               <Route 
                path="/Staff" 
                element={<Staff/>} 
              />
               <Route 
                path="/Wishlists" 
                element={<Wishlists/>} 
              />
               <Route 
                path="/Resouces" 
                element={<Resources/>} 
              />
              <Route 
                path="/FAQ" 
                element={<FAQ/>} 
              />

             
            </Routes>
          </div>
          <Footer />
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
