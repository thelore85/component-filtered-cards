import React from 'react';
import './Card.css'

const Card = ({ title, description, tech, tag, id, git, website }) => {

	return(
		<div className="card-wrapper">
			<div className="card-image-wrapper">
				<img alt="robot surfer" src={`https://robohash.org/${id}?50x50`} className="card-image"/>
			</div>
			<div className="card-content-wrapper">
				<h2 className="card-title">{title}</h2>
				<p className="card-description">{description}</p>
				<p className="card-detail">{tech}</p>
				<p className="card-tag-wrapper">{tag}</p>
				<div className="card-button-wrapper">
					<a className="card-button git" href={git} target="_blank" rel="noreferrer">Code Source</a>
					<a className="card-button website" href={website} target="_blank" rel="noreferrer">Go to Website</a>
				</div>
			</div>
		</div>
	)
};

export default Card;