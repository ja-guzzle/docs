/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  sideBar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/overview', 'introduction/deploying_guzzle_on_microsoft_azure']
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'Tutorials/overview',
        'Tutorials/ingest_data_from_lfs_to_mysql',
        'Tutorials/ingest_data_from_azure_blob_storage_to_delta_table',
        'Tutorials/ingest_blob_to_azureSQL',
        'Tutorials/ingest_data_from_rest_api_to_jdbc',
        'Tutorials/ingest_data_from_delta_to_adls'
      ]
    },
    {
      type: 'category',
      label: 'How to Guides',
      items: [ 
      'how_to_guides/features/guzzle_cli',
      'how_to_guides/features/how_key_vault_is_used_to_integrate_guzzle',
      {
        'Connection and Environment':[
          'how_to_guides/connection_and_environment/connection_and_environment'
        ]
      },
      {
       'Administration': [
              'how_to_guides/administration/environment_config/repository_database',
              'how_to_guides/administration/environment_config/setup_shared_storage',
              'how_to_guides/administration/environment_config/timeout_and_sync',
              'how_to_guides/administration/maintenance/jwt',
              'how_to_guides/administration/maintenance/schedule',
              'how_to_guides/administration/maintenance/view_service_log',
              'how_to_guides/administration/security/azure_single_sign_on',
              'how_to_guides/administration/security/user_management'
        ]
      },
      {
        'Author': [
          'how_to_guides/author/author',
          'how_to_guides/author/external',
          'how_to_guides/author/git_integration_and_version_control',
          'how_to_guides/author/schedule',
          'how_to_guides/author/copy_data_tool'
        ]
      },
      {
        'Computes': [
          'how_to_guides/computes/azure_databricks',
          'how_to_guides/computes/local_spark',
          'how_to_guides/computes/yarn',
          'how_to_guides/computes/azure_synapse_spark'
        ]
      },
      {
        'Datastores': [
          'how_to_guides/datastores/datastore_overview',
          'how_to_guides/datastores/amazon_s3',
          'how_to_guides/datastores/azure_data_factory',
          'how_to_guides/datastores/adls_gen2',
          'how_to_guides/datastores/azure_sql',
          'how_to_guides/datastores/databricks_file_system',
          'how_to_guides/datastores/delta_lake',
          'how_to_guides/datastores/hdfs',
          'how_to_guides/datastores/hive',
          'how_to_guides/datastores/server_file_system',
          'how_to_guides/datastores/rest',
          'how_to_guides/datastores/jdbc',
          'how_to_guides/datastores/azure_synapse_analytics'
        ]
      },
      {
        'Governance': [
          'how_to_guides/governance/constraint_checks',
          'how_to_guides/governance/housekeeping_hive_and_delta_tables',
          'how_to_guides/governance/reconcilation_of_data'
        ]
      },
      {
        'Ingest Data': [
          'how_to_guides/ingest_data/working_with_delimited_files',
          'how_to_guides/ingest_data/working_with_json_files',
          'how_to_guides/ingest_data/working_with_xml_files',
          'how_to_guides/ingest_data/working_with_text_and_log_files',
          'how_to_guides/ingest_data/working_with_excel_files',
          'how_to_guides/ingest_data/working_with_fixed_length_files',
          'how_to_guides/ingest_data/working_with_big_data',
          'how_to_guides/ingest_data/working_with_multiple_files',
          'how_to_guides/ingest_data/working_with_delta_lake',
          'how_to_guides/ingest_data/working_with_jdbc',
          'how_to_guides/ingest_data/working_with_azureSQL',
          'how_to_guides/ingest_data/working_with_azure_synapse_analytics',
          'how_to_guides/ingest_data/working_with_hive',
          'how_to_guides/ingest_data/working_with_rest_api',
          'how_to_guides/ingest_data/validation_and_transformation',
          'how_to_guides/ingest_data/column_restrictions',
          'how_to_guides/ingest_data/configure_control_file',
          'how_to_guides/ingest_data/moving_processed_files',
          'how_to_guides/ingest_data/processing',
          'how_to_guides/ingest_data/watermark',
          'how_to_guides/ingest_data/pre-SQL_and_post-SQL_in_ingestion',
          'how_to_guides/ingest_data/overwrite_and_append_operatoins',
          'how_to_guides/ingest_data/configure_truncate_partition_columns',
          'how_to_guides/ingest_data/example_ingest_data'
        ]
      },
      {
        Pipelines: [
          'how_to_guides/ingest_data/pipeline',
        ]
      },
      {
        Batches: ['how_to_guides/batch/batch']
      },
      {
        Housekeeping: ['how_to_guides/ingest_data/housekeeping']
      },
      {
        Parameter: ['how_to_guides/parameters/Parameters',]
      },
      {
        'Monitor': [
          'how_to_guides/monitor/monitor'
        ]
      }]
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['Resources/overview'],
    },
    'changelog'
  ]
};
