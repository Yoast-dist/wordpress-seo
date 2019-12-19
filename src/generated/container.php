<?php

namespace Yoast\WP\Free\Generated;

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
            'yoast\\wp\\free\\builders\\indexable_author_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Author_Builder',
            'yoast\\wp\\free\\builders\\indexable_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Builder',
            'yoast\\wp\\free\\builders\\indexable_date_archive_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Date_Archive_Builder',
            'yoast\\wp\\free\\builders\\indexable_hierarchy_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Hierarchy_Builder',
            'yoast\\wp\\free\\builders\\indexable_home_page_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Home_Page_Builder',
            'yoast\\wp\\free\\builders\\indexable_post_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Post_Builder',
            'yoast\\wp\\free\\builders\\indexable_post_type_archive_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Post_Type_Archive_Builder',
            'yoast\\wp\\free\\builders\\indexable_system_page_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_System_Page_Builder',
            'yoast\\wp\\free\\builders\\indexable_term_builder' => 'Yoast\\WP\\Free\\Builders\\Indexable_Term_Builder',
            'yoast\\wp\\free\\commands\\generate_indexables_command' => 'Yoast\\WP\\Free\\Commands\\Generate_Indexables_Command',
            'yoast\\wp\\free\\conditionals\\admin_conditional' => 'Yoast\\WP\\Free\\Conditionals\\Admin_Conditional',
            'yoast\\wp\\free\\conditionals\\development_conditional' => 'Yoast\\WP\\Free\\Conditionals\\Development_Conditional',
            'yoast\\wp\\free\\conditionals\\front_end_conditional' => 'Yoast\\WP\\Free\\Conditionals\\Front_End_Conditional',
            'yoast\\wp\\free\\conditionals\\migrations_conditional' => 'Yoast\\WP\\Free\\Conditionals\\Migrations_Conditional',
            'yoast\\wp\\free\\conditionals\\opengraph_conditional' => 'Yoast\\WP\\Free\\Conditionals\\OpenGraph_Conditional',
            'yoast\\wp\\free\\conditionals\\primary_category_conditional' => 'Yoast\\WP\\Free\\Conditionals\\Primary_Category_Conditional',
            'yoast\\wp\\free\\conditionals\\woocommerce_conditional' => 'Yoast\\WP\\Free\\Conditionals\\WooCommerce_Conditional',
            'yoast\\wp\\free\\conditionals\\wpml_conditional' => 'Yoast\\WP\\Free\\Conditionals\\WPML_Conditional',
            'yoast\\wp\\free\\config\\dependency_management' => 'Yoast\\WP\\Free\\Config\\Dependency_Management',
            'yoast\\wp\\free\\config\\migration_status' => 'Yoast\\WP\\Free\\Config\\Migration_Status',
            'yoast\\wp\\free\\config\\ruckusing_framework' => 'Yoast\\WP\\Free\\Config\\Ruckusing_Framework',
            'yoast\\wp\\free\\context\\meta_tags_context' => 'Yoast\\WP\\Free\\Context\\Meta_Tags_Context',
            'yoast\\wp\\free\\exceptions\\missing_method' => 'Yoast\\WP\\Free\\Exceptions\\Missing_Method',
            'yoast\\wp\\free\\generators\\breadcrumbs_generator' => 'Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator',
            'yoast\\wp\\free\\generators\\og_image_generator' => 'Yoast\\WP\\Free\\Generators\\OG_Image_Generator',
            'yoast\\wp\\free\\generators\\twitter_image_generator' => 'Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator',
            'yoast\\wp\\free\\helpers\\article_helper' => 'Yoast\\WP\\Free\\Helpers\\Article_Helper',
            'yoast\\wp\\free\\helpers\\author_archive_helper' => 'Yoast\\WP\\Free\\Helpers\\Author_Archive_Helper',
            'yoast\\wp\\free\\helpers\\blocks_helper' => 'Yoast\\WP\\Free\\Helpers\\Blocks_Helper',
            'yoast\\wp\\free\\helpers\\current_page_helper' => 'Yoast\\WP\\Free\\Helpers\\Current_Page_Helper',
            'yoast\\wp\\free\\helpers\\date_helper' => 'Yoast\\WP\\Free\\Helpers\\Date_Helper',
            'yoast\\wp\\free\\helpers\\home_url_helper' => 'Yoast\\WP\\Free\\Helpers\\Home_Url_Helper',
            'yoast\\wp\\free\\helpers\\image_helper' => 'Yoast\\WP\\Free\\Helpers\\Image_Helper',
            'yoast\\wp\\free\\helpers\\meta_helper' => 'Yoast\\WP\\Free\\Helpers\\Meta_Helper',
            'yoast\\wp\\free\\helpers\\open_graph\\image_helper' => 'Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper',
            'yoast\\wp\\free\\helpers\\options_helper' => 'Yoast\\WP\\Free\\Helpers\\Options_Helper',
            'yoast\\wp\\free\\helpers\\pagination_helper' => 'Yoast\\WP\\Free\\Helpers\\Pagination_Helper',
            'yoast\\wp\\free\\helpers\\post_type_helper' => 'Yoast\\WP\\Free\\Helpers\\Post_Type_Helper',
            'yoast\\wp\\free\\helpers\\product_helper' => 'Yoast\\WP\\Free\\Helpers\\Product_Helper',
            'yoast\\wp\\free\\helpers\\redirect_helper' => 'Yoast\\WP\\Free\\Helpers\\Redirect_Helper',
            'yoast\\wp\\free\\helpers\\robots_helper' => 'Yoast\\WP\\Free\\Helpers\\Robots_Helper',
            'yoast\\wp\\free\\helpers\\schema\\html_helper' => 'Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper',
            'yoast\\wp\\free\\helpers\\schema\\id_helper' => 'Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper',
            'yoast\\wp\\free\\helpers\\schema\\image_helper' => 'Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper',
            'yoast\\wp\\free\\helpers\\site_helper' => 'Yoast\\WP\\Free\\Helpers\\Site_Helper',
            'yoast\\wp\\free\\helpers\\string_helper' => 'Yoast\\WP\\Free\\Helpers\\String_Helper',
            'yoast\\wp\\free\\helpers\\taxonomy_helper' => 'Yoast\\WP\\Free\\Helpers\\Taxonomy_Helper',
            'yoast\\wp\\free\\helpers\\twitter\\image_helper' => 'Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper',
            'yoast\\wp\\free\\helpers\\url_helper' => 'Yoast\\WP\\Free\\Helpers\\Url_Helper',
            'yoast\\wp\\free\\helpers\\user_helper' => 'Yoast\\WP\\Free\\Helpers\\User_Helper',
            'yoast\\wp\\free\\initializers\\database_setup' => 'Yoast\\WP\\Free\\Initializers\\Database_Setup',
            'yoast\\wp\\free\\initializers\\migration_runner' => 'Yoast\\WP\\Free\\Initializers\\Migration_Runner',
            'yoast\\wp\\free\\integrations\\compatibility\\wpml' => 'Yoast\\WP\\Free\\Integrations\\Compatibility\\WPML',
            'yoast\\wp\\free\\integrations\\front_end\\category_description' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Category_Description',
            'yoast\\wp\\free\\integrations\\front_end\\comment_link_fixer' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Comment_Link_Fixer',
            'yoast\\wp\\free\\integrations\\front_end\\force_rewrite_title' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Force_Rewrite_Title',
            'yoast\\wp\\free\\integrations\\front_end\\handle_404' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Handle_404',
            'yoast\\wp\\free\\integrations\\front_end\\indexing_controls' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Indexing_Controls',
            'yoast\\wp\\free\\integrations\\front_end\\opengraph_oembed' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\OpenGraph_OEmbed',
            'yoast\\wp\\free\\integrations\\front_end\\redirects' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Redirects',
            'yoast\\wp\\free\\integrations\\front_end\\rss_footer_embed' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\RSS_Footer_Embed',
            'yoast\\wp\\free\\integrations\\front_end\\theme_titles' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Theme_Titles',
            'yoast\\wp\\free\\integrations\\front_end\\webmaster_tools_meta' => 'Yoast\\WP\\Free\\Integrations\\Front_End\\Webmaster_Tools_Meta',
            'yoast\\wp\\free\\integrations\\front_end_integration' => 'Yoast\\WP\\Free\\Integrations\\Front_End_Integration',
            'yoast\\wp\\free\\integrations\\primary_category' => 'Yoast\\WP\\Free\\Integrations\\Primary_Category',
            'yoast\\wp\\free\\integrations\\third_party\\bbpress' => 'Yoast\\WP\\Free\\Integrations\\Third_Party\\BbPress',
            'yoast\\wp\\free\\integrations\\third_party\\woocommerce' => 'Yoast\\WP\\Free\\Integrations\\Third_Party\\WooCommerce',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_author_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Author_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_date_archive_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_home_page_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Home_Page_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_post_type_archive_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_post_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_static_home_page_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_system_page_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_System_Page_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\indexable_term_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher',
            'yoast\\wp\\free\\integrations\\watchers\\primary_term_watcher' => 'Yoast\\WP\\Free\\Integrations\\Watchers\\Primary_Term_Watcher',
            'yoast\\wp\\free\\loader' => 'Yoast\\WP\\Free\\Loader',
            'yoast\\wp\\free\\loggers\\database_logger' => 'Yoast\\WP\\Free\\Loggers\\Database_Logger',
            'yoast\\wp\\free\\loggers\\logger' => 'Yoast\\WP\\Free\\Loggers\\Logger',
            'yoast\\wp\\free\\loggers\\migration_logger' => 'Yoast\\WP\\Free\\Loggers\\Migration_Logger',
            'yoast\\wp\\free\\memoizer\\meta_tags_context_memoizer' => 'Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer',
            'yoast\\wp\\free\\memoizer\\presentation_memoizer' => 'Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer',
            'yoast\\wp\\free\\oauth\\client' => 'Yoast\\WP\\Free\\Oauth\\Client',
            'yoast\\wp\\free\\presentations\\abstract_presentation' => 'Yoast\\WP\\Free\\Presentations\\Abstract_Presentation',
            'yoast\\wp\\free\\presentations\\generators\\og_locale_generator' => 'Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator',
            'yoast\\wp\\free\\presentations\\generators\\schema\\article' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Article',
            'yoast\\wp\\free\\presentations\\generators\\schema\\author' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Author',
            'yoast\\wp\\free\\presentations\\generators\\schema\\breadcrumb' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Breadcrumb',
            'yoast\\wp\\free\\presentations\\generators\\schema\\faq' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\FAQ',
            'yoast\\wp\\free\\presentations\\generators\\schema\\howto' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\HowTo',
            'yoast\\wp\\free\\presentations\\generators\\schema\\main_image' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Main_Image',
            'yoast\\wp\\free\\presentations\\generators\\schema\\organization' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Organization',
            'yoast\\wp\\free\\presentations\\generators\\schema\\person' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Person',
            'yoast\\wp\\free\\presentations\\generators\\schema\\webpage' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\WebPage',
            'yoast\\wp\\free\\presentations\\generators\\schema\\website' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Website',
            'yoast\\wp\\free\\presentations\\generators\\schema_generator' => 'Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator',
            'yoast\\wp\\free\\presentations\\indexable_author_archive_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Author_Archive_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_date_archive_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Date_Archive_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_error_page_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Error_Page_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_home_page_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Home_Page_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_post_type_archive_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Archive_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_post_type_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_search_result_page_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Search_Result_Page_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_static_home_page_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Static_Home_Page_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_static_posts_page_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Static_Posts_Page_Presentation',
            'yoast\\wp\\free\\presentations\\indexable_term_archive_presentation' => 'Yoast\\WP\\Free\\Presentations\\Indexable_Term_Archive_Presentation',
            'yoast\\wp\\free\\presenters\\breadcrumbs_presenter' => 'Yoast\\WP\\Free\\Presenters\\Breadcrumbs_Presenter',
            'yoast\\wp\\free\\presenters\\canonical_presenter' => 'Yoast\\WP\\Free\\Presenters\\Canonical_Presenter',
            'yoast\\wp\\free\\presenters\\debug\\marker_close_presenter' => 'Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Close_Presenter',
            'yoast\\wp\\free\\presenters\\debug\\marker_open_presenter' => 'Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Open_Presenter',
            'yoast\\wp\\free\\presenters\\googlebot_presenter' => 'Yoast\\WP\\Free\\Presenters\\Googlebot_Presenter',
            'yoast\\wp\\free\\presenters\\meta_description_presenter' => 'Yoast\\WP\\Free\\Presenters\\Meta_Description_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\article_author_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Author_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\article_modified_time_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\article_published_time_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Published_Time_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\article_publisher_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Publisher_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\description_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Description_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\fb_app_id_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\FB_App_ID_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\image_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Image_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\locale_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Locale_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\site_name_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Site_Name_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\title_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Title_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\type_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Type_Presenter',
            'yoast\\wp\\free\\presenters\\open_graph\\url_presenter' => 'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Url_Presenter',
            'yoast\\wp\\free\\presenters\\rel_next_presenter' => 'Yoast\\WP\\Free\\Presenters\\Rel_Next_Presenter',
            'yoast\\wp\\free\\presenters\\rel_prev_presenter' => 'Yoast\\WP\\Free\\Presenters\\Rel_Prev_Presenter',
            'yoast\\wp\\free\\presenters\\robots_presenter' => 'Yoast\\WP\\Free\\Presenters\\Robots_Presenter',
            'yoast\\wp\\free\\presenters\\schema_presenter' => 'Yoast\\WP\\Free\\Presenters\\Schema_Presenter',
            'yoast\\wp\\free\\presenters\\title_presenter' => 'Yoast\\WP\\Free\\Presenters\\Title_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\card_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Card_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\creator_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Creator_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\description_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Description_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\image_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Image_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\site_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Site_Presenter',
            'yoast\\wp\\free\\presenters\\twitter\\title_presenter' => 'Yoast\\WP\\Free\\Presenters\\Twitter\\Title_Presenter',
            'yoast\\wp\\free\\repositories\\indexable_hierarchy_repository' => 'Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository',
            'yoast\\wp\\free\\repositories\\indexable_repository' => 'Yoast\\WP\\Free\\Repositories\\Indexable_Repository',
            'yoast\\wp\\free\\repositories\\primary_term_repository' => 'Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository',
            'yoast\\wp\\free\\repositories\\seo_links_repository' => 'Yoast\\WP\\Free\\Repositories\\SEO_Links_Repository',
            'yoast\\wp\\free\\repositories\\seo_meta_repository' => 'Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository',
            'yoast\\wp\\free\\values\\images' => 'Yoast\\WP\\Free\\Values\\Images',
            'yoast\\wp\\free\\values\\open_graph\\images' => 'Yoast\\WP\\Free\\Values\\Open_Graph\\Images',
            'yoast\\wp\\free\\wrappers\\wp_query_wrapper' => 'Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper',
            'yoast\\wp\\free\\wrappers\\wp_rewrite_wrapper' => 'Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper',
            'yoastseo_vendor\\symfony\\component\\dependencyinjection\\containerinterface' => 'YoastSEO_Vendor\\YoastSEO_Vendor\\Symfony\\Component\\DependencyInjection\\ContainerInterface',
        ];
        $this->methodMap = [
            'WPSEO_Breadcrumbs' => 'getWPSEOBreadcrumbsService',
            'WPSEO_Frontend' => 'getWPSEOFrontendService',
            'WPSEO_Replace_Vars' => 'getWPSEOReplaceVarsService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Author_Builder' => 'getIndexableAuthorBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Builder' => 'getIndexableBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Date_Archive_Builder' => 'getIndexableDateArchiveBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Hierarchy_Builder' => 'getIndexableHierarchyBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Home_Page_Builder' => 'getIndexableHomePageBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Post_Builder' => 'getIndexablePostBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Post_Type_Archive_Builder' => 'getIndexablePostTypeArchiveBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_System_Page_Builder' => 'getIndexableSystemPageBuilderService',
            'Yoast\\WP\\Free\\Builders\\Indexable_Term_Builder' => 'getIndexableTermBuilderService',
            'Yoast\\WP\\Free\\Commands\\Generate_Indexables_Command' => 'getGenerateIndexablesCommandService',
            'Yoast\\WP\\Free\\Conditionals\\Admin_Conditional' => 'getAdminConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\Development_Conditional' => 'getDevelopmentConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\Front_End_Conditional' => 'getFrontEndConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\Migrations_Conditional' => 'getMigrationsConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\OpenGraph_Conditional' => 'getOpenGraphConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\Primary_Category_Conditional' => 'getPrimaryCategoryConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\WPML_Conditional' => 'getWPMLConditionalService',
            'Yoast\\WP\\Free\\Conditionals\\WooCommerce_Conditional' => 'getWooCommerceConditionalService',
            'Yoast\\WP\\Free\\Config\\Dependency_Management' => 'getDependencyManagementService',
            'Yoast\\WP\\Free\\Config\\Migration_Status' => 'getMigrationStatusService',
            'Yoast\\WP\\Free\\Config\\Ruckusing_Framework' => 'getRuckusingFrameworkService',
            'Yoast\\WP\\Free\\Context\\Meta_Tags_Context' => 'getMetaTagsContextService',
            'Yoast\\WP\\Free\\Exceptions\\Missing_Method' => 'getMissingMethodService',
            'Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator' => 'getBreadcrumbsGeneratorService',
            'Yoast\\WP\\Free\\Generators\\OG_Image_Generator' => 'getOGImageGeneratorService',
            'Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator' => 'getTwitterImageGeneratorService',
            'Yoast\\WP\\Free\\Helpers\\Article_Helper' => 'getArticleHelperService',
            'Yoast\\WP\\Free\\Helpers\\Author_Archive_Helper' => 'getAuthorArchiveHelperService',
            'Yoast\\WP\\Free\\Helpers\\Blocks_Helper' => 'getBlocksHelperService',
            'Yoast\\WP\\Free\\Helpers\\Current_Page_Helper' => 'getCurrentPageHelperService',
            'Yoast\\WP\\Free\\Helpers\\Date_Helper' => 'getDateHelperService',
            'Yoast\\WP\\Free\\Helpers\\Home_Url_Helper' => 'getHomeUrlHelperService',
            'Yoast\\WP\\Free\\Helpers\\Image_Helper' => 'getImageHelperService',
            'Yoast\\WP\\Free\\Helpers\\Meta_Helper' => 'getMetaHelperService',
            'Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper' => 'getImageHelper2Service',
            'Yoast\\WP\\Free\\Helpers\\Options_Helper' => 'getOptionsHelperService',
            'Yoast\\WP\\Free\\Helpers\\Pagination_Helper' => 'getPaginationHelperService',
            'Yoast\\WP\\Free\\Helpers\\Post_Type_Helper' => 'getPostTypeHelperService',
            'Yoast\\WP\\Free\\Helpers\\Product_Helper' => 'getProductHelperService',
            'Yoast\\WP\\Free\\Helpers\\Redirect_Helper' => 'getRedirectHelperService',
            'Yoast\\WP\\Free\\Helpers\\Robots_Helper' => 'getRobotsHelperService',
            'Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper' => 'getHTMLHelperService',
            'Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper' => 'getIDHelperService',
            'Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper' => 'getImageHelper3Service',
            'Yoast\\WP\\Free\\Helpers\\Site_Helper' => 'getSiteHelperService',
            'Yoast\\WP\\Free\\Helpers\\String_Helper' => 'getStringHelperService',
            'Yoast\\WP\\Free\\Helpers\\Taxonomy_Helper' => 'getTaxonomyHelperService',
            'Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper' => 'getImageHelper4Service',
            'Yoast\\WP\\Free\\Helpers\\Url_Helper' => 'getUrlHelperService',
            'Yoast\\WP\\Free\\Helpers\\User_Helper' => 'getUserHelperService',
            'Yoast\\WP\\Free\\Initializers\\Database_Setup' => 'getDatabaseSetupService',
            'Yoast\\WP\\Free\\Initializers\\Migration_Runner' => 'getMigrationRunnerService',
            'Yoast\\WP\\Free\\Integrations\\Compatibility\\WPML' => 'getWPMLService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Category_Description' => 'getCategoryDescriptionService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Comment_Link_Fixer' => 'getCommentLinkFixerService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Force_Rewrite_Title' => 'getForceRewriteTitleService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Handle_404' => 'getHandle404Service',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Indexing_Controls' => 'getIndexingControlsService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\OpenGraph_OEmbed' => 'getOpenGraphOEmbedService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\RSS_Footer_Embed' => 'getRSSFooterEmbedService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Redirects' => 'getRedirectsService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Theme_Titles' => 'getThemeTitlesService',
            'Yoast\\WP\\Free\\Integrations\\Front_End\\Webmaster_Tools_Meta' => 'getWebmasterToolsMetaService',
            'Yoast\\WP\\Free\\Integrations\\Front_End_Integration' => 'getFrontEndIntegrationService',
            'Yoast\\WP\\Free\\Integrations\\Primary_Category' => 'getPrimaryCategoryService',
            'Yoast\\WP\\Free\\Integrations\\Third_Party\\BbPress' => 'getBbPressService',
            'Yoast\\WP\\Free\\Integrations\\Third_Party\\WooCommerce' => 'getWooCommerceService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Author_Watcher' => 'getIndexableAuthorWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher' => 'getIndexableDateArchiveWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Home_Page_Watcher' => 'getIndexableHomePageWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher' => 'getIndexablePostTypeArchiveWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher' => 'getIndexablePostWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher' => 'getIndexableStaticHomePageWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_System_Page_Watcher' => 'getIndexableSystemPageWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher' => 'getIndexableTermWatcherService',
            'Yoast\\WP\\Free\\Integrations\\Watchers\\Primary_Term_Watcher' => 'getPrimaryTermWatcherService',
            'Yoast\\WP\\Free\\Loader' => 'getLoaderService',
            'Yoast\\WP\\Free\\Loggers\\Database_Logger' => 'getDatabaseLoggerService',
            'Yoast\\WP\\Free\\Loggers\\Logger' => 'getLoggerService',
            'Yoast\\WP\\Free\\Loggers\\Migration_Logger' => 'getMigrationLoggerService',
            'Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer' => 'getMetaTagsContextMemoizerService',
            'Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer' => 'getPresentationMemoizerService',
            'Yoast\\WP\\Free\\Oauth\\Client' => 'getClientService',
            'Yoast\\WP\\Free\\Presentations\\Abstract_Presentation' => 'getAbstractPresentationService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator' => 'getOGLocaleGeneratorService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Article' => 'getArticleService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Author' => 'getAuthorService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Breadcrumb' => 'getBreadcrumbService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\FAQ' => 'getFAQService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\HowTo' => 'getHowToService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Main_Image' => 'getMainImageService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Organization' => 'getOrganizationService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Person' => 'getPersonService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\WebPage' => 'getWebPageService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Website' => 'getWebsiteService',
            'Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator' => 'getSchemaGeneratorService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Author_Archive_Presentation' => 'getIndexableAuthorArchivePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Date_Archive_Presentation' => 'getIndexableDateArchivePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Error_Page_Presentation' => 'getIndexableErrorPagePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Home_Page_Presentation' => 'getIndexableHomePagePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Archive_Presentation' => 'getIndexablePostTypeArchivePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Presentation' => 'getIndexablePostTypePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Presentation' => 'getIndexablePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Search_Result_Page_Presentation' => 'getIndexableSearchResultPagePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Static_Home_Page_Presentation' => 'getIndexableStaticHomePagePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Static_Posts_Page_Presentation' => 'getIndexableStaticPostsPagePresentationService',
            'Yoast\\WP\\Free\\Presentations\\Indexable_Term_Archive_Presentation' => 'getIndexableTermArchivePresentationService',
            'Yoast\\WP\\Free\\Presenters\\Breadcrumbs_Presenter' => 'getBreadcrumbsPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Canonical_Presenter' => 'getCanonicalPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Close_Presenter' => 'getMarkerClosePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Open_Presenter' => 'getMarkerOpenPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Googlebot_Presenter' => 'getGooglebotPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Meta_Description_Presenter' => 'getMetaDescriptionPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Author_Presenter' => 'getArticleAuthorPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter' => 'getArticleModifiedTimePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Published_Time_Presenter' => 'getArticlePublishedTimePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Publisher_Presenter' => 'getArticlePublisherPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Description_Presenter' => 'getDescriptionPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\FB_App_ID_Presenter' => 'getFBAppIDPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Image_Presenter' => 'getImagePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Locale_Presenter' => 'getLocalePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Site_Name_Presenter' => 'getSiteNamePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Title_Presenter' => 'getTitlePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Type_Presenter' => 'getTypePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Open_Graph\\Url_Presenter' => 'getUrlPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Rel_Next_Presenter' => 'getRelNextPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Rel_Prev_Presenter' => 'getRelPrevPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Robots_Presenter' => 'getRobotsPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Schema_Presenter' => 'getSchemaPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Title_Presenter' => 'getTitlePresenter2Service',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Card_Presenter' => 'getCardPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Creator_Presenter' => 'getCreatorPresenterService',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Description_Presenter' => 'getDescriptionPresenter2Service',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Image_Presenter' => 'getImagePresenter2Service',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Site_Presenter' => 'getSitePresenterService',
            'Yoast\\WP\\Free\\Presenters\\Twitter\\Title_Presenter' => 'getTitlePresenter3Service',
            'Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository' => 'getIndexableHierarchyRepositoryService',
            'Yoast\\WP\\Free\\Repositories\\Indexable_Repository' => 'getIndexableRepositoryService',
            'Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository' => 'getPrimaryTermRepositoryService',
            'Yoast\\WP\\Free\\Repositories\\SEO_Links_Repository' => 'getSEOLinksRepositoryService',
            'Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository' => 'getSEOMetaRepositoryService',
            'Yoast\\WP\\Free\\Values\\Images' => 'getImagesService',
            'Yoast\\WP\\Free\\Values\\Open_Graph\\Images' => 'getImages2Service',
            'Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper' => 'getWPQueryWrapperService',
            'Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper' => 'getWPRewriteWrapperService',
            'wpdb' => 'getWpdbService',
        ];
        $this->privates = [
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => true,
            'WPSEO_Breadcrumbs' => true,
            'WPSEO_Frontend' => true,
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
            'WPSEO_Breadcrumbs' => true,
            'WPSEO_Frontend' => true,
            'WPSEO_Replace_Vars' => true,
            'Symfony\\Component\\DependencyInjection\\ContainerInterface' => true,
            'Yoast\\WP\\Free\\Commands\\Command_Interface' => true,
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
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Author_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Author_Builder
     */
    protected function getIndexableAuthorBuilderService()
    {
        $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Author_Builder'] = $instance = new \Yoast\WP\Free\Builders\Indexable_Author_Builder();

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Builder
     */
    protected function getIndexableBuilderService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Hierarchy_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Hierarchy_Builder'] : $this->getIndexableHierarchyBuilderService()) && false ?: '_'};

        if (isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'])) {
            return $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'];
        }

        $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] = $instance = new \Yoast\WP\Free\Builders\Indexable_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Author_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Author_Builder'] : $this->getIndexableAuthorBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Builder'] : $this->getIndexablePostBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Term_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Term_Builder'] : $this->getIndexableTermBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Home_Page_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Home_Page_Builder'] : $this->getIndexableHomePageBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Type_Archive_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Type_Archive_Builder'] : $this->getIndexablePostTypeArchiveBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Date_Archive_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Date_Archive_Builder'] : $this->getIndexableDateArchiveBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_System_Page_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_System_Page_Builder'] : $this->getIndexableSystemPageBuilderService()) && false ?: '_'}, $a);

        $instance->set_indexable_repository(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Date_Archive_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Date_Archive_Builder
     */
    protected function getIndexableDateArchiveBuilderService()
    {
        return $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Date_Archive_Builder'] = new \Yoast\WP\Free\Builders\Indexable_Date_Archive_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Hierarchy_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Hierarchy_Builder
     */
    protected function getIndexableHierarchyBuilderService()
    {
        $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Hierarchy_Builder'] = $instance = new \Yoast\WP\Free\Builders\Indexable_Hierarchy_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository'] : ($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\Free\Repositories\Indexable_Hierarchy_Repository())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository'] : ($this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\Free\Repositories\Primary_Term_Repository())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_indexable_repository(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Home_Page_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Home_Page_Builder
     */
    protected function getIndexableHomePageBuilderService()
    {
        return $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Home_Page_Builder'] = new \Yoast\WP\Free\Builders\Indexable_Home_Page_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Post_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Post_Builder
     */
    protected function getIndexablePostBuilderService()
    {
        $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Builder'] = $instance = new \Yoast\WP\Free\Builders\Indexable_Post_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository'] : ($this->services['Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository'] = new \Yoast\WP\Free\Repositories\SEO_Meta_Repository())) && false ?: '_'});

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Post_Type_Archive_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Post_Type_Archive_Builder
     */
    protected function getIndexablePostTypeArchiveBuilderService()
    {
        return $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Post_Type_Archive_Builder'] = new \Yoast\WP\Free\Builders\Indexable_Post_Type_Archive_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_System_Page_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_System_Page_Builder
     */
    protected function getIndexableSystemPageBuilderService()
    {
        return $this->services['Yoast\\WP\\Free\\Builders\\Indexable_System_Page_Builder'] = new \Yoast\WP\Free\Builders\Indexable_System_Page_Builder(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Builders\Indexable_Term_Builder' shared autowired service.
     *
     * @return \Yoast\WP\Free\Builders\Indexable_Term_Builder
     */
    protected function getIndexableTermBuilderService()
    {
        $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Term_Builder'] = $instance = new \Yoast\WP\Free\Builders\Indexable_Term_Builder();

        $instance->set_social_image_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Commands\Generate_Indexables_Command' shared autowired service.
     *
     * @return \Yoast\WP\Free\Commands\Generate_Indexables_Command
     */
    protected function getGenerateIndexablesCommandService()
    {
        return $this->services['Yoast\\WP\\Free\\Commands\\Generate_Indexables_Command'] = new \Yoast\WP\Free\Commands\Generate_Indexables_Command(${($_ = isset($this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher']) ? $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher'] : $this->getIndexablePostWatcherService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher']) ? $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher'] : $this->getIndexableTermWatcherService()) && false ?: '_'}, ${($_ = isset($this->services['wpdb']) ? $this->services['wpdb'] : $this->getWpdbService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\Admin_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\Admin_Conditional
     */
    protected function getAdminConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\Admin_Conditional'] = new \Yoast\WP\Free\Conditionals\Admin_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\Development_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\Development_Conditional
     */
    protected function getDevelopmentConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\Development_Conditional'] = new \Yoast\WP\Free\Conditionals\Development_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\Front_End_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\Front_End_Conditional
     */
    protected function getFrontEndConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\Front_End_Conditional'] = new \Yoast\WP\Free\Conditionals\Front_End_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\Migrations_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\Migrations_Conditional
     */
    protected function getMigrationsConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\Migrations_Conditional'] = new \Yoast\WP\Free\Conditionals\Migrations_Conditional(${($_ = isset($this->services['Yoast\\WP\\Free\\Config\\Migration_Status']) ? $this->services['Yoast\\WP\\Free\\Config\\Migration_Status'] : ($this->services['Yoast\\WP\\Free\\Config\\Migration_Status'] = new \Yoast\WP\Free\Config\Migration_Status())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\OpenGraph_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\OpenGraph_Conditional
     */
    protected function getOpenGraphConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\OpenGraph_Conditional'] = new \Yoast\WP\Free\Conditionals\OpenGraph_Conditional(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\Primary_Category_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\Primary_Category_Conditional
     */
    protected function getPrimaryCategoryConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\Primary_Category_Conditional'] = new \Yoast\WP\Free\Conditionals\Primary_Category_Conditional(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\WPML_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\WPML_Conditional
     */
    protected function getWPMLConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\WPML_Conditional'] = new \Yoast\WP\Free\Conditionals\WPML_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Conditionals\WooCommerce_Conditional' shared autowired service.
     *
     * @return \Yoast\WP\Free\Conditionals\WooCommerce_Conditional
     */
    protected function getWooCommerceConditionalService()
    {
        return $this->services['Yoast\\WP\\Free\\Conditionals\\WooCommerce_Conditional'] = new \Yoast\WP\Free\Conditionals\WooCommerce_Conditional();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Config\Dependency_Management' shared autowired service.
     *
     * @return \Yoast\WP\Free\Config\Dependency_Management
     */
    protected function getDependencyManagementService()
    {
        return $this->services['Yoast\\WP\\Free\\Config\\Dependency_Management'] = new \Yoast\WP\Free\Config\Dependency_Management();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Config\Migration_Status' shared autowired service.
     *
     * @return \Yoast\WP\Free\Config\Migration_Status
     */
    protected function getMigrationStatusService()
    {
        return $this->services['Yoast\\WP\\Free\\Config\\Migration_Status'] = new \Yoast\WP\Free\Config\Migration_Status();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Config\Ruckusing_Framework' shared autowired service.
     *
     * @return \Yoast\WP\Free\Config\Ruckusing_Framework
     */
    protected function getRuckusingFrameworkService()
    {
        return $this->services['Yoast\\WP\\Free\\Config\\Ruckusing_Framework'] = new \Yoast\WP\Free\Config\Ruckusing_Framework(${($_ = isset($this->services['wpdb']) ? $this->services['wpdb'] : $this->getWpdbService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Config\\Dependency_Management']) ? $this->services['Yoast\\WP\\Free\\Config\\Dependency_Management'] : ($this->services['Yoast\\WP\\Free\\Config\\Dependency_Management'] = new \Yoast\WP\Free\Config\Dependency_Management())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Loggers\\Migration_Logger']) ? $this->services['Yoast\\WP\\Free\\Loggers\\Migration_Logger'] : $this->getMigrationLoggerService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Context\Meta_Tags_Context' shared autowired service.
     *
     * @return \Yoast\WP\Free\Context\Meta_Tags_Context
     */
    protected function getMetaTagsContextService()
    {
        return $this->services['Yoast\\WP\\Free\\Context\\Meta_Tags_Context'] = new \Yoast\WP\Free\Context\Meta_Tags_Context(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Site_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Site_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Site_Helper'] = new \Yoast\WP\Free\Helpers\Site_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Exceptions\Missing_Method' shared autowired service.
     *
     * @return \Yoast\WP\Free\Exceptions\Missing_Method
     */
    protected function getMissingMethodService()
    {
        return $this->services['Yoast\\WP\\Free\\Exceptions\\Missing_Method'] = new \Yoast\WP\Free\Exceptions\Missing_Method();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Generators\Breadcrumbs_Generator' shared autowired service.
     *
     * @return \Yoast\WP\Free\Generators\Breadcrumbs_Generator
     */
    protected function getBreadcrumbsGeneratorService()
    {
        return $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] = new \Yoast\WP\Free\Generators\Breadcrumbs_Generator(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Generators\OG_Image_Generator' shared autowired service.
     *
     * @return \Yoast\WP\Free\Generators\OG_Image_Generator
     */
    protected function getOGImageGeneratorService()
    {
        return $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] = new \Yoast\WP\Free\Generators\OG_Image_Generator(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Generators\Twitter_Image_Generator' shared autowired service.
     *
     * @return \Yoast\WP\Free\Generators\Twitter_Image_Generator
     */
    protected function getTwitterImageGeneratorService()
    {
        return $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] = new \Yoast\WP\Free\Generators\Twitter_Image_Generator(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper'] : $this->getImageHelper4Service()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Article_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Article_Helper
     */
    protected function getArticleHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] = new \Yoast\WP\Free\Helpers\Article_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Author_Archive_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Author_Archive_Helper
     */
    protected function getAuthorArchiveHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Author_Archive_Helper'] = new \Yoast\WP\Free\Helpers\Author_Archive_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Blocks_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Blocks_Helper
     */
    protected function getBlocksHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Blocks_Helper'] = new \Yoast\WP\Free\Helpers\Blocks_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Current_Page_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Current_Page_Helper
     */
    protected function getCurrentPageHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] = new \Yoast\WP\Free\Helpers\Current_Page_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Date_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Date_Helper
     */
    protected function getDateHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Home_Url_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Home_Url_Helper
     */
    protected function getHomeUrlHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Home_Url_Helper'] = new \Yoast\WP\Free\Helpers\Home_Url_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Image_Helper
     */
    protected function getImageHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Meta_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Meta_Helper
     */
    protected function getMetaHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper'] = new \Yoast\WP\Free\Helpers\Meta_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Open_Graph\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Open_Graph\Image_Helper
     */
    protected function getImageHelper2Service()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Open_Graph\Image_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Options_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Options_Helper
     */
    protected function getOptionsHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Pagination_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Pagination_Helper
     */
    protected function getPaginationHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] = new \Yoast\WP\Free\Helpers\Pagination_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Rewrite_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Post_Type_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Post_Type_Helper
     */
    protected function getPostTypeHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper'] = new \Yoast\WP\Free\Helpers\Post_Type_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Product_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Product_Helper
     */
    protected function getProductHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper'] = new \Yoast\WP\Free\Helpers\Product_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Redirect_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Redirect_Helper
     */
    protected function getRedirectHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper'] = new \Yoast\WP\Free\Helpers\Redirect_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Robots_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Robots_Helper
     */
    protected function getRobotsHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper'] = new \Yoast\WP\Free\Helpers\Robots_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Schema\HTML_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Schema\HTML_Helper
     */
    protected function getHTMLHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\Free\Helpers\Schema\HTML_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Schema\ID_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Schema\ID_Helper
     */
    protected function getIDHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Schema\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Schema\Image_Helper
     */
    protected function getImageHelper3Service()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Site_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Site_Helper
     */
    protected function getSiteHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Site_Helper'] = new \Yoast\WP\Free\Helpers\Site_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\String_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\String_Helper
     */
    protected function getStringHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Taxonomy_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Taxonomy_Helper
     */
    protected function getTaxonomyHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Taxonomy_Helper'] = new \Yoast\WP\Free\Helpers\Taxonomy_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Twitter\Image_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Twitter\Image_Helper
     */
    protected function getImageHelper4Service()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Twitter\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Twitter\Image_Helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\Url_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\Url_Helper
     */
    protected function getUrlHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Helpers\User_Helper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Helpers\User_Helper
     */
    protected function getUserHelperService()
    {
        return $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Initializers\Database_Setup' shared autowired service.
     *
     * @return \Yoast\WP\Free\Initializers\Database_Setup
     */
    protected function getDatabaseSetupService()
    {
        return $this->services['Yoast\\WP\\Free\\Initializers\\Database_Setup'] = new \Yoast\WP\Free\Initializers\Database_Setup(${($_ = isset($this->services['Yoast\\WP\\Free\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\Free\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\Free\\Loggers\\Logger'] = new \Yoast\WP\Free\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Initializers\Migration_Runner' shared autowired service.
     *
     * @return \Yoast\WP\Free\Initializers\Migration_Runner
     */
    protected function getMigrationRunnerService()
    {
        return $this->services['Yoast\\WP\\Free\\Initializers\\Migration_Runner'] = new \Yoast\WP\Free\Initializers\Migration_Runner(${($_ = isset($this->services['Yoast\\WP\\Free\\Config\\Migration_Status']) ? $this->services['Yoast\\WP\\Free\\Config\\Migration_Status'] : ($this->services['Yoast\\WP\\Free\\Config\\Migration_Status'] = new \Yoast\WP\Free\Config\Migration_Status())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Config\\Ruckusing_Framework']) ? $this->services['Yoast\\WP\\Free\\Config\\Ruckusing_Framework'] : $this->getRuckusingFrameworkService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\Free\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\Free\\Loggers\\Logger'] = new \Yoast\WP\Free\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Compatibility\WPML' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Compatibility\WPML
     */
    protected function getWPMLService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Compatibility\\WPML'] = new \Yoast\WP\Free\Integrations\Compatibility\WPML();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Category_Description' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Category_Description
     */
    protected function getCategoryDescriptionService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Category_Description'] = new \Yoast\WP\Free\Integrations\Front_End\Category_Description();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Comment_Link_Fixer' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Comment_Link_Fixer
     */
    protected function getCommentLinkFixerService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Comment_Link_Fixer'] = new \Yoast\WP\Free\Integrations\Front_End\Comment_Link_Fixer(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper'] = new \Yoast\WP\Free\Helpers\Redirect_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper'] = new \Yoast\WP\Free\Helpers\Robots_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Force_Rewrite_Title' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Force_Rewrite_Title
     */
    protected function getForceRewriteTitleService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Force_Rewrite_Title'] = new \Yoast\WP\Free\Integrations\Front_End\Force_Rewrite_Title(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Handle_404' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Handle_404
     */
    protected function getHandle404Service()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Handle_404'] = new \Yoast\WP\Free\Integrations\Front_End\Handle_404(${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Indexing_Controls' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Indexing_Controls
     */
    protected function getIndexingControlsService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Indexing_Controls'] = new \Yoast\WP\Free\Integrations\Front_End\Indexing_Controls(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Robots_Helper'] = new \Yoast\WP\Free\Helpers\Robots_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\OpenGraph_OEmbed' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\OpenGraph_OEmbed
     */
    protected function getOpenGraphOEmbedService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\OpenGraph_OEmbed'] = new \Yoast\WP\Free\Integrations\Front_End\OpenGraph_OEmbed(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper'] = new \Yoast\WP\Free\Helpers\Meta_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\RSS_Footer_Embed' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\RSS_Footer_Embed
     */
    protected function getRSSFooterEmbedService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\RSS_Footer_Embed'] = new \Yoast\WP\Free\Integrations\Front_End\RSS_Footer_Embed(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Redirects' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Redirects
     */
    protected function getRedirectsService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Redirects'] = new \Yoast\WP\Free\Integrations\Front_End\Redirects(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Meta_Helper'] = new \Yoast\WP\Free\Helpers\Meta_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Redirect_Helper'] = new \Yoast\WP\Free\Helpers\Redirect_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Theme_Titles' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Theme_Titles
     */
    protected function getThemeTitlesService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Theme_Titles'] = new \Yoast\WP\Free\Integrations\Front_End\Theme_Titles();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End\Webmaster_Tools_Meta' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End\Webmaster_Tools_Meta
     */
    protected function getWebmasterToolsMetaService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End\\Webmaster_Tools_Meta'] = new \Yoast\WP\Free\Integrations\Front_End\Webmaster_Tools_Meta(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Front_End_Integration' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Front_End_Integration
     */
    protected function getFrontEndIntegrationService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Front_End_Integration'] = new \Yoast\WP\Free\Integrations\Front_End_Integration(${($_ = isset($this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, $this);
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Primary_Category' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Primary_Category
     */
    protected function getPrimaryCategoryService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Primary_Category'] = new \Yoast\WP\Free\Integrations\Primary_Category();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Third_Party\BbPress' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Third_Party\BbPress
     */
    protected function getBbPressService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Third_Party\\BbPress'] = new \Yoast\WP\Free\Integrations\Third_Party\BbPress(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Third_Party\WooCommerce' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Third_Party\WooCommerce
     */
    protected function getWooCommerceService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Third_Party\\WooCommerce'] = new \Yoast\WP\Free\Integrations\Third_Party\WooCommerce(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Author_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Author_Watcher
     */
    protected function getIndexableAuthorWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Author_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Author_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Date_Archive_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Date_Archive_Watcher
     */
    protected function getIndexableDateArchiveWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Date_Archive_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Home_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Home_Page_Watcher
     */
    protected function getIndexableHomePageWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Home_Page_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Home_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher
     */
    protected function getIndexablePostTypeArchiveWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Type_Archive_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Watcher
     */
    protected function getIndexablePostWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Post_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository'] : ($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\Free\Repositories\Indexable_Hierarchy_Repository())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Static_Home_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Static_Home_Page_Watcher
     */
    protected function getIndexableStaticHomePageWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Static_Home_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_System_Page_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_System_Page_Watcher
     */
    protected function getIndexableSystemPageWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_System_Page_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_System_Page_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Indexable_Term_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Indexable_Term_Watcher
     */
    protected function getIndexableTermWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Indexable_Term_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Integrations\Watchers\Primary_Term_Watcher' shared autowired service.
     *
     * @return \Yoast\WP\Free\Integrations\Watchers\Primary_Term_Watcher
     */
    protected function getPrimaryTermWatcherService()
    {
        return $this->services['Yoast\\WP\\Free\\Integrations\\Watchers\\Primary_Term_Watcher'] = new \Yoast\WP\Free\Integrations\Watchers\Primary_Term_Watcher(${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository'] : ($this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\Free\Repositories\Primary_Term_Repository())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Loader' shared autowired service.
     *
     * @return \Yoast\WP\Free\Loader
     */
    protected function getLoaderService()
    {
        $this->services['Yoast\\WP\\Free\\Loader'] = $instance = new \Yoast\WP\Free\Loader($this);

        $instance->register_initializer('WPSEO_Breadcrumbs');
        $instance->register_initializer('WPSEO_Frontend');
        $instance->register_command('Yoast\\WP\\Free\\Commands\\Generate_Indexables_Command');
        $instance->register_initializer('Yoast\\WP\\Free\\Initializers\\Database_Setup');
        $instance->register_initializer('Yoast\\WP\\Free\\Initializers\\Migration_Runner');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Compatibility\\WPML');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End_Integration');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Category_Description');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Comment_Link_Fixer');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Force_Rewrite_Title');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Handle_404');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Indexing_Controls');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\OpenGraph_OEmbed');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Redirects');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\RSS_Footer_Embed');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Theme_Titles');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Front_End\\Webmaster_Tools_Meta');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Primary_Category');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Third_Party\\BbPress');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Third_Party\\WooCommerce');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Author_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Date_Archive_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Home_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Type_Archive_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Post_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Static_Home_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_System_Page_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Indexable_Term_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Integrations\\Watchers\\Primary_Term_Watcher');
        $instance->register_integration('Yoast\\WP\\Free\\Loggers\\Database_Logger');

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Loggers\Database_Logger' shared autowired service.
     *
     * @return \Yoast\WP\Free\Loggers\Database_Logger
     */
    protected function getDatabaseLoggerService()
    {
        return $this->services['Yoast\\WP\\Free\\Loggers\\Database_Logger'] = new \Yoast\WP\Free\Loggers\Database_Logger();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Loggers\Logger' shared autowired service.
     *
     * @return \Yoast\WP\Free\Loggers\Logger
     */
    protected function getLoggerService()
    {
        return $this->services['Yoast\\WP\\Free\\Loggers\\Logger'] = new \Yoast\WP\Free\Loggers\Logger();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Loggers\Migration_Logger' shared autowired service.
     *
     * @return \Yoast\WP\Free\Loggers\Migration_Logger
     */
    protected function getMigrationLoggerService()
    {
        return $this->services['Yoast\\WP\\Free\\Loggers\\Migration_Logger'] = new \Yoast\WP\Free\Loggers\Migration_Logger(${($_ = isset($this->services['Yoast\\WP\\Free\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\Free\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\Free\\Loggers\\Logger'] = new \Yoast\WP\Free\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Memoizer\Meta_Tags_Context_Memoizer' shared autowired service.
     *
     * @return \Yoast\WP\Free\Memoizer\Meta_Tags_Context_Memoizer
     */
    protected function getMetaTagsContextMemoizerService()
    {
        return $this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer'] = new \Yoast\WP\Free\Memoizer\Meta_Tags_Context_Memoizer(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Blocks_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Blocks_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Blocks_Helper'] = new \Yoast\WP\Free\Helpers\Blocks_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository']) ? $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] : $this->getIndexableRepositoryService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Context\\Meta_Tags_Context']) ? $this->services['Yoast\\WP\\Free\\Context\\Meta_Tags_Context'] : $this->getMetaTagsContextService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer']) ? $this->services['Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer'] : ($this->services['Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer'] = new \Yoast\WP\Free\Memoizer\Presentation_Memoizer($this))) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Memoizer\Presentation_Memoizer' shared autowired service.
     *
     * @return \Yoast\WP\Free\Memoizer\Presentation_Memoizer
     */
    protected function getPresentationMemoizerService()
    {
        return $this->services['Yoast\\WP\\Free\\Memoizer\\Presentation_Memoizer'] = new \Yoast\WP\Free\Memoizer\Presentation_Memoizer($this);
    }

    /**
     * Gets the public 'Yoast\WP\Free\Oauth\Client' shared autowired service.
     *
     * @return \Yoast\WP\Free\Oauth\Client
     */
    protected function getClientService()
    {
        return $this->services['Yoast\\WP\\Free\\Oauth\\Client'] = new \Yoast\WP\Free\Oauth\Client();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Abstract_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Abstract_Presentation
     */
    protected function getAbstractPresentationService()
    {
        return $this->services['Yoast\\WP\\Free\\Presentations\\Abstract_Presentation'] = new \Yoast\WP\Free\Presentations\Abstract_Presentation();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator
     */
    protected function getOGLocaleGeneratorService()
    {
        return $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Article' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Article
     */
    protected function getArticleService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Article'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Article(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] = new \Yoast\WP\Free\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Author' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Author
     */
    protected function getAuthorService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Author'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Author(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] = new \Yoast\WP\Free\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Breadcrumb' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Breadcrumb
     */
    protected function getBreadcrumbService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Breadcrumb'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Breadcrumb(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\FAQ' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\FAQ
     */
    protected function getFAQService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\FAQ'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\FAQ(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Article_Helper'] = new \Yoast\WP\Free\Helpers\Article_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\Free\Helpers\Schema\HTML_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\HowTo' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\HowTo
     */
    protected function getHowToService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\HowTo'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\HowTo(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\Free\Helpers\Schema\HTML_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Main_Image' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Main_Image
     */
    protected function getMainImageService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Main_Image'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Main_Image(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Organization' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Organization
     */
    protected function getOrganizationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Organization'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Organization(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Person' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Person
     */
    protected function getPersonService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Person'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Person(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Schema\Image_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\WebPage' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\WebPage
     */
    protected function getWebPageService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\WebPage'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\WebPage(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\HTML_Helper'] = new \Yoast\WP\Free\Helpers\Schema\HTML_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema\Website' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema\Website
     */
    protected function getWebsiteService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Website'] = $instance = new \Yoast\WP\Free\Presentations\Generators\Schema\Website(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_id_helper(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Generators\Schema_Generator' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Generators\Schema_Generator
     */
    protected function getSchemaGeneratorService()
    {
        return $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] = new \Yoast\WP\Free\Presentations\Generators\Schema_Generator(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Schema\\ID_Helper'] = new \Yoast\WP\Free\Helpers\Schema\ID_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Organization']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Organization'] : $this->getOrganizationService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Person']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Person'] : $this->getPersonService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Website']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Website'] : $this->getWebsiteService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Main_Image']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Main_Image'] : $this->getMainImageService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\WebPage']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\WebPage'] : $this->getWebPageService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Breadcrumb']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Breadcrumb'] : $this->getBreadcrumbService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Article']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Article'] : $this->getArticleService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Author']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\Author'] : $this->getAuthorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\FAQ']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\FAQ'] : $this->getFAQService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\HowTo']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema\\HowTo'] : $this->getHowToService()) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Author_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Author_Archive_Presentation
     */
    protected function getIndexableAuthorArchivePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Author_Archive_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Author_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper'] : $this->getPostTypeHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Date_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Date_Archive_Presentation
     */
    protected function getIndexableDateArchivePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Date_Archive_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Date_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Error_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Error_Page_Presentation
     */
    protected function getIndexableErrorPagePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Error_Page_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Error_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Home_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Home_Page_Presentation
     */
    protected function getIndexableHomePagePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Home_Page_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Home_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Post_Type_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Post_Type_Archive_Presentation
     */
    protected function getIndexablePostTypeArchivePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Archive_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Post_Type_Archive_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Post_Type_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Post_Type_Presentation
     */
    protected function getIndexablePostTypePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Post_Type_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Post_Type_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper'] : $this->getPostTypeHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Presentation
     */
    protected function getIndexablePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Search_Result_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Search_Result_Page_Presentation
     */
    protected function getIndexableSearchResultPagePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Search_Result_Page_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Search_Result_Page_Presentation();

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Static_Home_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Static_Home_Page_Presentation
     */
    protected function getIndexableStaticHomePagePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Static_Home_Page_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Static_Home_Page_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper'] : $this->getPostTypeHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Static_Posts_Page_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Static_Posts_Page_Presentation
     */
    protected function getIndexableStaticPostsPagePresentationService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'};

        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Static_Posts_Page_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Static_Posts_Page_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Post_Type_Helper'] : $this->getPostTypeHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Date_Helper'] = new \Yoast\WP\Free\Helpers\Date_Helper())) && false ?: '_'}, $a);

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers($a);

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presentations\Indexable_Term_Archive_Presentation' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presentations\Indexable_Term_Archive_Presentation
     */
    protected function getIndexableTermArchivePresentationService()
    {
        $this->services['Yoast\\WP\\Free\\Presentations\\Indexable_Term_Archive_Presentation'] = $instance = new \Yoast\WP\Free\Presentations\Indexable_Term_Archive_Presentation(${($_ = isset($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper']) ? $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] : ($this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Taxonomy_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Taxonomy_Helper'] : $this->getTaxonomyHelperService()) && false ?: '_'});

        $instance->set_generators(${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\Schema_Generator'] : $this->getSchemaGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator']) ? $this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] : ($this->services['Yoast\\WP\\Free\\Presentations\\Generators\\OG_Locale_Generator'] = new \Yoast\WP\Free\Presentations\Generators\OG_Locale_Generator())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\OG_Image_Generator'] : $this->getOGImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Twitter_Image_Generator'] : $this->getTwitterImageGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator']) ? $this->services['Yoast\\WP\\Free\\Generators\\Breadcrumbs_Generator'] : $this->getBreadcrumbsGeneratorService()) && false ?: '_'});
        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\User_Helper'] = new \Yoast\WP\Free\Helpers\User_Helper())) && false ?: '_'});
        $instance->set_archive_adjacent_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Pagination_Helper'] : $this->getPaginationHelperService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Breadcrumbs_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Breadcrumbs_Presenter
     */
    protected function getBreadcrumbsPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Breadcrumbs_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Breadcrumbs_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Options_Helper'] = new \Yoast\WP\Free\Helpers\Options_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Canonical_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Canonical_Presenter
     */
    protected function getCanonicalPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Canonical_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Canonical_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Debug\Marker_Close_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Debug\Marker_Close_Presenter
     */
    protected function getMarkerClosePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Close_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Debug\Marker_Close_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper'] = new \Yoast\WP\Free\Helpers\Product_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Debug\Marker_Open_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Debug\Marker_Open_Presenter
     */
    protected function getMarkerOpenPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Debug\\Marker_Open_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Debug\Marker_Open_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Product_Helper'] = new \Yoast\WP\Free\Helpers\Product_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Googlebot_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Googlebot_Presenter
     */
    protected function getGooglebotPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Googlebot_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Googlebot_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Meta_Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Meta_Description_Presenter
     */
    protected function getMetaDescriptionPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Meta_Description_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Meta_Description_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Article_Author_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Article_Author_Presenter
     */
    protected function getArticleAuthorPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Author_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Article_Author_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Article_Modified_Time_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Article_Modified_Time_Presenter
     */
    protected function getArticleModifiedTimePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Modified_Time_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Article_Modified_Time_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Article_Published_Time_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Article_Published_Time_Presenter
     */
    protected function getArticlePublishedTimePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Published_Time_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Article_Published_Time_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Article_Publisher_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Article_Publisher_Presenter
     */
    protected function getArticlePublisherPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Article_Publisher_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Article_Publisher_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Description_Presenter
     */
    protected function getDescriptionPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Description_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Description_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\FB_App_ID_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\FB_App_ID_Presenter
     */
    protected function getFBAppIDPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\FB_App_ID_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\FB_App_ID_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Image_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Image_Presenter
     */
    protected function getImagePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Image_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Image_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Locale_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Locale_Presenter
     */
    protected function getLocalePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Locale_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Locale_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Site_Name_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Site_Name_Presenter
     */
    protected function getSiteNamePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Site_Name_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Site_Name_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Title_Presenter
     */
    protected function getTitlePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Title_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Title_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Type_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Type_Presenter
     */
    protected function getTypePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Type_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Type_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Open_Graph\Url_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Open_Graph\Url_Presenter
     */
    protected function getUrlPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Open_Graph\\Url_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Open_Graph\Url_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Rel_Next_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Rel_Next_Presenter
     */
    protected function getRelNextPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Rel_Next_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Rel_Next_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Rel_Prev_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Rel_Prev_Presenter
     */
    protected function getRelPrevPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Rel_Prev_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Rel_Prev_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Robots_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Robots_Presenter
     */
    protected function getRobotsPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Robots_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Robots_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Schema_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Schema_Presenter
     */
    protected function getSchemaPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Schema_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Schema_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Title_Presenter
     */
    protected function getTitlePresenter2Service()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Title_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Title_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\String_Helper'] = new \Yoast\WP\Free\Helpers\String_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Card_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Card_Presenter
     */
    protected function getCardPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Card_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Card_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Creator_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Creator_Presenter
     */
    protected function getCreatorPresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Creator_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Creator_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Description_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Description_Presenter
     */
    protected function getDescriptionPresenter2Service()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Description_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Description_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Image_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Image_Presenter
     */
    protected function getImagePresenter2Service()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Image_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Image_Presenter(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'});

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Site_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Site_Presenter
     */
    protected function getSitePresenterService()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Site_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Site_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Presenters\Twitter\Title_Presenter' shared autowired service.
     *
     * @return \Yoast\WP\Free\Presenters\Twitter\Title_Presenter
     */
    protected function getTitlePresenter3Service()
    {
        $this->services['Yoast\\WP\\Free\\Presenters\\Twitter\\Title_Presenter'] = $instance = new \Yoast\WP\Free\Presenters\Twitter\Title_Presenter();

        $instance->set_replace_vars_helper(${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Repositories\Indexable_Hierarchy_Repository' shared autowired service.
     *
     * @return \Yoast\WP\Free\Repositories\Indexable_Hierarchy_Repository
     */
    protected function getIndexableHierarchyRepositoryService()
    {
        return $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Hierarchy_Repository'] = new \Yoast\WP\Free\Repositories\Indexable_Hierarchy_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Repositories\Indexable_Repository' shared autowired service.
     *
     * @return \Yoast\WP\Free\Repositories\Indexable_Repository
     */
    protected function getIndexableRepositoryService()
    {
        $a = ${($_ = isset($this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder']) ? $this->services['Yoast\\WP\\Free\\Builders\\Indexable_Builder'] : $this->getIndexableBuilderService()) && false ?: '_'};

        if (isset($this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'])) {
            return $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'];
        }

        return $this->services['Yoast\\WP\\Free\\Repositories\\Indexable_Repository'] = new \Yoast\WP\Free\Repositories\Indexable_Repository($a, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Current_Page_Helper'] : $this->getCurrentPageHelperService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Loggers\\Logger']) ? $this->services['Yoast\\WP\\Free\\Loggers\\Logger'] : ($this->services['Yoast\\WP\\Free\\Loggers\\Logger'] = new \Yoast\WP\Free\Loggers\Logger())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Repositories\Primary_Term_Repository' shared autowired service.
     *
     * @return \Yoast\WP\Free\Repositories\Primary_Term_Repository
     */
    protected function getPrimaryTermRepositoryService()
    {
        return $this->services['Yoast\\WP\\Free\\Repositories\\Primary_Term_Repository'] = new \Yoast\WP\Free\Repositories\Primary_Term_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Repositories\SEO_Links_Repository' shared autowired service.
     *
     * @return \Yoast\WP\Free\Repositories\SEO_Links_Repository
     */
    protected function getSEOLinksRepositoryService()
    {
        return $this->services['Yoast\\WP\\Free\\Repositories\\SEO_Links_Repository'] = new \Yoast\WP\Free\Repositories\SEO_Links_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Repositories\SEO_Meta_Repository' shared autowired service.
     *
     * @return \Yoast\WP\Free\Repositories\SEO_Meta_Repository
     */
    protected function getSEOMetaRepositoryService()
    {
        return $this->services['Yoast\\WP\\Free\\Repositories\\SEO_Meta_Repository'] = new \Yoast\WP\Free\Repositories\SEO_Meta_Repository();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Values\Images' shared autowired service.
     *
     * @return \Yoast\WP\Free\Values\Images
     */
    protected function getImagesService()
    {
        return $this->services['Yoast\\WP\\Free\\Values\\Images'] = new \Yoast\WP\Free\Values\Images(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'});
    }

    /**
     * Gets the public 'Yoast\WP\Free\Values\Open_Graph\Images' shared autowired service.
     *
     * @return \Yoast\WP\Free\Values\Open_Graph\Images
     */
    protected function getImages2Service()
    {
        $this->services['Yoast\\WP\\Free\\Values\\Open_Graph\\Images'] = $instance = new \Yoast\WP\Free\Values\Open_Graph\Images(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Image_Helper'] = new \Yoast\WP\Free\Helpers\Image_Helper())) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] : ($this->services['Yoast\\WP\\Free\\Helpers\\Url_Helper'] = new \Yoast\WP\Free\Helpers\Url_Helper())) && false ?: '_'});

        $instance->set_helpers(${($_ = isset($this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper']) ? $this->services['Yoast\\WP\\Free\\Helpers\\Open_Graph\\Image_Helper'] : $this->getImageHelper2Service()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'Yoast\WP\Free\Wrappers\WP_Query_Wrapper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Wrappers\WP_Query_Wrapper
     */
    protected function getWPQueryWrapperService()
    {
        return $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Query_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Query_Wrapper();
    }

    /**
     * Gets the public 'Yoast\WP\Free\Wrappers\WP_Rewrite_Wrapper' shared autowired service.
     *
     * @return \Yoast\WP\Free\Wrappers\WP_Rewrite_Wrapper
     */
    protected function getWPRewriteWrapperService()
    {
        return $this->services['Yoast\\WP\\Free\\Wrappers\\WP_Rewrite_Wrapper'] = new \Yoast\WP\Free\Wrappers\WP_Rewrite_Wrapper();
    }

    /**
     * Gets the private 'WPSEO_Breadcrumbs' shared autowired service.
     *
     * @return \WPSEO_Breadcrumbs
     */
    protected function getWPSEOBreadcrumbsService()
    {
        return $this->services['WPSEO_Breadcrumbs'] = new \WPSEO_Breadcrumbs(${($_ = isset($this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, ${($_ = isset($this->services['Yoast\\WP\\Free\\Presenters\\Breadcrumbs_Presenter']) ? $this->services['Yoast\\WP\\Free\\Presenters\\Breadcrumbs_Presenter'] : $this->getBreadcrumbsPresenterService()) && false ?: '_'});
    }

    /**
     * Gets the private 'WPSEO_Frontend' shared autowired service.
     *
     * @return \WPSEO_Frontend
     */
    protected function getWPSEOFrontendService()
    {
        return $this->services['WPSEO_Frontend'] = new \WPSEO_Frontend(${($_ = isset($this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer']) ? $this->services['Yoast\\WP\\Free\\Memoizer\\Meta_Tags_Context_Memoizer'] : $this->getMetaTagsContextMemoizerService()) && false ?: '_'}, ${($_ = isset($this->services['WPSEO_Replace_Vars']) ? $this->services['WPSEO_Replace_Vars'] : $this->getWPSEOReplaceVarsService()) && false ?: '_'});
    }

    /**
     * Gets the private 'WPSEO_Replace_Vars' shared service.
     *
     * @return \WPSEO_Replace_Vars
     */
    protected function getWPSEOReplaceVarsService()
    {
        return $this->services['WPSEO_Replace_Vars'] = \Yoast\WP\Free\WordPress\Wrapper::get_replace_vars();
    }

    /**
     * Gets the private 'wpdb' shared service.
     *
     * @return \wpdb
     */
    protected function getWpdbService()
    {
        return $this->services['wpdb'] = \Yoast\WP\Free\WordPress\Wrapper::get_wpdb();
    }
}
