 {/* <Card >
             
                {params.success === 'true' ?(
                <div>
                  <FaCheckCircle className="success-icon" />
                </div>):(<div>
                  <FaTimesCircle className="failure-icon" />
                </div>)}
                <h2>{message}</h2>
                
                <hr />
                {params.success === 'true' ? (
                <div className="payment-details">
                  <p>Ref Number: {params.paymentToken}</p>
                  <p>Plan Name: {params.subscriptionPlan}</p>
                  <p>Payment Time: {params.date}</p>
                  <p>Payment Status: {params.paymentStatus}</p>
              
                  <p>Total Amount: ${params.price}</p>
                </div>):(
                  <div className="payment-details">
                  <p>Ref Number: {params.paymentToken}</p>
                  <p>Plan Name: {params.subscriptionPlan}</p>
                  <p>Payment Time: {params.date}</p>
                  <p>Payment Status: {params.paymentStatus}</p>
                  
              
          
                </div>
                )}
                <Button className="back-home-btn" onClick={handleBackToHome}>
                  Back to Home
                </Button>
             
            </Card> */}