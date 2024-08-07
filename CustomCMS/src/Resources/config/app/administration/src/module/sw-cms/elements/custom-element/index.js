import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'custom-element',
    label: 'Custom Element',
    component: 'sw-cms-el-custom-element',
    configComponent: 'sw-cms-el-config-custom-element',
    previewComponent: 'sw-cms-el-preview-custom-element',
    defaultConfig: {
        content: {
            source: 'static',
            value: 'Default content'
        }
    }
});
