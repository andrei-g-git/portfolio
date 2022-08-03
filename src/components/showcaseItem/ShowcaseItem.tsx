import "./ShowcaseItem.scss"; 

function ShowcaseItem(props: any) {
	return (
		<div className="showcase-item-container">
			<div className="showcase-pic"
				style={{
					backgroundImage: `url(src/assets/img/${props.image})`
				}}
			/>
			{props.children}
		</div>
	);
}

export default ShowcaseItem;