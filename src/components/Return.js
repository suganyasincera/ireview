import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Return() {
  console.log("hi");
        const [status, setStatus] = useState(null);
        const [customerEmail, setCustomerEmail] = useState('');
      const navigate=useNavigate()
        useEffect(() => {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const sessionId = urlParams.get('session_id');
    
          fetch(`/http://54.176.185.234:3000/api/reviewDetails/sessionStatus=${sessionId}`)
            .then((res) => res.json())
            .then((data) => {
              setStatus(data.status);
console.log("hello",data)
              setCustomerEmail(data.customer_email);
            })
            .catch((error) => {
                console.error('Error fetching session status:', error);
              });
        }, []);
      
        if (status === 'open') {
        
            navigate ("/Home") 
          return null;
        }
      
        if (status === 'complete') {
          return (
            <section id="success">
              <p>
                We appreciate your business! A confirmation email will be sent to {customerEmail}.
      
                If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
              </p>
        </section>
          )
        }
      
        return null;
      }

