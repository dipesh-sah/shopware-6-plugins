import template from './sw-cms-preview-text-image.html.twig';
import './sw-cms-preview-text-image.scss'
Shopware.Component.register('sw-cms-preview-text-image', {
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset')
        }
    }
})