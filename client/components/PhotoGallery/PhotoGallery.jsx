import React from 'react';
import './photoGallery.css'
export default class PhotoGallery extends React.Component{
	render(){
		let {imageGallery} = this.props;
		return (
			<div> 
				{
					imageGallery.map((imgObj,index)=>
						<div key={'imgGallery'+index} className="photoWrapper">
							<img src={imgObj.img}/>
						</div>
					)
				}
			</div>
		)
	}
}
