<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Admin
 */

/**
 * Exposes shortlinks in a global, so that we can pass them to our Javascript components.
 */
class WPSEO_Expose_Shortlinks implements WPSEO_WordPress_Integration {

	/**
	 * Array containing the keys and shortlinks.
	 *
	 * @var array
	 */
	private $shortlinks = [
		'shortlinks.advanced.allow_search_engines'                   => 'https://yoa.st/allow-search-engines',
		'shortlinks.advanced.follow_links'                           => 'https://yoa.st/follow-links',
		'shortlinks.advanced.meta_robots'                            => 'https://yoa.st/meta-robots-advanced',
		'shortlinks.advanced.breadcrumbs_title'                      => 'https://yoa.st/breadcrumbs-title',
		'shortlinks.metabox.schema.explanation'                      => 'https://yoa.st/400',
		'shortlinks.metabox.schema.page_type'                        => 'https://yoa.st/402',
		'shortlinks.sidebar.schema.explanation'                      => 'https://yoa.st/401',
		'shortlinks.sidebar.schema.page_type'                        => 'https://yoa.st/403',
		'shortlinks.focus_keyword_info'                              => 'https://yoa.st/focus-keyword',
		'shortlinks.nofollow_sponsored'                              => 'https://yoa.st/nofollow-sponsored',
		'shortlinks.snippet_preview_info'                            => 'https://yoa.st/snippet-preview',
		'shortlinks.cornerstone_content_info'                        => 'https://yoa.st/1i9',
		'shortlinks.upsell.social_previews'                          => 'https://yoa.st/social-preview-cta',
		'shortlinks.upsell.sidebar.focus_keyword_synonyms_link'      => 'https://yoa.st/textlink-synonyms-popup-sidebar',
		'shortlinks.upsell.sidebar.focus_keyword_synonyms_button'    => 'https://yoa.st/keyword-synonyms-popup-sidebar',
		'shortlinks.upsell.sidebar.focus_keyword_additional_link'    => 'https://yoa.st/textlink-keywords-popup-sidebar',
		'shortlinks.upsell.sidebar.focus_keyword_additional_button'  => 'https://yoa.st/add-keywords-popup-sidebar',
		'shortlinks.upsell.sidebar.additional_link'                  => 'https://yoa.st/textlink-keywords-sidebar',
		'shortlinks.upsell.sidebar.additional_button'                => 'https://yoa.st/add-keywords-sidebar',
		'shortlinks.upsell.metabox.go_premium'                       => 'https://yoa.st/pe-premium-page',
		'shortlinks.upsell.metabox.focus_keyword_synonyms_link'      => 'https://yoa.st/textlink-synonyms-popup-metabox',
		'shortlinks.upsell.metabox.focus_keyword_synonyms_button'    => 'https://yoa.st/keyword-synonyms-popup',
		'shortlinks.upsell.metabox.focus_keyword_additional_link'    => 'https://yoa.st/textlink-keywords-popup-metabox',
		'shortlinks.upsell.metabox.focus_keyword_additional_button'  => 'https://yoa.st/add-keywords-popup',
		'shortlinks.upsell.metabox.additional_link'                  => 'https://yoa.st/textlink-keywords-metabox',
		'shortlinks.upsell.metabox.additional_button'                => 'https://yoa.st/add-keywords-metabox',
		'shortlinks.upsell.gsc.create_redirect_button'               => 'https://yoa.st/redirects',
		'shortlinks.readability_analysis_info'                       => 'https://yoa.st/readability-analysis',
		'shortlinks.activate_premium_info'                           => 'https://yoa.st/activate-subscription',
		'shortlinks.upsell.sidebar.morphology_upsell_metabox'        => 'https://yoa.st/morphology-upsell-metabox',
		'shortlinks.upsell.sidebar.morphology_upsell_sidebar'        => 'https://yoa.st/morphology-upsell-sidebar',
		'shortlinks.semrush.volume_help'                             => 'https://yoa.st/3-v',
		'shortlinks.semrush.trend_help'                              => 'https://yoa.st/3-v',
		'shortlinks.semrush.prices'                                  => 'https://yoa.st/semrush-prices',
		'shortlinks.semrush.premium_landing_page'                    => 'https://yoa.st/413',
		'shortlinks.metabox.SEO.title'                               => 'https://yoa.st/33g',
		'shortlinks.metabox.SEO.titleCall_to_action'                 => 'https://yoa.st/33h',
		'shortlinks.metabox.SEO.url'                                 => 'https://yoa.st/33o',
		'shortlinks.metabox.SEO.urlCall_to_action'                   => 'https://yoa.st/33p',
		'shortlinks.metabox.SEO.text_length'                         => 'https://yoa.st/34n',
		'shortlinks.metabox.SEO.text_lengthCall_to_action'           => 'https://yoa.st/340',
		'shortlinks.metabox.SEO.competing_links'                     => 'https://yoa.st/34l',
		'shortlinks.metabox.SEO.competing_linksCall_to_action'       => 'https://yoa.st/34m',
		'shortlinks.metabox.SEO.subheadingsKeyword'                  => 'https://yoa.st/33m',
		'shortlinks.metabox.SEO.subheadingsKeywordCall_to_action'    => 'https://yoa.st/33n',
		'shortlinks.metabox.SEO.SingleH1'                            => 'https://yoa.st/3a6',
		'shortlinks.metabox.SEO.SingleH1Call_to_action'              => 'https://yoa.st/3a7',
		'shortlinks.metabox.SEO.page_title_width'                    => 'https://yoa.st/34h',
		'shortlinks.metabox.SEO.page_title_widthCall_to_action'      => 'https://yoa.st/34i',
		'shortlinks.metabox.SEO.outbound_links'                      => 'https://yoa.st/34f',
		'shortlinks.metabox.SEO.outbound_linksCall_to_action'        => 'https://yoa.st/34g',
		'shortlinks.metabox.SEO.metadescription_length'              => 'https://yoa.st/34d',
		'shortlinks.metabox.SEO.metadescription_lengthCall_to_action' => 'https://yoa.st/34e',
		'shortlinks.metabox.SEO.metadescription_keyword'             => 'https://yoa.st/33k',
		'shortlinks.metabox.SEO.metadescription_keywordCall_to_action' => 'https://yoa.st/33l',
		'shortlinks.metabox.SEO.keyword_density'                     => 'https://yoa.st/33v',
		'shortlinks.metabox.SEO.keyword_densityCall_to_action'       => 'https://yoa.st/33w',
		'shortlinks.metabox.SEO.keyphrase_length'                    => 'https://yoa.st/33i',
		'shortlinks.metabox.SEO.keyphrase_lengthCall_to_action'      => 'https://yoa.st/33j',
		'shortlinks.metabox.SEO.keyphrase_in_image'                  => 'https://yoa.st/4f7',
		'shortlinks.metabox.SEO.keyphrase_in_imageCall_to_action'    => 'https://yoa.st/4f6',
		'shortlinks.metabox.SEO.keyphrase_distribution'              => 'https://yoa.st/33q',
		'shortlinks.metabox.SEO.keyphrase_distributionCall_to_action' => 'https://yoa.st/33u',
		'shortlinks.metabox.SEO.introduction_keword'                 => 'https://yoa.st/33e',
		'shortlinks.metabox.SEO.introduction_kewordCall_to_action'   => 'https://yoa.st/33f',
		'shortlinks.metabox.internal_links'                          => 'https://yoa.st/33z',
		'shortlinks.metabox.SEO.internal_linksCall_to_action'        => 'https://yoa.st/34a',
		'shortlinks.metabox.SEO.image_count'                         => 'https://yoa.st/4f4',
		'shortlinks.metabox.SEO.image_countCall_to_action'           => 'https://yoa.st/4f5',
		'shortlinks.metabox.SEO.function_words_in_keyphrase'         => 'https://yoa.st/functionwordskeyphrase-1',
		'shortlinks.metabox.SEO.function_words_in_keyphraseCall_to_action' => 'https://yoa.st/functionwordskeyphrase-2',
		'shortlinks.metabox.readability.transition_words'            => 'https://yoa.st/34z',
		'shortlinks.metabox.readability.transition_wordsCall_to_action' => 'https://yoa.st/35a',
		'shortlinks.metabox.readability.text_presence'               => 'https://yoa.st/35h',
		'shortlinks.metabox.readability.text_presenceCall_to_action' => 'https://yoa.st/35i',
		'shortlinks.metabox.readability.subheading_distribution'     => 'ttps://yoa.st/34x',
		'shortlinks.metabox.readability.subheading_distributionCall_to_action' => 'https://yoa.st/34y',
		'shortlinks.metabox.readability.sentence_length'             => 'https://yoa.st/34v',
		'shortlinks.metabox.readability.sentence_lengthCall_to_action' => 'https://yoa.st/34w',
		'shortlinks.metabox.readability.sentence_beginnings'         => 'https://yoa.st/35f',
		'shortlinks.metabox.readability.sentence_beginningsCall_to_action' => 'https://yoa.st/35g',
		'shortlinks.metabox.readability.passive_voice'               => 'https://yoa.st/34t',
		'shortlinks.metabox.readability.passive_voiceCall_to_action' => 'https://yoa.st/34u',
		'shortlinks.metabox.readability.paragraph_too_long'          => 'https://yoa.st/35d',
		'shortlinks.metabox.readability.paragraph_too_longCall_to_action' => 'https://yoa.st/35e',
		'shortlinks.metabox.flesch.reading.ease'                     => 'https://yoa.st/34r',
		'shortlinks.metabox.flesch.reading.easeCall_to_action'       => 'https://yoa.st/34s',

	];

	/**
	 * Registers all hooks to WordPress.
	 *
	 * @return void
	 */
	public function register_hooks() {
		add_filter( 'wpseo_admin_l10n', [ $this, 'expose_shortlinks' ] );
	}

	/**
	 * Adds shortlinks to the passed array.
	 *
	 * @param array $input The array to add shortlinks to.
	 *
	 * @return array The passed array with the additional shortlinks.
	 */
	public function expose_shortlinks( $input ) {
		foreach ( $this->get_shortlinks() as $key => $shortlink ) {
			$input[ $key ] = WPSEO_Shortlinker::get( $shortlink );
		}

		$input['default_query_params'] = WPSEO_Shortlinker::get_query_params();

		return $input;
	}

	/**
	 * Retrieves the shortlinks.
	 *
	 * @return array The shortlinks.
	 */
	private function get_shortlinks() {
		if ( ! $this->is_term_edit() ) {
			return $this->shortlinks;
		}

		$shortlinks = $this->shortlinks;

		$shortlinks['shortlinks.upsell.metabox.focus_keyword_synonyms_link']     = 'https://yoa.st/textlink-synonyms-popup-metabox-term';
		$shortlinks['shortlinks.upsell.metabox.focus_keyword_synonyms_button']   = 'https://yoa.st/keyword-synonyms-popup-term';
		$shortlinks['shortlinks.upsell.metabox.focus_keyword_additional_link']   = 'https://yoa.st/textlink-keywords-popup-metabox-term';
		$shortlinks['shortlinks.upsell.metabox.focus_keyword_additional_button'] = 'https://yoa.st/add-keywords-popup-term';
		$shortlinks['shortlinks.upsell.metabox.additional_link']                 = 'https://yoa.st/textlink-keywords-metabox-term';
		$shortlinks['shortlinks.upsell.metabox.additional_button']               = 'https://yoa.st/add-keywords-metabox-term';
		$shortlinks['shortlinks.upsell.sidebar.morphology_upsell_metabox']       = 'https://yoa.st/morphology-upsell-metabox-term';

		return $shortlinks;
	}

	/**
	 * Checks if the current page is a term edit page.
	 *
	 * @return bool True when page is term edit.
	 */
	private function is_term_edit() {
		global $pagenow;

		return WPSEO_Taxonomy::is_term_edit( $pagenow );
	}
}
