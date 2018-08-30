/* External dependencies */
import React from "react";
import PropTypes from "prop-types";

/**
 * A select box for selecting a taxonomy.
 *
 * @param {Object} props The component's props.
 *
 * @returns {ReactElement} The rendered TaxonomyPicker component.
 */
const TaxonomyPicker = ( props ) => {
	const {
		value,
		id,
		terms,
		onChange,
	} = props;

	return (
		<select
			className="components-select-control__input"
			id={ id }
			value={ value }
			onChange={ e => {
				onChange( parseInt( e.target.value, 10 ) );
			} } >
			{
				terms.map( term => {
					return (
						<option
							key={ term.id }
							value={ term.id }>
							{ term.name }
						</option>
					);
				} )
			}
		</select>
	);
};

TaxonomyPicker.propTypes = {
	terms: PropTypes.arrayOf( PropTypes.shape( {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	} ) ),
	onChange: PropTypes.func.isRequired,
	id: PropTypes.string,
	value: PropTypes.string,
};

export default TaxonomyPicker;
