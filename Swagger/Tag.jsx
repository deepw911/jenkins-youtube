import React, { useState } from 'react';
import './Tag.css';
import Path from './Path';

const Tag = ({ data, tagItems }) => {
  const { name, description, externalDocs } = tagItems;
  const [open, setOpen] = useState(false);

  const newData = Object.entries(data.paths)


  const onArrowClickHandler = () => {
    setOpen(!open);
  };

  return (
    <div className='root'>
		<div className='barSectionRoot' onClick={onArrowClickHandler}>
			<section className='barSection'>
				<h2>{name}</h2>
				<p>{description}</p>
			</section >
			<section className='barSection'>
				<p>
					{`${externalDocs?.description || ''}`}
				</p>
				<a href={`${externalDocs?.url || ''}`} target='blank'>
					{externalDocs?.url || ''}
				</a>
				<i>
					<i className={open? 'fa fa-chevron-down icon':'fa fa-chevron-right icon'}/>
				</i>
			</section>
		</div>
		{open && externalDocs && (
			<div>
				{Object.entries(newData).map((firstItem) =>
					Object.values(firstItem[1][1]).map((secondItem, i) => {
						return (
							secondItem.tags[0] === name && (
								<Path
									key={i}
									secondItem={secondItem}
									heading={Object.keys(firstItem[1][1])[i]}
									routeName={firstItem[1][0]}
								/>
							)
						);
					})
				)}
			</div>
		)}
	</div>
  );
};

export default Tag;
