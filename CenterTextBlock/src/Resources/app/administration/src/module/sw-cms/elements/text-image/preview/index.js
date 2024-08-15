import template from './sw-cms-six-image-with-title-preview.html.twig'

Shopware.Component.register('sw-cms-six-image-with-title-preview', {
    template,
    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset')
        }
    }
})