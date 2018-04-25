import React from 'react';
import './photoGallery.css'
export default class PhotoGallery extends React.Component{
	constructor(){
		super();
	}
	render(){
		let {imageGallery} = this.props;
		return (
			<div className="carousel">
				<i className="fas fa-chevron-left chevron-left"></i>
			    {
					imageGallery.map((imgObj,index)=>
						
						<div key={'imgGallery'+index} className="carousel-active">
							<img src={imgObj.img} className={(index === 1)? "selected" : undefined}/>
						</div>
					)
				}
				<i className="fas fa-chevron-right chevron-right"></i>
			</div>
		)
	}
}
