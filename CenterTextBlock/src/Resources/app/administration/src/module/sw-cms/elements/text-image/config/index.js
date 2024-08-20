import template from './sw-cms-element-config-text-image.html.twig'
const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-element-config-text-image', {
    template,
    mixins: [
        Mixin.getByName('cms-element'),
    ],
    methods:{
        onInput(content){
            this.emitChanges(content);
        },
        onBlur(content){
            this.emitChanges(content);
        },
        emitChanges(content){
            if (content !== this.element.config.content.value) {
                this.element.config.content.value = content;
                this.$emit('element-update', this.element)
            }
        }

    }
})