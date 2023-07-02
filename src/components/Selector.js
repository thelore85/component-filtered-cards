import React from 'react';



const Selector = ({ selectorChange }) =>{
  return(
    <section className="selector-wrapper">
		<h1 className='title'>Select a Project type</h1>
    	<select className="level-selector" onChange={selectorChange}>
			<option className= "level" value="" defaultValue>All Projects</option>
			<option className= "level" value="react">React</option>
			<option className= "level" value="javascript">Vanilla JS</option>
			<option className= "level" value="css">Css</option>
			<option className= "level" value="api">API</option>
		</select>
    </section>
  )
}

export default Selector