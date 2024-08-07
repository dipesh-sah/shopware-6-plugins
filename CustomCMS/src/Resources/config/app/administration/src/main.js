import './module/sw-cms/blocks/custom-block';
import './module/sw-cms/elements/custom-element';

Shopware.Module.register('custom-cms', {
    type: 'plugin',
    name: 'custom-cms',
    title: 'custom-cms.general.mainMenuItemGeneral',
    description: 'custom-cms.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-action-settings'
});
