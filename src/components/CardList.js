import React from 'react';
import Card from './Card.js';
import './CardList.css';

const CardList = ({ project }) =>{
	return (
		<section className="card-list-wrapper">
		{ //mappign the filtered Arrray of project to display card
			project.map((p, i) => { return (
				
				// passing parameter to the card component
				<Card 
					key={project[i].id} 
					id= {project[i].id} 
					title= {project[i].title} 
					description= {project[i].description} 
					tech= {project[i].tech} 
					git= {project[i].gitCode} 
					website= {project[i].gitPage} 
					tag= {project[i].tag.map((tag, index) => { return <span key={index} className="card-tag">{tag}</span>})}	
				/>
		
			)})
		}	
		</section>
	)
};

export default CardList;