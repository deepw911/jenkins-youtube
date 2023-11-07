import { useState } from 'react'
import './path.css'




const Path = props => {
	const { secondItem, heading, routeName } = props

	const [open, setOpen] = useState(false)

	const onHeaderClickHandler = () => {
		setOpen(!open)
	}

	return (
		<div>
			<div className={open?' headerContainer' : 'notOpen headerContainer'}
				onClick={onHeaderClickHandler}
				heading={heading}
				open={open}>
				<div className={`header ${heading.toLowerCase()}`} heading={heading} open={open}>
					<section className={heading.toUpperCase()}>
						<h5>{heading}</h5>
					</section>
					<div>
						<h4>{routeName}</h4>
						<p>{secondItem?.summary || ''}</p>
					</div>
				</div>
			</div>

			{open && (
				<div className='content' heading={heading} open={open}>
					<h4 className='responseHeading'>Parameters</h4>
					<section className='contentPaddingRapper'>No Parameters</section>
					{secondItem?.requestBody && (
						<>
							<section className='requestBodySection'>
								<section className='headingSectionOfRequestBodySection'>
									<h4>Request Body</h4>
									<p>
										{secondItem.requestBody.required === true ? 'required' : ''}
									</p>
								</section>
								<section>
									<select>
										{Object.keys(secondItem.requestBody.content).map(
											(item, i) => (
												<option key={i}>{item}</option>
											)
										)}
									</select>
								</section>
							</section>
							<section className='contentPaddingRapper'>
								{secondItem.requestBody.description}
							</section>
						</>
					)}
					{secondItem.responses && (
						<section className='responseSection'>
							<h4 className='responseHeading'>Response</h4>
							<section className='responseSectionContent'>
								<div className='subContentHeading'>
									<h4>Code</h4>
									<h4>Description</h4>
								</div>
								<h4>Links</h4>
							</section>
							<hr />
							<section className='responseSectionContent' subContentHeadingValue>
								<div className='subContentHeading'>
									<h4>{Object.keys(secondItem.responses)[0]}</h4>
									<h4>
										{Object.entries(secondItem.responses)[0][1].description}
									</h4>
								</div>
								<h4>{secondItem.responses.link || 'No Links'}</h4>
							</section>
						</section>
					)}
					<div className='extensionSection'>
						<section className='entensionSubSection'>
							<h4>Field</h4>
							<h4>Value</h4>
						</section>
						<hr />
						<section className='entensionSubSection'>
							<h5>x-location</h5>
							<h5>4000</h5>
						</section>
						<section className='entensionSubSection'>
							<h5>x-metrics</h5>
							<h5>{Object.entries(secondItem['x-metrics']) + ':""'}</h5>
						</section>
					</div>
				</div>
			)}
		</div>
	)
}

export default Path
