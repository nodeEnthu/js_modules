import React from 'react';
import PhotoGallery from './PhotoGallery'
import './app.css'
export default class App extends React.Component {
	constructor(){
		super();
		this.state = {};
	}
	componentDidMount() {
		// most of the times you would load this dynamic data throigh an ejax call in this function
	    this.setState({
	    	imageGallery: [{img:'https://picsum.photos/200/300?image=67', caption:'I am image 1'},{img:'https://picsum.photos/200/300?image=54', caption:'I am image 2'},{img:'https://picsum.photos/200/300?image=104', caption:'I am image 3'},{img:'https://picsum.photos/200/300?image=100', caption:'I am image 4'},{img:'https://picsum.photos/200/300?image=22', caption:'I am image 5'},{img:'https://picsum.photos/200/300?image=25', caption:'I am image 6 of infinite gallery'}]
	    })
	}
    render() {
    	let {imageGallery} = this.state
        return (
            <div className="container">
            	{
            		(imageGallery)? <PhotoGallery imageGallery={imageGallery}/>: undefined
            	}
      		</div>
        );
    }
}
