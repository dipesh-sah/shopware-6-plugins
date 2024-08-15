import './component';
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
    name: "text-image",
    label: "Six Image with Title",
    category: "text-image",
    component: "sw-cms-block-text-image",
    previewComponent: "sw-cms-preview-text-image",
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed',
    },
    slots: {
        image1:'image',
        image2:'image',
        image3:'image',
        image4:'image',
        image5:'image',
        image6:'image',
        text1:'text',
        text2:'text',
        text3:'text',
        text4:'text',
        text5:'text',
        text6:'text',
    }
})