// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()

    var ironData = {
      meta: {
          resultsCount: 100,
          perPage: 3
      },
      results: [
        {
          title: "hot john",
          seller: "slickbag",
          price: "25 cents",
          descr: "this john is really hot and friendly.",
          imageUrl: "https://robohash.org/john"
        },
        {
          title: "hot pockets",
          seller: "lean cuisine",
          price: "30lbs of silver",
          descr: "these pockets are really hot and friendly.",
          imageUrl: "https://robohash.org/pockets"
        },
        {
          title: "fingerless gloves",
          seller: "blind children",
          price: "$10",
          descr: "if you don't buy these you're evil",
          imageUrl: "https://robohash.org/blindness"
        }
      ]
    }


    var AppView = React.createClass({

    	render: function() {
        console.log(this)
    		return (
    			<div className="pageContainer">			
	    			<h1 className="headline">Iron Etsy</h1> 
	    			<AboutResults aboutData={this.props.shopData.meta} />
	    			<ListingGrid listings={this.props.shopData.results} />
	    		</div>
    			)
    	}
    })

   	var AboutResults = React.createClass({
   		render: function() {
   			return (
   				<div className="about">
	   				<p className="results">{this.props.aboutData.resultsCount} results</p>
	   				<p className="showing">{this.props.aboutData.perPage} on page</p>
   				</div>
   				)
   		}
   	})

   	var ListingGrid = React.createClass({

   		_getListingsJSX: function(listings) {
        console.log("====get listings JSX function=====")
        console.log(listings)
        var newArray = []
        for (var i = 0; i < listings.length; i++){
          var listingObj = listings[i]
          var component = <Listing listingData={listingObj}/>
          newArray.push(component)          
        }
        return newArray
   		},

   		render: function(){
        console.log("here comes listingGrid...")
        var itemListings = this.props.listings
        console.log(itemListings)
   			return (
   				<div className="listingContainer">
   					{/*js to be evaluated must go inside of squirrly brackets*/}
   					{this._getListingsJSX(itemListings)} 
   				</div>
   				)
   		}
   	})

   	var Listing = React.createClass({
   		render: function(){
        console.log("====listing function====")
        console.log(this)
        var grabber = this.props.listingData
   			return (
   				<div className="listing">
   					<img src={this.props.listingData.imageUrl}/>
   					<p className="price">HOW MUCH?? {grabber.price}</p>
            <p className="descr">Seller: {grabber.seller}</p>
            <p className="descr">why {grabber.descr}</p>
   				</div>
   				)
   		}
   	})

    DOM.render(<AppView id="topView" arisFaveFood="shrimp" shopData={ironData} />,document.querySelector('.container'))
}

app()
