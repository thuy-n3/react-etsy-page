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
    var AppView = React.createClass({

    	_emptyUselessFunction: function() {

    	},

    	render: function() {
    		return (
    			<div className="pageContainer">			
	    			<h1 className="headline">Iron Etsy</h1> 
	    			<AboutResults/>
	    			<ListingGrid/>
	    		</div>
    			)
    	}
    })

   	var AboutResults = React.createClass({
   		render: function() {
   			return (
   				<div className="about">
	   				<p className="results">50,000 results</p>
	   				<p className="showing">25 showing</p>
   				</div>
   				)
   		}
   	})

   	var ListingGrid = React.createClass({

   		_getListingsJSX: function() {
   			var listings = []
   			for (var i = 0; i < 4; i++) {
   				var newListing = <Listing number={i} nickname="jesus the picture" />
   				listings.push(newListing)
   			}
   			console.log(listings)
   			return listings
   		},

   		render: function(){
   			return (
   				<div className="listingContainer">
   					{/*js to be evaluated must go inside of squirrly brackets*/}
   					{this._getListingsJSX()} 
   				</div>
   				)
   		}
   	})

   	var Listing = React.createClass({
   		render: function(){
   			console.log(this)
   			return (
   				<div className="listing">
   					<img src="http://lorempixel.com/200/200"/>
   					<p className="descr">Picture {this.props.number}</p>
   				</div>
   				)
   		}
   	})

    DOM.render(<AppView/>,document.querySelector('.container'))
}

app()
