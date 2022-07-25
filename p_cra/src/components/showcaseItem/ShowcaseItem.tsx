import * as React from 'react';
import "./ShowcaseItem.scss"; 


function ShowcaseItem(props: any) {
  	console.log(`${props.width}px    ${props.height}px`);
	return (
		<div className="showcase-item-container"
			style={{width: `${props.width}px`, height: `${props.height}px`}}
		>
			<div className="showcase-pic"
				style={{
					backgroundImage: `url(${require(`../../assets/img/${props.image}`)})`,
				}}
			/>
			{props.children}
		</div>
	)
}

export default ShowcaseItem;