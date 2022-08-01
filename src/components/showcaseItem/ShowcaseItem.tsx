import "./ShowcaseItem.scss"; 

function ShowcaseItem(props: any) {
  	// console.log(`${props.width}px    ${props.height}px`);
	// console.log(`../../assets/img/${props.image}`)
	return (
		<div className="showcase-item-container">
			<div className="showcase-pic"
				style={{
					backgroundImage: `url(src/assets/img/${props.image})`
				}}
			/>
            {/* <img src={`src/assets/img/${props.image}`}
                alt="PICTURE" 
                style={{width: "400px", height: "250px"}}
            /> */}
			{props.children}
		</div>
	)
}

export default ShowcaseItem;