import './component';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'custom-block',
    label: 'Custom Block',
    category: 'text',
    component: 'sw-cms-block-custom-block',
    previewComponent: 'sw-cms-preview-custom-block',
    slots: {
        left: 'custom-element',
        right: 'text'
    }
});
