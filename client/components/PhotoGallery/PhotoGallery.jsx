import React from 'react';
import './photoGallery.css'
export default class PhotoGallery extends React.Component{
	constructor(){
		super();
	}
	render(){
		let {imageGallery} = this.props;
		return (

			<div className="container">
				<h2>Image gallery example</h2>  
			  	<div className="carousel slide" data-ride="carousel">
			    {
					imageGallery.map((imgObj,index)=>
						<div key={'imgGallery'+index} className="carousel-inner active">
							<img src={imgObj.img}/>
						</div>
					)
				}
			    <a className="left carousel-control" data-slide="prev">
			      <span className="glyphicon glyphicon-chevron-left"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="right carousel-control" data-slide="next">
			      <span className="glyphicon glyphicon-chevron-right"></span>
			      <span className="sr-only">Next</span>
			    </a>
			  </div>
			</div>
		)
	}
}
