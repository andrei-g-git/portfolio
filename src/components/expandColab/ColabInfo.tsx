import "./ColabInfo.scss";

function ColabInfo(props: any) {
	return (
		<div className="colab-info">
			<h3 className="colab-title">
				{props.title}
			</h3>

			<p className="colab-description">
				{props.description}
			</p>

			<ul className="top-commits">
				{
					props.topCommits.map((commit: string, index: number) =>
                        <li className="commit">
                            {commit}
                        </li>
					)
				}
			</ul>
		</div>
	);
};

export default ColabInfo;