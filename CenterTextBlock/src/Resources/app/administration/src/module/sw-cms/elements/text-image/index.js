import './preview'
import './component'
import './config'
Shopware.Service('cmsService').registerCmsElement({
    name: "text-image",
    label: "Six Image with Title",
    component: "sw-cms-six-image-with-title",
    configComponent: "sw-cms-element-config-text-image",
    previewComponent:'sw-cms-six-image-with-title-preview',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    }
})