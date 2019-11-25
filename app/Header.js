import React, { Component } from 'react';
import axios from 'axios';

import CiteIcon from "./icons/cite.svg"


class Header extends Component {
  constructor() {
    super();
    this.state = {
      
    }
        // Calls API to get information based on user's keyword search
  this.keywordSearch = (userSearch) => {
    console.log(userSearch)
    axios({
        method: 'POST',
        url: 'localhost4000/search',
        dataResponse: 'json',
        params: {
            type: 'keyword',
            text: userSearch
        }
    }).then(results => {
      // if API cannot find any matches based on user's search, ask user to search with another keyword
      if (results === 0) {
        console.log("Please use another keyword.")
      } else {
        console.log("you got some data back!")
      }
    }).catch(error => {
      console.log("There was an ERROR")
      console.log(error)
    })
  }



  // Calls API to get information based on user's citation search
  this.citationSearch = (userSearch) => {
    axios({
        method: 'POST',
        url: 'localhost4000/search',
        dataResponse: 'json',
        params: {
            type: 'citation',
            text: userSearch
        }
    }).then(results => {
      // if API cannot find any matches based on user's search, ask user to search with another keyword
      if (results === 0) {
        console.log("Please use another keyword.")
      } else {
        console.log("you got some data back!")
      }
    }).catch(error => {
      console.log("There was an ERROR")
    })
  }
  }
  




  
  render() {

    return(
      <section>
        <form action="" className="searchForm">
            <label htmlFor="searchBar" className="visuallyHidden">Search for TV shows</label>
            <input  
                id="searchBar" 
                // onChange={this.keywordSearch}
                type="text"
                placeholder="eg. transformers, top gear, brooklyn 99... ">
            </input>
            <input  
                onClick={(event) => {
                  event.preventDefault();
                  this.keywordSearch(event.target.value)
                }}
                type="submit" 
                value="Search">
            </input>
        </form>
      </section>
    ) 
  }

// // calls Api to get tv shows based on user's keyword search
// searchShows = (userSearch) => {
//   axios({
//       method: 'GET',
//       url: "https://api.tvmaze.com/search/shows",
//       dataResponse: 'json',
//       params: {
//           q: userSearch
//       }
//   }).then(results => {
//       // if API cannot find any tv show matches based on user's search, ask user to search with another keyword
//       if (results.data.length === 0) {
//           swal({
//               title: `Sorry, we couldn't find any shows based on your search. Please try searching by another keyword`,
//               icon: "warning",
//               button: "Nice.",
//           });
//       // if API call returns results, filter out data that do not have an image or summary.
//       } else {
//           const filteredData = results.data.filter(item =>
//               item.show.image != null && item.show.summary != null);
//           // store the filtered list in state
//           this.setState({
//               showsArray: filteredData
//           })
//       }  
//   }).catch(error => {
//       swal({
//           title: "Sorry! We failed to get data back from our API at this time. Please check back later!",
//           icon: "warning",
//           button: "Try Again"
//       });
//   })
// }

}
export default Header;