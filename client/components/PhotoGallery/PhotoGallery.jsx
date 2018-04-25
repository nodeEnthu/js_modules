import React from 'react';
import './photoGallery.css'
export default class PhotoGallery extends React.Component{
	constructor(){
		super();
		this.state={
			currentIndex:0
		}
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	};
	next(){
		let currentIndex = this.state.currentIndex;
		// reset it back to 0 for infinite carousel when last image is reached
		(currentIndex < this.props.imageGallery.length -1 )?
		this.setState({currentIndex: this.state.currentIndex + 1}) : this.setState({currentIndex: 0})
	};
	previous(){
		let currentIndex = this.state.currentIndex;
		// reset it back to last image for infinite carousel when the first image is reached
		(currentIndex !== 0 )?
		this.setState({currentIndex: this.state.currentIndex -1}) : this.setState({currentIndex: this.props.imageGallery.length -1})
	};
	render(){
		let {imageGallery} = this.props;
		let {currentIndex} =  this.state;
		return (
			<div className="carousel">
				<h1></h1>
				<i className="fas fa-chevron-left chevron-left" onClick={this.previous}></i>
			    {
					imageGallery.map((imgObj,index)=>
						
						<div key={'imgGallery'+index}>
							<img src={imgObj.img} className={(index === currentIndex)? "selected" : undefined}/>
						</div>
					)
				}
				<i className="fas fa-chevron-right chevron-right" onClick={this.next}></i>
			</div>
		)
	}
}
