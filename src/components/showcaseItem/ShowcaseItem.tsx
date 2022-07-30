import * as React from 'react';
import "./ShowcaseItem.scss"; 


function ShowcaseItem(props: any) {
  	console.log(`${props.width}px    ${props.height}px`);
	console.log(`../../assets/img/${props.image}`)
	return (
		<div className="showcase-item-container"
			//style={{width: `${props.width}px`, height: `${props.height}px`}}
		>
			<div className="showcase-pic"
				style={{
					//backgroundImage: `url(${require(`../../assets/img/${props.image}`)})`,
					backgroundImage: `url(src/assets/img/${props.image})`
				}}
			/>

			<h1 style={{zIndex: 999999999}}>RENDERING</h1>

			{props.children}
		</div>
	)
}

export default ShowcaseItem;