const clientKey = document.getElementById("clientKey").innerHTML;
  const type = document.getElementById("type").innerHTML;
  async function testConfig() {
    const configuration = {
      paymentMethodsResponse: paymentMethodsResponse, // The `/paymentMethods` response from the server.
      clientKey: "AQEshmfuXNWTK0Qc+iSRlmU1tOuVfYVEG5ZYS2xC32Hu2kJPb0uenSqT6fSv2bcQwV1bDb7kfNy1WIxIIkxgBw==-DXqlgocqZ8XYCKQAMHSpqtmmECy65bLYxcI2cXwCDTI=-<u>N#:~8Nqcu3_92", // Web Drop-in versions before 3.10.1 use originKey instead of clientKey.
      locale: "en-US",
      environment: "test",
      onSubmit: (state, dropin) => {
          // Global configuration for onSubmit
          // Your function calling your server to make the `/payments` request
          makePayment(state.data)
            .then(response => {
              if (response.action) {
                // Drop-in handles the action object from the /payments response
                dropin.handleAction(response.action);
              } else {
                // Your function to show the final result to the shopper
                showFinalResult(response);
              }
            })
            .catch(error => {
              throw Error(error);
            });
        },
      onAdditionalDetails: (state, dropin) => {
        // Your function calling your server to make a `/payments/details` request
        makeDetailsCall(state.data)
          .then(response => {
            if (response.action) {
              // Drop-in handles the action object from the /payments response
              dropin.handleAction(response.action);
            } else {
              // Your function to show the final result to the shopper
              showFinalResult(response);
            }
          })
          .catch(error => {
            throw Error(error);
          });
      },
      paymentMethodsConfiguration: {
        card: { // Example optional configuration for Cards
          hasHolderName: true,
          holderNameRequired: true,
          enableStoreDetails: true,
          hideCVC: false, // Change this to true to hide the CVC field for stored cards
          name: 'Credit or debit card',
          onSubmit: () => {}, // onSubmit configuration for card payments. Overrides the global configuration.
        }
      }
     };
     
  }
  