<?php

namespace Yoast\WP\SEO\Generated;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\Exception\InvalidArgumentException;
use Symfony\Component\DependencyInjection\Exception\LogicException;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;
use Symfony\Component\DependencyInjection\ParameterBag\FrozenParameterBag;

/**
 * This class has been auto-generated
 * by the Symfony Dependency Injection Component.
 *
 * @final since Symfony 3.3
 */
class Cached_Container extends Container
{
    private $parameters;
    private $targetDirs = [];

    public function __construct()
    {
        $this->services = [];
        $this->normalizedIds = [
            'wpseo_breadcrumbs' => 'WPSEO_Breadcrumbs',
            'wpseo_frontend' => 'WPSEO_Frontend',
            'wpseo_replace_vars' => 'WPSEO_Replace_Vars',
            'yoast\\wp\\seo\\builders\\indexable_author_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Author_Builder',
            'yoast\\wp\\seo\\builders\\indexable_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Builder',
            'yoast\\wp\\seo\\builders\\indexable_date_archive_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Date_Archive_Builder',
            'yoast\\wp\\seo\\builders\\indexable_hierarchy_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Hierarchy_Builder',
            'yoast\\wp\\seo\\builders\\indexable_home_page_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Home_Page_Builder',
            'yoast\\wp\\seo\\builders\\indexable_post_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Post_Builder',
            'yoast\\wp\\seo\\builders\\indexable_post_type_archive_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Post_Type_Archive_Builder',
            'yoast\\wp\\seo\\builders\\indexable_system_page_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_System_Page_Builder',
            'yoast\\wp\\seo\\builders\\indexable_term_builder' => 'Yoast\\WP\\SEO\\Builders\\Indexable_Term_Builder',
            'yoast\\wp\\seo\\commands\\generate_indexables_command' => 'Yoast\\WP\\SEO\\Commands\\Generate_Indexables_Command',
            'yoast\\wp\\seo\\conditionals\\admin_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Admin_Conditional',
            'yoast\\wp\\seo\\conditionals\\breadcrumbs_enabled_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Breadcrumbs_Enabled_Conditional',
            'yoast\\wp\\seo\\conditionals\\development_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Development_Conditional',
            'yoast\\wp\\seo\\conditionals\\front_end_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Front_End_Conditional',
            'yoast\\wp\\seo\\conditionals\\jetpack_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Jetpack_Conditional',
            'yoast\\wp\\seo\\conditionals\\migrations_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Migrations_Conditional',
            'yoast\\wp\\seo\\conditionals\\opengraph_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\OpenGraph_Conditional',
            'yoast\\wp\\seo\\conditionals\\primary_category_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\Primary_Category_Conditional',
            'yoast\\wp\\seo\\conditionals\\woocommerce_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\WooCommerce_Conditional',
            'yoast\\wp\\seo\\conditionals\\wpml_conditional' => 'Yoast\\WP\\SEO\\Conditionals\\WPML_Conditional',
            'yoast\\wp\\seo\\config\\dependency_management' => 'Yoast\\WP\\SEO\\Config\\Dependency_Management',
            'yoast\\wp\\seo\\config\\migration_status' => 'Yoast\\WP\\SEO\\Config\\Migration_Status',
            'yoast\\wp\\seo\\config\\ruckusing_framework' => 'Yoast\\WP\\SEO\\Config\\Ruckusing_Framework',
            'yoast\\wp\\seo\\context\\meta_tags_context' => 'Yoast\\WP\\SEO\\Context\\Meta_Tags_Context',
            'yoast\\wp\\seo\\exceptions\\missing_method' => 'Yoast\\WP\\SEO\\Exceptions\\Missing_Method',
            'yoast\\wp\\seo\\generators\\breadcrumbs_generator' => 'Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator',
            'yoast\\wp\\seo\\generators\\og_image_generator' => 'Yoast\\WP\\SEO\\Generators\\OG_Image_Generator',
            'yoast\\wp\\seo\\generators\\twitter_image_generator' => 'Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator',
            'yoast\\wp\\seo\\helpers\\article_helper' => 'Yoast\\WP\\SEO\\Helpers\\Article_Helper',
            'yoast\\wp\\seo\\helpers\\author_archive_helper' => 'Yoast\\WP\\SEO\\Helpers\\Author_Archive_Helper',
            'yoast\\wp\\seo\\helpers\\blocks_helper' => 'Yoast\\WP\\SEO\\Helpers\\Blocks_Helper',
            'yoast\\wp\\seo\\helpers\\current_page_helper' => 'Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper',
            'yoast\\wp\\seo\\helpers\\date_helper' => 'Yoast\\WP\\SEO\\Helpers\\Date_Helper',
            'yoast\\wp\\seo\\helpers\\home_url_helper' => 'Yoast\\WP\\SEO\\Helpers\\Home_Url_Helper',
            'yoast\\wp\\seo\\helpers\\image_helper' => 'Yoast\\WP\\SEO\\Helpers\\Image_Helper',
            'yoast\\wp\\seo\\helpers\\meta_helper' => 'Yoast\\WP\\SEO\\Helpers\\Meta_Helper',
            'yoast\\wp\\seo\\helpers\\open_graph\\image_helper' => 'Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper',
            'yoast\\wp\\seo\\helpers\\options_helper' => 'Yoast\\WP\\SEO\\Helpers\\Options_Helper',
            'yoast\\wp\\seo\\helpers\\pagination_helper' => 'Yoast\\WP\\SEO\\Helpers\\Pagination_Helper',
            'yoast\\wp\\seo\\helpers\\post_helper' => 'Yoast\\WP\\SEO\\Helpers\\Post_Helper',
            'yoast\\wp\\seo\\helpers\\post_type_helper' => 'Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper',
            'yoast\\wp\\seo\\helpers\\product_helper' => 'Yoast\\WP\\SEO\\Helpers\\Product_Helper',
            'yoast\\wp\\seo\\helpers\\redirect_helper' => 'Yoast\\WP\\SEO\\Helpers\\Redirect_Helper',
            'yoast\\wp\\seo\\helpers\\robots_helper' => 'Yoast\\WP\\SEO\\Helpers\\Robots_Helper',
            'yoast\\wp\\seo\\helpers\\schema\\html_helper' => 'Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper',
            'yoast\\wp\\seo\\helpers\\schema\\id_helper' => 'Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper',
            'yoast\\wp\\seo\\helpers\\schema\\image_helper' => 'Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper',
            'yoast\\wp\\seo\\helpers\\site_helper' => 'Yoast\\WP\\SEO\\Helpers\\Site_Helper',
            'yoast\\wp\\seo\\helpers\\string_helper' => 'Yoast\\WP\\SEO\\Helpers\\String_Helper',
            'yoast\\wp\\seo\\helpers\\taxonomy_helper' => 'Yoast\\WP\\SEO\\Helpers\\Taxonomy_Helper',
            'yoast\\wp\\seo\\helpers\\twitter\\image_helper' => 'Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper',
            'yoast\\wp\\seo\\helpers\\url_helper' => 'Yoast\\WP\\SEO\\Helpers\\Url_Helper',
            'yoast\\wp\\seo\\helpers\\user_helper' => 'Yoast\\WP\\SEO\\Helpers\\User_Helper',
            'yoast\\wp\\seo\\initializers\\database_setup' => 'Yoast\\WP\\SEO\\Initializers\\Database_Setup',
            'yoast\\wp\\seo\\initializers\\migration_runner' => 'Yoast\\WP\\SEO\\Initializers\\Migration_Runner',
            'yoast\\wp\\seo\\integrations\\breadcrumbs_integration' => 'Yoast\\WP\\SEO\\Integrations\\Breadcrumbs_Integration',
            'yoast\\wp\\seo\\integrations\\compatibility\\wpml' => 'Yoast\\WP\\SEO\\Integrations\\Compatibility\\WPML',
            'yoast\\wp\\seo\\integrations\\front_end\\category_description' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Category_Description',
            'yoast\\wp\\seo\\integrations\\front_end\\comment_link_fixer' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Comment_Link_Fixer',
            'yoast\\wp\\seo\\integrations\\front_end\\force_rewrite_title' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Force_Rewrite_Title',
            'yoast\\wp\\seo\\integrations\\front_end\\handle_404' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Handle_404',
            'yoast\\wp\\seo\\integrations\\front_end\\indexing_controls' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Indexing_Controls',
            'yoast\\wp\\seo\\integrations\\front_end\\opengraph_oembed' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\OpenGraph_OEmbed',
            'yoast\\wp\\seo\\integrations\\front_end\\redirects' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Redirects',
            'yoast\\wp\\seo\\integrations\\front_end\\rss_footer_embed' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\RSS_Footer_Embed',
            'yoast\\wp\\seo\\integrations\\front_end\\theme_titles' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Theme_Titles',
            'yoast\\wp\\seo\\integrations\\front_end\\webmaster_tools_meta' => 'Yoast\\WP\\SEO\\Integrations\\Front_End\\Webmaster_Tools_Meta',
            'yoast\\wp\\seo\\integrations\\front_end_integration' => 'Yoast\\WP\\SEO\\Integrations\\Front_End_Integration',
            'yoast\\wp\\seo\\integrations\\primary_category' => 'Yoast\\WP\\SEO\\Integrations\\Primary_Category',
            'yoast\\wp\\seo\\integrations\\third_party\\bbpress' => 'Yoast\\WP\\SEO\\Integrations\\Third_Party\\BbPress',
            'yoast\\wp\\seo\\integrations\\third_party\\jetpack' => 'Yoast\\WP\\SEO\\Integrations\\Third_Party\\Jetpack',
            'yoast\\wp\\seo\\integrations\\third_party\\woocommerce' => 'Yoast\\WP\\SEO\\Integrations\\Third_Party\\WooCommerce',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_author_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Author_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_date_archive_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_home_page_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Home_Page_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_permalink_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Permalink_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_post_type_archive_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_post_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_static_home_page_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_system_page_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_System_Page_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\indexable_term_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher',
            'yoast\\wp\\seo\\integrations\\watchers\\primary_term_watcher' => 'Yoast\\WP\\SEO\\Integrations\\Watchers\\Primary_Term_Watcher',
            'yoast\\wp\\seo\\loader' => 'Yoast\\WP\\SEO\\Loader',
            'yoast\\wp\\seo\\loggers\\database_logger' => 'Yoast\\WP\\SEO\\Loggers\\Database_Logger',
            'yoast\\wp\\seo\\loggers\\logger' => 'Yoast\\WP\\SEO\\Loggers\\Logger',
            'yoast\\wp\\seo\\loggers\\migration_logger' => 'Yoast\\WP\\SEO\\Loggers\\Migration_Logger',
            'yoast\\wp\\seo\\memoizer\\meta_tags_context_memoizer' => 'Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer',
            'yoast\\wp\\seo\\memoizer\\presentation_memoizer' => 'Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer',
            'yoast\\wp\\seo\\oauth\\client' => 'Yoast\\WP\\SEO\\Oauth\\Client',
            'yoast\\wp\\seo\\presentations\\abstract_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Abstract_Presentation',
            'yoast\\wp\\seo\\presentations\\generators\\og_locale_generator' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\article' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Article',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\author' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Author',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\breadcrumb' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Breadcrumb',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\faq' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\FAQ',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\howto' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\HowTo',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\main_image' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Main_Image',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\organization' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Organization',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\person' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Person',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\webpage' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\WebPage',
            'yoast\\wp\\seo\\presentations\\generators\\schema\\website' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Website',
            'yoast\\wp\\seo\\presentations\\generators\\schema_generator' => 'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator',
            'yoast\\wp\\seo\\presentations\\indexable_author_archive_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Author_Archive_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_date_archive_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Date_Archive_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_error_page_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Error_Page_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_home_page_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Home_Page_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_post_type_archive_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Archive_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_post_type_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_search_result_page_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Search_Result_Page_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_static_home_page_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Home_Page_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_static_posts_page_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Posts_Page_Presentation',
            'yoast\\wp\\seo\\presentations\\indexable_term_archive_presentation' => 'Yoast\\WP\\SEO\\Presentations\\Indexable_Term_Archive_Presentation',
            'yoast\\wp\\seo\\presenters\\breadcrumbs_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter',
            'yoast\\wp\\seo\\presenters\\canonical_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Canonical_Presenter',
            'yoast\\wp\\seo\\presenters\\debug\\marker_close_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Close_Presenter',
            'yoast\\wp\\seo\\presenters\\debug\\marker_open_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Open_Presenter',
            'yoast\\wp\\seo\\presenters\\googlebot_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Googlebot_Presenter',
            'yoast\\wp\\seo\\presenters\\meta_description_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Meta_Description_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\article_author_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Author_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\article_modified_time_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\article_published_time_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Published_Time_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\article_publisher_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Publisher_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\description_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Description_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\fb_app_id_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\FB_App_ID_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\image_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Image_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\locale_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Locale_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\site_name_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Site_Name_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\title_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Title_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\type_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Type_Presenter',
            'yoast\\wp\\seo\\presenters\\open_graph\\url_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Url_Presenter',
            'yoast\\wp\\seo\\presenters\\rel_next_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Rel_Next_Presenter',
            'yoast\\wp\\seo\\presenters\\rel_prev_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Rel_Prev_Presenter',
            'yoast\\wp\\seo\\presenters\\robots_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Robots_Presenter',
            'yoast\\wp\\seo\\presenters\\schema_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Schema_Presenter',
            'yoast\\wp\\seo\\presenters\\title_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Title_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\card_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Card_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\creator_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Creator_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\description_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Description_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\image_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Image_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\site_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Site_Presenter',
            'yoast\\wp\\seo\\presenters\\twitter\\title_presenter' => 'Yoast\\WP\\SEO\\Presenters\\Twitter\\Title_Presenter',
            'yoast\\wp\\seo\\repositories\\indexable_hierarchy_repository' => 'Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository',
            'yoast\\wp\\seo\\repositories\\indexable_repository' => 'Yoast\\WP\\SEO\\Repositories\\Indexable_Repository',
            'yoast\\wp\\seo\\repositories\\primary_term_repository' => 'Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository',
            'yoast\\wp\\seo\\repositories\\seo_links_repository' => 'Yoast\\WP\\SEO\\Repositories\\SEO_Links_Repository',
            'yoast\\wp\\seo\\repositories\\seo_meta_repository' => 'Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository',
            'yoast\\wp\\seo\\surfaces\\classes_surface' => 'Yoast\\WP\\SEO\\Surfaces\\Classes_Surface',
            'yoast\\wp\\seo\\surfaces\\current_page_surface' => 'Yoast\\WP\\SEO\\Surfaces\\Current_Page_Surface',
            'yoast\\wp\\seo\\values\\images' => 'Yoast\\WP\\SEO\\Values\\Images',
            'yoast\\wp\\seo\\values\\open_graph\\images' => 'Yoast\\WP\\SEO\\Values\\Open_Graph\\Images',
            'yoast\\wp\\seo\\wrappers\\wp_query_wrapper' => 'Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper',
            'yoast\\wp\\seo\\wrappers\\wp_rewrite_wrapper' => 'Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper',
            'yoastseo_vendor\\symfony\\component\\dependencyinjection\\containerinterface' => 'YoastSEO_Vendor\\YoastSEO_Vendor\\Symfony\\Component\\DependencyInjection\\ContainerInterface',
        ];
        $this->methodMap = [
            'WPSEO_Breadcrumbs' => 'getWPSEOBreadcrumbsService',
            'WPSEO_Frontend' => 'getWPSEOFrontendService',
            'WPSEO_Replace_Vars' => 'getWPSEOReplaceVarsService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Author_Builder' => 'getIndexableAuthorBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Builder' => 'getIndexableBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Date_Archive_Builder' => 'getIndexableDateArchiveBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Hierarchy_Builder' => 'getIndexableHierarchyBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Home_Page_Builder' => 'getIndexableHomePageBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Post_Builder' => 'getIndexablePostBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Post_Type_Archive_Builder' => 'getIndexablePostTypeArchiveBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_System_Page_Builder' => 'getIndexableSystemPageBuilderService',
            'Yoast\\WP\\SEO\\Builders\\Indexable_Term_Builder' => 'getIndexableTermBuilderService',
            'Yoast\\WP\\SEO\\Commands\\Generate_Indexables_Command' => 'getGenerateIndexablesCommandService',
            'Yoast\\WP\\SEO\\Conditionals\\Admin_Conditional' => 'getAdminConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Breadcrumbs_Enabled_Conditional' => 'getBreadcrumbsEnabledConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Development_Conditional' => 'getDevelopmentConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Front_End_Conditional' => 'getFrontEndConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Jetpack_Conditional' => 'getJetpackConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Migrations_Conditional' => 'getMigrationsConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\OpenGraph_Conditional' => 'getOpenGraphConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\Primary_Category_Conditional' => 'getPrimaryCategoryConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\WPML_Conditional' => 'getWPMLConditionalService',
            'Yoast\\WP\\SEO\\Conditionals\\WooCommerce_Conditional' => 'getWooCommerceConditionalService',
            'Yoast\\WP\\SEO\\Config\\Dependency_Management' => 'getDependencyManagementService',
            'Yoast\\WP\\SEO\\Config\\Migration_Status' => 'getMigrationStatusService',
            'Yoast\\WP\\SEO\\Config\\Ruckusing_Framework' => 'getRuckusingFrameworkService',
            'Yoast\\WP\\SEO\\Context\\Meta_Tags_Context' => 'getMetaTagsContextService',
            'Yoast\\WP\\SEO\\Exceptions\\Missing_Method' => 'getMissingMethodService',
            'Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator' => 'getBreadcrumbsGeneratorService',
            'Yoast\\WP\\SEO\\Generators\\OG_Image_Generator' => 'getOGImageGeneratorService',
            'Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator' => 'getTwitterImageGeneratorService',
            'Yoast\\WP\\SEO\\Helpers\\Article_Helper' => 'getArticleHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Author_Archive_Helper' => 'getAuthorArchiveHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Blocks_Helper' => 'getBlocksHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper' => 'getCurrentPageHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Date_Helper' => 'getDateHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Home_Url_Helper' => 'getHomeUrlHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Image_Helper' => 'getImageHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Meta_Helper' => 'getMetaHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper' => 'getImageHelper2Service',
            'Yoast\\WP\\SEO\\Helpers\\Options_Helper' => 'getOptionsHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Pagination_Helper' => 'getPaginationHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Post_Helper' => 'getPostHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper' => 'getPostTypeHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Product_Helper' => 'getProductHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Redirect_Helper' => 'getRedirectHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Robots_Helper' => 'getRobotsHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper' => 'getHTMLHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper' => 'getIDHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper' => 'getImageHelper3Service',
            'Yoast\\WP\\SEO\\Helpers\\Site_Helper' => 'getSiteHelperService',
            'Yoast\\WP\\SEO\\Helpers\\String_Helper' => 'getStringHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Taxonomy_Helper' => 'getTaxonomyHelperService',
            'Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper' => 'getImageHelper4Service',
            'Yoast\\WP\\SEO\\Helpers\\Url_Helper' => 'getUrlHelperService',
            'Yoast\\WP\\SEO\\Helpers\\User_Helper' => 'getUserHelperService',
            'Yoast\\WP\\SEO\\Initializers\\Database_Setup' => 'getDatabaseSetupService',
            'Yoast\\WP\\SEO\\Initializers\\Migration_Runner' => 'getMigrationRunnerService',
            'Yoast\\WP\\SEO\\Integrations\\Breadcrumbs_Integration' => 'getBreadcrumbsIntegrationService',
            'Yoast\\WP\\SEO\\Integrations\\Compatibility\\WPML' => 'getWPMLService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Category_Description' => 'getCategoryDescriptionService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Comment_Link_Fixer' => 'getCommentLinkFixerService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Force_Rewrite_Title' => 'getForceRewriteTitleService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Handle_404' => 'getHandle404Service',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Indexing_Controls' => 'getIndexingControlsService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\OpenGraph_OEmbed' => 'getOpenGraphOEmbedService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\RSS_Footer_Embed' => 'getRSSFooterEmbedService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Redirects' => 'getRedirectsService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Theme_Titles' => 'getThemeTitlesService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End\\Webmaster_Tools_Meta' => 'getWebmasterToolsMetaService',
            'Yoast\\WP\\SEO\\Integrations\\Front_End_Integration' => 'getFrontEndIntegrationService',
            'Yoast\\WP\\SEO\\Integrations\\Primary_Category' => 'getPrimaryCategoryService',
            'Yoast\\WP\\SEO\\Integrations\\Third_Party\\BbPress' => 'getBbPressService',
            'Yoast\\WP\\SEO\\Integrations\\Third_Party\\Jetpack' => 'getJetpackService',
            'Yoast\\WP\\SEO\\Integrations\\Third_Party\\WooCommerce' => 'getWooCommerceService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Author_Watcher' => 'getIndexableAuthorWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher' => 'getIndexableDateArchiveWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Home_Page_Watcher' => 'getIndexableHomePageWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Permalink_Watcher' => 'getIndexablePermalinkWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher' => 'getIndexablePostTypeArchiveWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher' => 'getIndexablePostWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher' => 'getIndexableStaticHomePageWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_System_Page_Watcher' => 'getIndexableSystemPageWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher' => 'getIndexableTermWatcherService',
            'Yoast\\WP\\SEO\\Integrations\\Watchers\\Primary_Term_Watcher' => 'getPrimaryTermWatcherService',
            'Yoast\\WP\\SEO\\Loader' => 'getLoaderService',
            'Yoast\\WP\\SEO\\Loggers\\Database_Logger' => 'getDatabaseLoggerService',
            'Yoast\\WP\\SEO\\Loggers\\Logger' => 'getLoggerService',
            'Yoast\\WP\\SEO\\Loggers\\Migration_Logger' => 'getMigrationLoggerService',
            'Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer' => 'getMetaTagsContextMemoizerService',
            'Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer' => 'getPresentationMemoizerService',
            'Yoast\\WP\\SEO\\Oauth\\Client' => 'getClientService',
            'Yoast\\WP\\SEO\\Presentations\\Abstract_Presentation' => 'getAbstractPresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator' => 'getOGLocaleGeneratorService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Article' => 'getArticleService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Author' => 'getAuthorService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Breadcrumb' => 'getBreadcrumbService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\FAQ' => 'getFAQService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\HowTo' => 'getHowToService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Main_Image' => 'getMainImageService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Organization' => 'getOrganizationService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Person' => 'getPersonService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\WebPage' => 'getWebPageService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Website' => 'getWebsiteService',
            'Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator' => 'getSchemaGeneratorService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Author_Archive_Presentation' => 'getIndexableAuthorArchivePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Date_Archive_Presentation' => 'getIndexableDateArchivePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Error_Page_Presentation' => 'getIndexableErrorPagePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Home_Page_Presentation' => 'getIndexableHomePagePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Archive_Presentation' => 'getIndexablePostTypeArchivePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Presentation' => 'getIndexablePostTypePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Presentation' => 'getIndexablePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Search_Result_Page_Presentation' => 'getIndexableSearchResultPagePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Home_Page_Presentation' => 'getIndexableStaticHomePagePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Posts_Page_Presentation' => 'getIndexableStaticPostsPagePresentationService',
            'Yoast\\WP\\SEO\\Presentations\\Indexable_Term_Archive_Presentation' => 'getIndexableTermArchivePresentationService',
            'Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter' => 'getBreadcrumbsPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Canonical_Presenter' => 'getCanonicalPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Close_Presenter' => 'getMarkerClosePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Open_Presenter' => 'getMarkerOpenPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Googlebot_Presenter' => 'getGooglebotPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Meta_Description_Presenter' => 'getMetaDescriptionPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Author_Presenter' => 'getArticleAuthorPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter' => 'getArticleModifiedTimePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Published_Time_Presenter' => 'getArticlePublishedTimePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Publisher_Presenter' => 'getArticlePublisherPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Description_Presenter' => 'getDescriptionPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\FB_App_ID_Presenter' => 'getFBAppIDPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Image_Presenter' => 'getImagePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Locale_Presenter' => 'getLocalePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Site_Name_Presenter' => 'getSiteNamePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Title_Presenter' => 'getTitlePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Type_Presenter' => 'getTypePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Url_Presenter' => 'getUrlPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Rel_Next_Presenter' => 'getRelNextPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Rel_Prev_Presenter' => 'getRelPrevPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Robots_Presenter' => 'getRobotsPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Schema_Presenter' => 'getSchemaPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Title_Presenter' => 'getTitlePresenter2Service',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Card_Presenter' => 'getCardPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Creator_Presenter' => 'getCreatorPresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Description_Presenter' => 'getDescriptionPresenter2Service',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Image_Presenter' => 'getImagePresenter2Service',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Site_Presenter' => 'getSitePresenterService',
            'Yoast\\WP\\SEO\\Presenters\\Twitter\\Title_Presenter' => 'getTitlePresenter3Service',
            'Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository' => 'getIndexableHierarchyRepositoryService',
            'Yoast\\WP\\SEO\\Repositories\\Indexable_Repository' => 'getIndexableRepositoryService',
            'Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository' => 'getPrimaryTermRepositoryService',
            'Yoast\\WP\\SEO\\Repositories\\SEO_Links_Repository' => 'getSEOLinksRepositoryService',
            'Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository' => 'getSEOMetaRepositoryService',
            'Yoast\\WP\\SEO\\Surfaces\\Classes_Surface' => 'getClassesSurfaceService',
            'Yoast\\WP\\SEO\\Surfaces\\Current_Page_Surface' => 'getCurrentPageSurfaceService',
            'Yoast\\WP\\SEO\\Values\\Images' => 'getImagesService',
            'Yoast\\WP\\SEO\\Values\\Open_Graph\\Images' => 'getImages2Service',
            'Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper' => 'getWPQueryWrapperService',
            'Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper' => 'getWPRewriteWrapperService',
            'wpdb' => 'getWpdbService',
        ];
        $this->privates = [
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => true,
            'WPSEO_Replace_Vars' => true,
            'wpdb' => true,
        ];
        $this->aliases = [
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => 'service_container',
        ];
    }

    public function getRemovedIds()
    {
        return [
            'Psr\\Container\\ContainerInterface' => true,
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => true,
            'WPSEO_Replace_Vars' => true,
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => true,
            'Yoast\\WP\\SEO\\Commands\\Command_Interface' => true,
            'wpdb' => true,
        ];
    }

    public function compile()
    {
        throw new LogicException('You cannot compile a dumped container that was already compiled.');
    }

    public function isCompiled()
    {
        return true;
    }

    public function isFrozen()
    {
        @trigger_error(sprintf('The %s() method is deprecated since Symfony 3.3 and will be removed in 4.0. Use the isCompiled() method instead.', __METHOD__), E_USER_DEPRECATED);

        return true;
    }

    /**
     * Gets the public 'WPSEO_Breadcrumbs' shared autowired service.
     *
     * @return \WPSEO_Breadcrumbs
     */
    protected function getWPSEOBreadcrumbsService()
    {
        return $this->services['WPSEO_Breadcrumbs'] = new \WPSEO_Breadcrumbs(${($_ = isset($this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter']) ? $this->services['Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter'] : $this->getBreadcrumbsPresenterService()) && false ?: '_'});
    }

    /**
     * Gets the public 'WPSEO_Frontend' shared autowired service.
     *
     * @return \WPSEO_Frontend
     */
    protected function getWPSEOFrontendService()
    {
        return $this->services['WPSEO_Frontend'] = new \WPSEO_Frontend(${($_ = isset($this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Author_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Author_Builder
     */
    protected function getIndexableAuthorBuilderService()
    {
        $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Author_Builder'] = $instance = new \Yoast\WP\SEO\Builders\Indexable_Author_Builder();

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Builder
     */
    protected function getIndexableBuilderService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Hierarchy_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Hierarchy_Builder'] : $this->getIndexableHierarchyBuilderService()) && false ?: '_'};

        if (isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'])) {
            return $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'];
        }

        $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] = $instance = new \Yoast\WP\SEO\Builders\Indexable_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Author_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Author_Builder'] : $this->getIndexableAuthorBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Builder'] : $this->getIndexablePostBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Term_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Term_Builder'] : $this->getIndexableTermBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Home_Page_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Home_Page_Builder'] : $this->getIndexableHomePageBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Type_Archive_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Type_Archive_Builder'] : $this->getIndexablePostTypeArchiveBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Date_Archive_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Date_Archive_Builder'] : $this->getIndexableDateArchiveBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_System_Page_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_System_Page_Builder'] : $this->getIndexableSystemPageBuilderService()) && false ?: '_'}, $a);

        $instance->set_indexable_repository(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Date_Archive_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Date_Archive_Builder
     */
    protected function getIndexableDateArchiveBuilderService()
    {
        return $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Date_Archive_Builder'] = new \Yoast\WP\SEO\Builders\Indexable_Date_Archive_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Hierarchy_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Hierarchy_Builder
     */
    protected function getIndexableHierarchyBuilderService()
    {
        $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Hierarchy_Builder'] = $instance = new \Yoast\WP\SEO\Builders\Indexable_Hierarchy_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository'] : ($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\SEO\Repositories\Indexable_Hierarchy_Repository())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository'] : ($this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\SEO\Repositories\Primary_Term_Repository())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_indexable_repository(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Home_Page_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Home_Page_Builder
     */
    protected function getIndexableHomePageBuilderService()
    {
        return $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Home_Page_Builder'] = new \Yoast\WP\SEO\Builders\Indexable_Home_Page_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Post_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Post_Builder
     */
    protected function getIndexablePostBuilderService()
    {
        $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Builder'] = $instance = new \Yoast\WP\SEO\Builders\Indexable_Post_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository'] : ($this->services['Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository'] = new \Yoast\WP\SEO\Repositories\SEO_Meta_Repository())) && false ?: '_'});

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Post_Type_Archive_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Post_Type_Archive_Builder
     */
    protected function getIndexablePostTypeArchiveBuilderService()
    {
        return $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Post_Type_Archive_Builder'] = new \Yoast\WP\SEO\Builders\Indexable_Post_Type_Archive_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_System_Page_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_System_Page_Builder
     */
    protected function getIndexableSystemPageBuilderService()
    {
        return $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_System_Page_Builder'] = new \Yoast\WP\SEO\Builders\Indexable_System_Page_Builder(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Builders\Indexable_Term_Builder' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Builders\Indexable_Term_Builder
     */
    protected function getIndexableTermBuilderService()
    {
        $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Term_Builder'] = $instance = new \Yoast\WP\SEO\Builders\Indexable_Term_Builder();

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Commands\Generate_Indexables_Command' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Commands\Generate_Indexables_Command
     */
    protected function getGenerateIndexablesCommandService()
    {
        return $this->services['Yoast\\WP\\SEO\\Commands\\Generate_Indexables_Command'] = new \Yoast\WP\SEO\Commands\Generate_Indexables_Command(${($_ = isset($this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher']) ? $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher'] : $this->getIndexablePostWatcherService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher']) ? $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher'] : $this->getIndexableTermWatcherService()) && false ?: '_'}, ${($_ = isset($this->services['wpdb']) ? $this->services['wpdb'] : $this->getWpdbService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Admin_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Admin_Conditional
     */
    protected function getAdminConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Admin_Conditional'] = new \Yoast\WP\SEO\Conditionals\Admin_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Breadcrumbs_Enabled_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Breadcrumbs_Enabled_Conditional
     */
    protected function getBreadcrumbsEnabledConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Breadcrumbs_Enabled_Conditional'] = new \Yoast\WP\SEO\Conditionals\Breadcrumbs_Enabled_Conditional(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Development_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Development_Conditional
     */
    protected function getDevelopmentConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Development_Conditional'] = new \Yoast\WP\SEO\Conditionals\Development_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Front_End_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Front_End_Conditional
     */
    protected function getFrontEndConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Front_End_Conditional'] = new \Yoast\WP\SEO\Conditionals\Front_End_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Jetpack_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Jetpack_Conditional
     */
    protected function getJetpackConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Jetpack_Conditional'] = new \Yoast\WP\SEO\Conditionals\Jetpack_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Migrations_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Migrations_Conditional
     */
    protected function getMigrationsConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Migrations_Conditional'] = new \Yoast\WP\SEO\Conditionals\Migrations_Conditional(${($_ = isset($this->services['Yoast\\WP\\SEO\\Config\\Migration_Status']) ? $this->services['Yoast\\WP\\SEO\\Config\\Migration_Status'] : ($this->services['Yoast\\WP\\SEO\\Config\\Migration_Status'] = new \Yoast\WP\SEO\Config\Migration_Status())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\OpenGraph_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\OpenGraph_Conditional
     */
    protected function getOpenGraphConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\OpenGraph_Conditional'] = new \Yoast\WP\SEO\Conditionals\OpenGraph_Conditional(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\Primary_Category_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\Primary_Category_Conditional
     */
    protected function getPrimaryCategoryConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\Primary_Category_Conditional'] = new \Yoast\WP\SEO\Conditionals\Primary_Category_Conditional(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\WPML_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\WPML_Conditional
     */
    protected function getWPMLConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\WPML_Conditional'] = new \Yoast\WP\SEO\Conditionals\WPML_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Conditionals\WooCommerce_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Conditionals\WooCommerce_Conditional
     */
    protected function getWooCommerceConditionalService()
    {
        return $this->services['Yoast\\WP\\SEO\\Conditionals\\WooCommerce_Conditional'] = new \Yoast\WP\SEO\Conditionals\WooCommerce_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Config\Dependency_Management' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Config\Dependency_Management
     */
    protected function getDependencyManagementService()
    {
        return $this->services['Yoast\\WP\\SEO\\Config\\Dependency_Management'] = new \Yoast\WP\SEO\Config\Dependency_Management();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Config\Migration_Status' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Config\Migration_Status
     */
    protected function getMigrationStatusService()
    {
        return $this->services['Yoast\\WP\\SEO\\Config\\Migration_Status'] = new \Yoast\WP\SEO\Config\Migration_Status();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Config\Ruckusing_Framework' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Config\Ruckusing_Framework
     */
    protected function getRuckusingFrameworkService()
    {
        return $this->services['Yoast\\WP\\SEO\\Config\\Ruckusing_Framework'] = new \Yoast\WP\SEO\Config\Ruckusing_Framework(${($_ = isset($this->services['wpdb']) ? $this->services['wpdb'] : $this->getWpdbService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Config\\Dependency_Management']) ? $this->services['Yoast\\WP\\SEO\\Config\\Dependency_Management'] : ($this->services['Yoast\\WP\\SEO\\Config\\Dependency_Management'] = new \Yoast\WP\SEO\Config\Dependency_Management())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Loggers\\Migration_Logger']) ? $this->services['Yoast\\WP\\SEO\\Loggers\\Migration_Logger'] : $this->getMigrationLoggerService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Context\Meta_Tags_Context' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Context\Meta_Tags_Context
     */
    protected function getMetaTagsContextService()
    {
        return $this->services['Yoast\\WP\\SEO\\Context\\Meta_Tags_Context'] = new \Yoast\WP\SEO\Context\Meta_Tags_Context(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Site_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Site_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Site_Helper'] = new \Yoast\WP\SEO\Helpers\Site_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Exceptions\Missing_Method' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Exceptions\Missing_Method
     */
    protected function getMissingMethodService()
    {
        return $this->services['Yoast\\WP\\SEO\\Exceptions\\Missing_Method'] = new \Yoast\WP\SEO\Exceptions\Missing_Method();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Generators\Breadcrumbs_Generator' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Generators\Breadcrumbs_Generator
     */
    protected function getBreadcrumbsGeneratorService()
    {
        return $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] = new \Yoast\WP\SEO\Generators\Breadcrumbs_Generator(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Generators\OG_Image_Generator' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Generators\OG_Image_Generator
     */
    protected function getOGImageGeneratorService()
    {
        return $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] = new \Yoast\WP\SEO\Generators\OG_Image_Generator(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Generators\Twitter_Image_Generator' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Generators\Twitter_Image_Generator
     */
    protected function getTwitterImageGeneratorService()
    {
        return $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] = new \Yoast\WP\SEO\Generators\Twitter_Image_Generator(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Article_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Article_Helper
     */
    protected function getArticleHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] = new \Yoast\WP\SEO\Helpers\Article_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Author_Archive_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Author_Archive_Helper
     */
    protected function getAuthorArchiveHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Author_Archive_Helper'] = new \Yoast\WP\SEO\Helpers\Author_Archive_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Blocks_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Blocks_Helper
     */
    protected function getBlocksHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Blocks_Helper'] = new \Yoast\WP\SEO\Helpers\Blocks_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Current_Page_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Current_Page_Helper
     */
    protected function getCurrentPageHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] = new \Yoast\WP\SEO\Helpers\Current_Page_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Date_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Date_Helper
     */
    protected function getDateHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Home_Url_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Home_Url_Helper
     */
    protected function getHomeUrlHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Home_Url_Helper'] = new \Yoast\WP\SEO\Helpers\Home_Url_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Image_Helper
     */
    protected function getImageHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Meta_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Meta_Helper
     */
    protected function getMetaHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper'] = new \Yoast\WP\SEO\Helpers\Meta_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Open_Graph\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Open_Graph\Image_Helper
     */
    protected function getImageHelper2Service()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Open_Graph\Image_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Options_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Options_Helper
     */
    protected function getOptionsHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Pagination_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Pagination_Helper
     */
    protected function getPaginationHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] = new \Yoast\WP\SEO\Helpers\Pagination_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Rewrite_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Post_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Post_Helper
     */
    protected function getPostHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Post_Type_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Post_Type_Helper
     */
    protected function getPostTypeHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Product_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Product_Helper
     */
    protected function getProductHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper'] = new \Yoast\WP\SEO\Helpers\Product_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Redirect_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Redirect_Helper
     */
    protected function getRedirectHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper'] = new \Yoast\WP\SEO\Helpers\Redirect_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Robots_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Robots_Helper
     */
    protected function getRobotsHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper'] = new \Yoast\WP\SEO\Helpers\Robots_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Schema\HTML_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Schema\HTML_Helper
     */
    protected function getHTMLHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Schema\ID_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Schema\ID_Helper
     */
    protected function getIDHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Schema\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Schema\Image_Helper
     */
    protected function getImageHelper3Service()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\Image_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Site_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Site_Helper
     */
    protected function getSiteHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Site_Helper'] = new \Yoast\WP\SEO\Helpers\Site_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\String_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\String_Helper
     */
    protected function getStringHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Taxonomy_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Taxonomy_Helper
     */
    protected function getTaxonomyHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Taxonomy_Helper'] = new \Yoast\WP\SEO\Helpers\Taxonomy_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Twitter\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Twitter\Image_Helper
     */
    protected function getImageHelper4Service()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Twitter\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Twitter\Image_Helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\Url_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\Url_Helper
     */
    protected function getUrlHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Helpers\User_Helper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Helpers\User_Helper
     */
    protected function getUserHelperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Initializers\Database_Setup' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Initializers\Database_Setup
     */
    protected function getDatabaseSetupService()
    {
        return $this->services['Yoast\\WP\\SEO\\Initializers\\Database_Setup'] = new \Yoast\WP\SEO\Initializers\Database_Setup(${($_ = isset($this->services['Yoast\\WP\\SEO\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] = new \Yoast\WP\SEO\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Initializers\Migration_Runner' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Initializers\Migration_Runner
     */
    protected function getMigrationRunnerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Initializers\\Migration_Runner'] = new \Yoast\WP\SEO\Initializers\Migration_Runner(${($_ = isset($this->services['Yoast\\WP\\SEO\\Config\\Migration_Status']) ? $this->services['Yoast\\WP\\SEO\\Config\\Migration_Status'] : ($this->services['Yoast\\WP\\SEO\\Config\\Migration_Status'] = new \Yoast\WP\SEO\Config\Migration_Status())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Config\\Ruckusing_Framework']) ? $this->services['Yoast\\WP\\SEO\\Config\\Ruckusing_Framework'] : $this->getRuckusingFrameworkService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] = new \Yoast\WP\SEO\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Breadcrumbs_Integration' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Breadcrumbs_Integration
     */
    protected function getBreadcrumbsIntegrationService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Breadcrumbs_Integration'] = new \Yoast\WP\SEO\Integrations\Breadcrumbs_Integration(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter']) ? $this->services['Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter'] : $this->getBreadcrumbsPresenterService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Compatibility\WPML' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Compatibility\WPML
     */
    protected function getWPMLService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Compatibility\\WPML'] = new \Yoast\WP\SEO\Integrations\Compatibility\WPML();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Category_Description' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Category_Description
     */
    protected function getCategoryDescriptionService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Category_Description'] = new \Yoast\WP\SEO\Integrations\Front_End\Category_Description();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Comment_Link_Fixer' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Comment_Link_Fixer
     */
    protected function getCommentLinkFixerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Comment_Link_Fixer'] = new \Yoast\WP\SEO\Integrations\Front_End\Comment_Link_Fixer(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper'] = new \Yoast\WP\SEO\Helpers\Redirect_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper'] = new \Yoast\WP\SEO\Helpers\Robots_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Force_Rewrite_Title' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Force_Rewrite_Title
     */
    protected function getForceRewriteTitleService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Force_Rewrite_Title'] = new \Yoast\WP\SEO\Integrations\Front_End\Force_Rewrite_Title(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Handle_404' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Handle_404
     */
    protected function getHandle404Service()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Handle_404'] = new \Yoast\WP\SEO\Integrations\Front_End\Handle_404(${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Indexing_Controls' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Indexing_Controls
     */
    protected function getIndexingControlsService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Indexing_Controls'] = new \Yoast\WP\SEO\Integrations\Front_End\Indexing_Controls(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Robots_Helper'] = new \Yoast\WP\SEO\Helpers\Robots_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\OpenGraph_OEmbed' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\OpenGraph_OEmbed
     */
    protected function getOpenGraphOEmbedService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\OpenGraph_OEmbed'] = new \Yoast\WP\SEO\Integrations\Front_End\OpenGraph_OEmbed(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper'] = new \Yoast\WP\SEO\Helpers\Meta_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\RSS_Footer_Embed' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\RSS_Footer_Embed
     */
    protected function getRSSFooterEmbedService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\RSS_Footer_Embed'] = new \Yoast\WP\SEO\Integrations\Front_End\RSS_Footer_Embed(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Redirects' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Redirects
     */
    protected function getRedirectsService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Redirects'] = new \Yoast\WP\SEO\Integrations\Front_End\Redirects(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Meta_Helper'] = new \Yoast\WP\SEO\Helpers\Meta_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Redirect_Helper'] = new \Yoast\WP\SEO\Helpers\Redirect_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Theme_Titles' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Theme_Titles
     */
    protected function getThemeTitlesService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Theme_Titles'] = new \Yoast\WP\SEO\Integrations\Front_End\Theme_Titles();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End\Webmaster_Tools_Meta' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End\Webmaster_Tools_Meta
     */
    protected function getWebmasterToolsMetaService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End\\Webmaster_Tools_Meta'] = new \Yoast\WP\SEO\Integrations\Front_End\Webmaster_Tools_Meta(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Front_End_Integration' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Front_End_Integration
     */
    protected function getFrontEndIntegrationService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Front_End_Integration'] = new \Yoast\WP\SEO\Integrations\Front_End_Integration(${($_ = isset($this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, $this);
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Primary_Category' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Primary_Category
     */
    protected function getPrimaryCategoryService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Primary_Category'] = new \Yoast\WP\SEO\Integrations\Primary_Category();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Third_Party\BbPress' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Third_Party\BbPress
     */
    protected function getBbPressService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Third_Party\\BbPress'] = new \Yoast\WP\SEO\Integrations\Third_Party\BbPress(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Third_Party\Jetpack' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Third_Party\Jetpack
     */
    protected function getJetpackService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Third_Party\\Jetpack'] = new \Yoast\WP\SEO\Integrations\Third_Party\Jetpack();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Third_Party\WooCommerce' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Third_Party\WooCommerce
     */
    protected function getWooCommerceService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Third_Party\\WooCommerce'] = new \Yoast\WP\SEO\Integrations\Third_Party\WooCommerce(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Author_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Author_Watcher
     */
    protected function getIndexableAuthorWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Author_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Author_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Date_Archive_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Date_Archive_Watcher
     */
    protected function getIndexableDateArchiveWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Date_Archive_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Home_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Home_Page_Watcher
     */
    protected function getIndexableHomePageWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Home_Page_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Home_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Permalink_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Permalink_Watcher
     */
    protected function getIndexablePermalinkWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Permalink_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Permalink_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher
     */
    protected function getIndexablePostTypeArchiveWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Watcher
     */
    protected function getIndexablePostWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Post_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository'] : ($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\SEO\Repositories\Indexable_Hierarchy_Repository())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Static_Home_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Static_Home_Page_Watcher
     */
    protected function getIndexableStaticHomePageWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Static_Home_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_System_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_System_Page_Watcher
     */
    protected function getIndexableSystemPageWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_System_Page_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_System_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Indexable_Term_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Indexable_Term_Watcher
     */
    protected function getIndexableTermWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Indexable_Term_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Integrations\Watchers\Primary_Term_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Integrations\Watchers\Primary_Term_Watcher
     */
    protected function getPrimaryTermWatcherService()
    {
        return $this->services['Yoast\\WP\\SEO\\Integrations\\Watchers\\Primary_Term_Watcher'] = new \Yoast\WP\SEO\Integrations\Watchers\Primary_Term_Watcher(${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository'] : ($this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\SEO\Repositories\Primary_Term_Repository())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Loader' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Loader
     */
    protected function getLoaderService()
    {
        $this->services['Yoast\\WP\\SEO\\Loader'] = $instance = new \Yoast\WP\SEO\Loader($this);

        $instance->register_initializer('WPSEO_Breadcrumbs');
        $instance->register_initializer('WPSEO_Frontend');
        $instance->register_command('Yoast\\WP\\SEO\\Commands\\Generate_Indexables_Command');
        $instance->register_initializer('Yoast\\WP\\SEO\\Initializers\\Database_Setup');
        $instance->register_initializer('Yoast\\WP\\SEO\\Initializers\\Migration_Runner');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Breadcrumbs_Integration');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Compatibility\\WPML');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End_Integration');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Category_Description');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Comment_Link_Fixer');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Force_Rewrite_Title');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Handle_404');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Indexing_Controls');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\OpenGraph_OEmbed');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Redirects');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\RSS_Footer_Embed');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Theme_Titles');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Front_End\\Webmaster_Tools_Meta');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Primary_Category');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Third_Party\\BbPress');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Third_Party\\Jetpack');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Third_Party\\WooCommerce');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Author_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Home_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Permalink_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Post_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_System_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Indexable_Term_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Integrations\\Watchers\\Primary_Term_Watcher');
        $instance->register_integration('Yoast\\WP\\SEO\\Loggers\\Database_Logger');

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Loggers\Database_Logger' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Loggers\Database_Logger
     */
    protected function getDatabaseLoggerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Loggers\\Database_Logger'] = new \Yoast\WP\SEO\Loggers\Database_Logger();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Loggers\Logger' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Loggers\Logger
     */
    protected function getLoggerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] = new \Yoast\WP\SEO\Loggers\Logger();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Loggers\Migration_Logger' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Loggers\Migration_Logger
     */
    protected function getMigrationLoggerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Loggers\\Migration_Logger'] = new \Yoast\WP\SEO\Loggers\Migration_Logger(${($_ = isset($this->services['Yoast\\WP\\SEO\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] = new \Yoast\WP\SEO\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Memoizer\Meta_Tags_Context_Memoizer' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Memoizer\Meta_Tags_Context_Memoizer
     */
    protected function getMetaTagsContextMemoizerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer'] = new \Yoast\WP\SEO\Memoizer\Meta_Tags_Context_Memoizer(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Blocks_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Blocks_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Blocks_Helper'] = new \Yoast\WP\SEO\Helpers\Blocks_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Context\\Meta_Tags_Context']) ? $this->services['Yoast\\WP\\SEO\\Context\\Meta_Tags_Context'] : $this->getMetaTagsContextService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer']) ? $this->services['Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer'] : ($this->services['Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer'] = new \Yoast\WP\SEO\Memoizer\Presentation_Memoizer($this))) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Memoizer\Presentation_Memoizer' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Memoizer\Presentation_Memoizer
     */
    protected function getPresentationMemoizerService()
    {
        return $this->services['Yoast\\WP\\SEO\\Memoizer\\Presentation_Memoizer'] = new \Yoast\WP\SEO\Memoizer\Presentation_Memoizer($this);
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Oauth\Client' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Oauth\Client
     */
    protected function getClientService()
    {
        return $this->services['Yoast\\WP\\SEO\\Oauth\\Client'] = new \Yoast\WP\SEO\Oauth\Client();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Abstract_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Abstract_Presentation
     */
    protected function getAbstractPresentationService()
    {
        return $this->services['Yoast\\WP\\SEO\\Presentations\\Abstract_Presentation'] = new \Yoast\WP\SEO\Presentations\Abstract_Presentation();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator
     */
    protected function getOGLocaleGeneratorService()
    {
        return $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Article' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Article
     */
    protected function getArticleService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Article'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Article(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] = new \Yoast\WP\SEO\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Author' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Author
     */
    protected function getAuthorService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Author'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Author(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] = new \Yoast\WP\SEO\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] : $this->getImageHelper3Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Breadcrumb' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Breadcrumb
     */
    protected function getBreadcrumbService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Breadcrumb'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Breadcrumb(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\FAQ' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\FAQ
     */
    protected function getFAQService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\FAQ'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\FAQ(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Article_Helper'] = new \Yoast\WP\SEO\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\HowTo' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\HowTo
     */
    protected function getHowToService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\HowTo'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\HowTo(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] : $this->getImageHelper3Service()) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Main_Image' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Main_Image
     */
    protected function getMainImageService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Main_Image'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Main_Image(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] : $this->getImageHelper3Service()) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Organization' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Organization
     */
    protected function getOrganizationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Organization'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Organization(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] : $this->getImageHelper3Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Person' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Person
     */
    protected function getPersonService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Person'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Person(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\Image_Helper'] : $this->getImageHelper3Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\WebPage' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\WebPage
     */
    protected function getWebPageService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\WebPage'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\WebPage(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema\Website' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema\Website
     */
    protected function getWebsiteService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Website'] = $instance = new \Yoast\WP\SEO\Presentations\Generators\Schema\Website(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Generators\Schema_Generator' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Generators\Schema_Generator
     */
    protected function getSchemaGeneratorService()
    {
        return $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\Schema_Generator(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\SEO\Helpers\Schema\ID_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Organization']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Organization'] : $this->getOrganizationService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Person']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Person'] : $this->getPersonService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Website']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Website'] : $this->getWebsiteService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Main_Image']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Main_Image'] : $this->getMainImageService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\WebPage']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\WebPage'] : $this->getWebPageService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Breadcrumb']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Breadcrumb'] : $this->getBreadcrumbService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Article']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Article'] : $this->getArticleService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Author']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\Author'] : $this->getAuthorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\FAQ']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\FAQ'] : $this->getFAQService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\HowTo']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema\\HowTo'] : $this->getHowToService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Author_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Author_Archive_Presentation
     */
    protected function getIndexableAuthorArchivePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Author_Archive_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Author_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper())) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Date_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Date_Archive_Presentation
     */
    protected function getIndexableDateArchivePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Date_Archive_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Date_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Error_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Error_Page_Presentation
     */
    protected function getIndexableErrorPagePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Error_Page_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Error_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Home_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Home_Page_Presentation
     */
    protected function getIndexableHomePagePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Home_Page_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Home_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Post_Type_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Post_Type_Archive_Presentation
     */
    protected function getIndexablePostTypeArchivePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Archive_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Post_Type_Archive_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Post_Type_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Post_Type_Presentation
     */
    protected function getIndexablePostTypePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Post_Type_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Post_Type_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper'] : $this->getPostHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Presentation
     */
    protected function getIndexablePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Search_Result_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Search_Result_Page_Presentation
     */
    protected function getIndexableSearchResultPagePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Search_Result_Page_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Search_Result_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Static_Home_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Static_Home_Page_Presentation
     */
    protected function getIndexableStaticHomePagePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Home_Page_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Static_Home_Page_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper'] : $this->getPostHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Static_Posts_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Static_Posts_Page_Presentation
     */
    protected function getIndexableStaticPostsPagePresentationService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'};

        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Static_Posts_Page_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Static_Posts_Page_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\SEO\Helpers\Post_Type_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Date_Helper'] = new \Yoast\WP\SEO\Helpers\Date_Helper())) && false ?: '_'}, $a, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Post_Helper'] : $this->getPostHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers($a);

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presentations\Indexable_Term_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presentations\Indexable_Term_Archive_Presentation
     */
    protected function getIndexableTermArchivePresentationService()
    {
        $this->services['Yoast\\WP\\SEO\\Presentations\\Indexable_Term_Archive_Presentation'] = $instance = new \Yoast\WP\SEO\Presentations\Indexable_Term_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Taxonomy_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Taxonomy_Helper'] : $this->getTaxonomyHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\SEO\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\SEO\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\SEO\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\User_Helper'] = new \Yoast\WP\SEO\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Breadcrumbs_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Breadcrumbs_Presenter
     */
    protected function getBreadcrumbsPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Breadcrumbs_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Breadcrumbs_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Options_Helper'] = new \Yoast\WP\SEO\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Canonical_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Canonical_Presenter
     */
    protected function getCanonicalPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Canonical_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Canonical_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Debug\Marker_Close_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Debug\Marker_Close_Presenter
     */
    protected function getMarkerClosePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Close_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Debug\Marker_Close_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper'] = new \Yoast\WP\SEO\Helpers\Product_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Debug\Marker_Open_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Debug\Marker_Open_Presenter
     */
    protected function getMarkerOpenPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Debug\\Marker_Open_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Debug\Marker_Open_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Product_Helper'] = new \Yoast\WP\SEO\Helpers\Product_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Googlebot_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Googlebot_Presenter
     */
    protected function getGooglebotPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Googlebot_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Googlebot_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Meta_Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Meta_Description_Presenter
     */
    protected function getMetaDescriptionPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Meta_Description_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Meta_Description_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Article_Author_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Article_Author_Presenter
     */
    protected function getArticleAuthorPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Author_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Article_Author_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Article_Modified_Time_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Article_Modified_Time_Presenter
     */
    protected function getArticleModifiedTimePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Article_Modified_Time_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Article_Published_Time_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Article_Published_Time_Presenter
     */
    protected function getArticlePublishedTimePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Published_Time_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Article_Published_Time_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Article_Publisher_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Article_Publisher_Presenter
     */
    protected function getArticlePublisherPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Article_Publisher_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Article_Publisher_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Description_Presenter
     */
    protected function getDescriptionPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Description_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Description_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\FB_App_ID_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\FB_App_ID_Presenter
     */
    protected function getFBAppIDPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\FB_App_ID_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\FB_App_ID_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Image_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Image_Presenter
     */
    protected function getImagePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Image_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Image_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Locale_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Locale_Presenter
     */
    protected function getLocalePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Locale_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Locale_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Site_Name_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Site_Name_Presenter
     */
    protected function getSiteNamePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Site_Name_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Site_Name_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Title_Presenter
     */
    protected function getTitlePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Title_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Title_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Type_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Type_Presenter
     */
    protected function getTypePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Type_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Type_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Open_Graph\Url_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Open_Graph\Url_Presenter
     */
    protected function getUrlPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Open_Graph\\Url_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Open_Graph\Url_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Rel_Next_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Rel_Next_Presenter
     */
    protected function getRelNextPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Rel_Next_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Rel_Next_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Rel_Prev_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Rel_Prev_Presenter
     */
    protected function getRelPrevPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Rel_Prev_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Rel_Prev_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Robots_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Robots_Presenter
     */
    protected function getRobotsPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Robots_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Robots_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Schema_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Schema_Presenter
     */
    protected function getSchemaPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Schema_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Schema_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Title_Presenter
     */
    protected function getTitlePresenter2Service()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Title_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Title_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\String_Helper'] = new \Yoast\WP\SEO\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Card_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Card_Presenter
     */
    protected function getCardPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Card_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Card_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Creator_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Creator_Presenter
     */
    protected function getCreatorPresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Creator_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Creator_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Description_Presenter
     */
    protected function getDescriptionPresenter2Service()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Description_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Description_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Image_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Image_Presenter
     */
    protected function getImagePresenter2Service()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Image_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Image_Presenter(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'});

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Site_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Site_Presenter
     */
    protected function getSitePresenterService()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Site_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Site_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Presenters\Twitter\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Presenters\Twitter\Title_Presenter
     */
    protected function getTitlePresenter3Service()
    {
        $this->services['Yoast\\WP\\SEO\\Presenters\\Twitter\\Title_Presenter'] = $instance = new \Yoast\WP\SEO\Presenters\Twitter\Title_Presenter();

        $instance->set_replace_vars(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Repositories\Indexable_Hierarchy_Repository' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Repositories\Indexable_Hierarchy_Repository
     */
    protected function getIndexableHierarchyRepositoryService()
    {
        return $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\SEO\Repositories\Indexable_Hierarchy_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Repositories\Indexable_Repository' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Repositories\Indexable_Repository
     */
    protected function getIndexableRepositoryService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\SEO\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'};

        if (isset($this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'])) {
            return $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'];
        }

        return $this->services['Yoast\\WP\\SEO\\Repositories\\Indexable_Repository'] = new \Yoast\WP\SEO\Repositories\Indexable_Repository($a, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\SEO\\Loggers\\Logger'] = new \Yoast\WP\SEO\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Repositories\Primary_Term_Repository' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Repositories\Primary_Term_Repository
     */
    protected function getPrimaryTermRepositoryService()
    {
        return $this->services['Yoast\\WP\\SEO\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\SEO\Repositories\Primary_Term_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Repositories\SEO_Links_Repository' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Repositories\SEO_Links_Repository
     */
    protected function getSEOLinksRepositoryService()
    {
        return $this->services['Yoast\\WP\\SEO\\Repositories\\SEO_Links_Repository'] = new \Yoast\WP\SEO\Repositories\SEO_Links_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Repositories\SEO_Meta_Repository' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Repositories\SEO_Meta_Repository
     */
    protected function getSEOMetaRepositoryService()
    {
        return $this->services['Yoast\\WP\\SEO\\Repositories\\SEO_Meta_Repository'] = new \Yoast\WP\SEO\Repositories\SEO_Meta_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Surfaces\Classes_Surface' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Surfaces\Classes_Surface
     */
    protected function getClassesSurfaceService()
    {
        return $this->services['Yoast\\WP\\SEO\\Surfaces\\Classes_Surface'] = new \Yoast\WP\SEO\Surfaces\Classes_Surface($this);
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Surfaces\Current_Page_Surface' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Surfaces\Current_Page_Surface
     */
    protected function getCurrentPageSurfaceService()
    {
        return $this->services['Yoast\\WP\\SEO\\Surfaces\\Current_Page_Surface'] = new \Yoast\WP\SEO\Surfaces\Current_Page_Surface(${($_ = isset($this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\SEO\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Values\Images' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Values\Images
     */
    protected function getImagesService()
    {
        return $this->services['Yoast\\WP\\SEO\\Values\\Images'] = new \Yoast\WP\SEO\Values\Images(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Values\Open_Graph\Images' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Values\Open_Graph\Images
     */
    protected function getImages2Service()
    {
        $this->services['Yoast\\WP\\SEO\\Values\\Open_Graph\\Images'] = $instance = new \Yoast\WP\SEO\Values\Open_Graph\Images(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Image_Helper'] = new \Yoast\WP\SEO\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\SEO\\Helpers\\Url_Helper'] = new \Yoast\WP\SEO\Helpers\Url_Helper())) && false ?: '_'});

        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\SEO\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Wrappers\WP_Query_Wrapper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper
     */
    protected function getWPQueryWrapperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Query_Wrapper();
    }

    /**
     * Gets the public 'Yoast\WP\SEO\Wrappers\WP_Rewrite_Wrapper' shared autowired service.
     *
     * @return \Yoast\WP\SEO\Wrappers\WP_Rewrite_Wrapper
     */
    protected function getWPRewriteWrapperService()
    {
        return $this->services['Yoast\\WP\\SEO\\Wrappers\\WP_Rewrite_Wrapper'] = new \Yoast\WP\SEO\Wrappers\WP_Rewrite_Wrapper();
    }

    /**
     * Gets the private 'WPSEO_Replace_Vars' shared service.
     *
     * @return \WPSEO_Replace_Vars
     */
    protected function getWPSEOReplaceVarsService()
    {
        return $this->services['WPSEO_Replace_Vars'] = \Yoast\WP\SEO\WordPress\Wrapper::get_replace_vars();
    }

    /**
     * Gets the private 'wpdb' shared service.
     *
     * @return \wpdb
     */
    protected function getWpdbService()
    {
        return $this->services['wpdb'] = \Yoast\WP\SEO\WordPress\Wrapper::get_wpdb();
    }
}
