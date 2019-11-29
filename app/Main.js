import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      userSearch: ""
    }
  }
    // Calls API to get information based on user's keyword search
    keywordSearch = (userSearch) => {
      console.log(userSearch)
      axios({
          method: 'POST',
          url: `localhost4000/documents/${userSearch}`,
          dataResponse: 'json',
          params: {
              // type: ["keyword", "citation"],
              // text: userSearch
          }
      }).then(results => {
        // if API cannot find any matches based on user's search, ask user to search with another keyword
        // if (results === 0) {
        //   console.log("Please use another keyword.")
        // } else {
        //   console.log("you got some data back!")
        // }

        console.log("keyword results:", results)
      }).catch(error => {
        console.log("Keyword.  There was an ERROR")
        console.log(error)
        console.log("Keyword Results: ", results)
      })
    }

    // Calls API to get information based on user's citation search
    citationSearch = (userSearch) => {
      axios({
          method: 'POST',
          url: 'localhost4000/documents/',
          dataResponse: 'json',
          params: {
              type: 'citation',
              text: userSearch
          }
      }).then(results => {
        // if API cannot find any matches based on user's search, ask user to search with another citation
        if (results === 0) {
          console.log("Please use another citation.")
        } else {
          console.log("you got some data back!")
        }
      }).catch(error => {
        console.log("Citation.  There was an ERROR")
        console.log(error)
      })
    }
  

  //binds the input
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
    console.log("handleChange function WORKS! userInput value is: ", this.state.userInput)
  }


  // on click of the search button, stores user input in state and passes the user's input to the API call
  handleSearch = (event) => {
    event.preventDefault();
      // error handling - checks if user has left search field blank and throws an alert
      if (this.state.userInput === '') {
        swal({
          title: "Don't leave the text field empty!!",
          icon: "warning",
          button: "Done.",
        });
      // if user has filled out the input, store user's search parameters in state and call API
      } else {
        const userQuery = this.state.userInput;

        this.setState({
          userSearch: userQuery
        }, () => {
          this.keywordSearch(this.state.userSearch)
          console.log("handleSearch function WORKED!")
          console.log("this.state.userSearch result is: ", this.state.userSearch)
        })
      }
  }
  
  render() {

    return(
      <section className="wrapper">
        <form action="" className="searchForm">
            <label htmlFor="searchBar" className="visuallyHidden">Search Query</label>
            <input  
                id="searchBar" 
                onChange={this.handleChange}
                type="text"
                placeholder="Search Query">
            </input>

            <select className="searchFilter">
              <option value="keyword">Keyword</option>
              <option value="citation">Citation</option>
            </select>
           
            <button
              className="searchButton"
              onClick={this.handleSearch}
              type="submit"
              value="Search"
            >              
              <i className="fas fa-search searchIcon"></i>
            </button>
        </form>
      </section>
    ) 
  }

}
export default Main;



// ==========================
// NOTES
// ==========================


// ***** Explain process *****

// I started by going through the documentation and just playing with the API to get used to it.  It took some time for me to get it it all going through Postman, running things etc.
// I used Postman to help me test the endpoints.  Still a little new to it all but from what I gathered from Postman and the documentation.  It took a while but in the end I was sure the endpoint was:
// localhost4000/documents/
// I TESTED it on Postman and through the browser.  No problem.
// So I switched gears to focus on the interface and how to pull the necessary values and so forth.  This also took a good portion of my time.
// I tried setting up catches and error handling.  Mainly for my sake to make sure things were working.
// At one stage I set up 2 API calls.  One for 'keywords' and the other for 'citations'.  It was later that I realized that an array was suggested to be used.
// It was only at the end, after putting it all together and testing the API in full did I realize that it was doing something odd.  It was running it through both local systems (App AND API).
// The console stated : http://localhost:1234/localhost4000/documents/


// ***** What would you do differently? *****

// Looking back I should have tested the API even more and asked all the questions regarding it instead of getting a result to post in the console and settling for that.
// In all honesty, I didn't think there was a problem (as things were working at first) which was why I didn't ask too much about it.



// ***** What did I find confusing *****

// For a long while I was trying to figure out the logic of how to pull the values from the search bar upon the click and sending it to where it needed to go.  That was confusing.
// Trying to figure out how to get the API to fire with my desired results was also confusing. 
// While I was stuck, I wasn't usually stuck for too long.  I figured things out for the most part.  Everything else was Google, the documentation or some other resource.



// ***** Questions to Ask and Final Thoughts *****

// I find tech challenges to be tougher because it's harder to draw the line between doing the challenge and asking too many questions.
// In my case I did not ask enough questions and I approached things from the wrong angle.
// I DID ask questions when I was really stumped.  And as mentioned before, I should have tinkered more with the API.
// I also wanted something that had some sort of UI on the surface which is why I switched gears for a time being.  I wanted something that approached this challenge from both ends.

// My only burning question at this time would be:
// How should the API be set up?  I really am curious.

// Lastly, I feel I should mention that a lot of what's happening will appear through the browser's console.





// Thanks again for the opportunity and I hope to speak to you all soon!







