/* global yoastKeywordSynonymsModalL10n */
import React from "react";
import styled from "styled-components";
import interpolateComponents from "interpolate-components";

import IntlProvider from "../IntlProvider";
import Icon from "yoast-components/composites/Plugin/Shared/components/Icon";
import YoastSeoIcon from "yoast-components/composites/basic/YoastSeoIcon";
import { makeOutboundLink } from "yoast-components/utils/makeOutboundLink";
import PremiumBenefitsForSynonymsList from "../PremiumBenefitsForSynonymsList";
import { getRtlStyle } from "yoast-components";

let localizedData = null;
if ( window.yoastKeywordSynonymsModalL10n ) {
	localizedData = yoastKeywordSynonymsModalL10n;
}

const PremiumLandingPageLink = makeOutboundLink();
const BuyButtonLink = makeOutboundLink();

const StyledContainer = styled.div`
	min-width: 600px;

	@media screen and ( max-width: 680px ) {
		min-width: 0;
		width: 86vw;
	}
`;

const StyledIcon = styled( Icon )`
	float: ${ getRtlStyle( "right", "left" ) };
	margin: ${ getRtlStyle( "0 0 16px 16px", "0 16px 16px 0" ) };

	&& {
		width: 150px;
		height: 150px;

		@media screen and ( max-width: 680px ) {
			width: 80px;
			height: 80px;
		}
	}
`;

/**
 * Creates the content for a keyword synonyms upsell modal.
 *
 * @returns {ReactElement} The Keyword Synonyms upsell component.
 */
const KeywordSynonyms = () => {
	return (
		localizedData && <IntlProvider messages={ localizedData.intl }>
			<StyledContainer>
				<StyledIcon icon={ YoastSeoIcon } />
				<h2>{ localizedData.intl.title }</h2>
				<p>
					{ interpolateComponents( {
						mixedString: localizedData.intl.intro,
						components: { link: <PremiumLandingPageLink href={ localizedData.intl.link } /> },
					} ) }
				</p>
				<p>{ localizedData.intl.other }</p>
				<PremiumBenefitsForSynonymsList />
				<BuyButtonLink href={ localizedData.intl.buylink } className="button button-primary">
					{ localizedData.intl.buy }
				</BuyButtonLink>
				<br/>
				<small>{ localizedData.intl.small }</small>
			</StyledContainer>
		</IntlProvider>
	);
};

export default KeywordSynonyms;
